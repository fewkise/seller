import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Section8.module.css'
import { useNavigate } from 'react-router-dom';
const Section8 = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (response.ok) {
                alert('Вы успешно вошли!')
                console.log('Данные пользователя:', data.user);
                navigate('/profileSeller')
            } else {
                alert(data.error || 'Ошибка входа')
            }
        } catch (err) {
            alert('Ошибка сети или сервер не запущен')
        }
    }

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit} className={s.form}>
                <h2 className={s.title}>Вход в аккаунт</h2>
                
                <div className={s.inputGroup}>
                    <label className={s.label}>E-mail</label>
                    <input 
                        type="email" 
                        placeholder="google@gmail.com" 
                        className={s.input}
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                        required
                    />
                </div>

                <div className={s.inputGroup}>
                    <label className={s.label}>Пароль</label>
                    <input 
                        type="password" 
                        className={s.input}
                        onChange={e => setFormData({...formData, password: e.target.value})} 
                        required
                    />
                </div>

                <div className={s.checkboxContainer}>
                    <input type="checkbox" id="remember" className={s.checkbox} />
                    <label htmlFor="remember" className={s.checkboxLabel}>Не выходить из системы</label>
                </div>

                <button type="submit" className={s.button}>ПРОДОЛЖИТЬ</button>
                
                <p className={s.footerText}>
                    Нет аккаунта? <Link className={s.link} to='/registration'>РЕГИСТРАЦИЯ</Link>
                </p>
            </form>
        </div>
    )
}

export default Section8
