require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
const bcrypt = require('bcryptjs')
const app = express()
app.use(cors())
app.use(express.json())
const path = require('path');
const multer = require('multer');
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });
app.post('/api/products', upload.single('image'), async (req, res) => {
    try {
        const { title, price, year, weight, mileage, location, category, description } = req.body;
        const imageUrl = req.file ? req.file.filename : null

        const result = await pool.query(
            'INSERT INTO products (title, price, year, weight, mileage, location, category, description, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [title, Number(price), year, weight, mileage, location, category, description, imageUrl]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Ошибка при создании" });
    }
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get('/api/text', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM plans')
        res.json(result.rows) 
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products ORDER BY id DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.post('/api/auth/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id, email',
            [firstName, lastName, email, hashedPassword]
        );
        res.status(201).json({ message: "Успех!", user: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Ошибка при регистрации" });
    }
});
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        
        if (result.rows.length === 0) {
            return res.status(400).json({ error: "Пользователь не найден" });
        }
        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Неверный пароль" });
        }
        res.json({ 
            message: "Вы вошли!", 
            user: { id: user.id, email: user.email, firstName: user.first_name, lastName: user.last_name } 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера при входе" });
    }
});
app.listen(5000, () => console.log('Server running on port 5000'))