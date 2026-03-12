import { useState } from 'react';
import styles from './Section14.module.css';

const Section14 = () => {
  const [formData, setFormData] = useState({
    email: '', password: '', companyName: '', country: '',
    city: '', address: '', zip: '', phone: '',
    website: '', contactName: '', contactPhone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные регистрации:', formData);
  };

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h1>Регистрация продавца</h1>
        <p>Заполните указанные поля, чтобы создать аккаунт продавца</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={styles.sectionTitle}>Аккаунт</h3>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>E-mail</label>
            <input type="email" name="email" placeholder="google@gmail.com" onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Пароль</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
        </div>

        <h3 className={styles.sectionTitle}>Про компанию</h3>
        <div className={styles.grid}>
          <div className={styles.inputGroup}>
            <label>Название компании</label>
            <input type="text" name="companyName" onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Страна</label>
            <input type="text" name="country" onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Город</label>
            <input type="text" name="city" onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Адрес</label>
            <input type="text" name="address" onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Почтовый индекс</label>
            <input type="text" name="zip" onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Мобильный телефон</label>
            <input type="text" name="phone" onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Веб-сайт</label>
            <input type="text" name="website" onChange={handleChange} />
          </div>
        </div>

        <h3 className={styles.sectionTitle}>Контактное лицо</h3>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>ФИО</label>
            <input type="text" name="contactName" onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Мобильный телефон</label>
            <input type="text" name="contactPhone" onChange={handleChange} />
          </div>
        </div>

        <div className={styles.terms}>
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            Авторизуясь, Вы принимаете Условия использования и Заявлением о конфиденциальности NOVO
          </label>
        </div>

        <button type="submit" className={styles.submitBtn}>ПРОДОЛЖИТЬ</button>
      </form>
    </section>
  );
};

export default Section14;
