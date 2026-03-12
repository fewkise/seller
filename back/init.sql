CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(150) UNIQUE NOT NULL,
    password TEXT NOT NULL
)

CREATE TABLE IF NOT EXISTS plans (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price VARCHAR(50) NOT NULL,
    description TEXT
)

TRUNCATE TABLE plans RESTART IDENTITY CASCADE;

INSERT INTO plans (name, price, description) VALUES 
('starter', 'бесплатно', 'до 10 объявлений'),
('premium', '999 в месяц', 'до 30 объявлений'),
('ultimate', '1999 в месяц', 'до 50 объявлений');
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(12, 2),
    year INT,
    weight INT,
    mileage INT,
    location VARCHAR(255),
    category VARCHAR(100) DEFAULT 'Мои объявления',
    description TEXT,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO products (title, price, year, weight, mileage, location, category, image_url, description) 
VALUES
('Opel COMBO Airco Elct Ramen', 1500, 2015, 2000, 490574, 'Netherlands', 'Закрытые грузопассажирские', 'Rectangle 112 (1).png', 'Отличное рабочее состояние, обслужен.'),
('Setra 317 UL-GT/Klima/6 Gang', 13900, 2011, 4500, 120000, 'Germany', 'Автобусы', 'Rectangle 112 (2).png', 'Комфортабельный автобус для межгорода.'),
('Mercedes-Benz V 250 d Avantgarde', 54300, 2018, 2500, 85000, 'Netherlands', 'Минивэны', 'Rectangle 112 (3).png', 'Полная комплектация, кожаный салон.'),
('Nissan Eco T 100 Paardenvervoer', 3100, 1995, 3500, 520000, 'Belgium', 'Спецтехника', 'Rectangle 112 (4).png', 'Для перевозки лошадей, на ходу.'),
('Renault Mascott 130.35 DC', 4850, 2006, 3000, 310000, 'Netherlands', 'Грузовики', 'Rectangle 112 (1).png', 'Бортовой грузовик, дизель.'),
('Cobus 2700 S Airport Bus', 43580, 2012, 5000, 45000, 'Netherlands', 'Автобусы', 'Rectangle 112 (2).png', 'Перронный автобус для аэропортов.');