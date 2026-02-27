import React, { useState } from 'react';
import s from './section7.module.css';
import { useNavigate } from 'react-router-dom';
const Section7 = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            alert(data.message || data.error);
            navigate('/login')
        } catch (err) {
            alert('Ошибка сервера');
        }
    };

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit} className={s.form}>
                <h2 className={s.title}>Регистрация</h2>
                <p className={s.subtitle}>Заполните указаные поля,<br/>чтобы создать акаунт</p>

                <div className={s.inputGroup}>
                    <label className={s.label}>Имя</label>
                    <input 
                        type="text" 
                        className={s.input}
                        onChange={e => setFormData({...formData, firstName: e.target.value})} 
                    />
                </div>

                <div className={s.inputGroup}>
                    <label className={s.label}>Фамилия</label>
                    <input 
                        type="text" 
                        className={s.input}
                        onChange={e => setFormData({...formData, lastName: e.target.value})} 
                    />
                </div>

                <div className={s.inputGroup}>
                    <label className={s.label}>Email</label>
                    <input 
                        type="email" 
                        className={s.input}
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                    />
                </div>

                <div className={s.inputGroup}>
                    <label className={s.label}>Придумайте пароль</label>
                    <input 
                        type="password" 
                        className={s.input}
                        onChange={e => setFormData({...formData, password: e.target.value})} 
                    />
                </div>

                <div className={s.terms}>
                    <input type="checkbox" id="terms" className={s.checkbox} required defaultChecked />
                    <label htmlFor="terms" className={s.termsText}>
                        Авторизуясь, Вы принимаете <span className={s.greenLink}>Условия использования</span> и <span className={s.greenLink}>Заявлением о конфиденциальности NOVO</span>
                    </label>
                </div>

                <button type="submit" className={s.button}>ПРОДОЛЖИТЬ</button>
            </form>
        </div>
    );
};

export default Section7;
