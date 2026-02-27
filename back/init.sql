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