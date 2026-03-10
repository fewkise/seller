import { useState } from 'react';
import styles from './Section11.module.css';

const Section11 = () => {
  // Состояние, где каждая секция управляется отдельно
  const [openSections, setOpenSections] = useState({
    account: true,
    contact: true,
    company: true
  });

  const toggle = (id) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className={styles.accordionContainer}>
      <div className={styles.item}>
        <div className={styles.header} onClick={() => toggle('account')}>
          <span className={styles.title}>Настройки акаунта</span>
          <span className={`${styles.arrow} ${openSections.account ? styles.up : ''}`}>⌄</span>
        </div>
        {openSections.account && (
          <div className={styles.content}>
            <div className={styles.currentEmail}>
              <label>Ваш E-mail адрес:</label>
              <p>email@gmail.com</p>
            </div>
            <div className={styles.formRow}>
              <div className={styles.column}>
                <label>Изменить E-mail адрес</label>
                <input type="email" placeholder="google@gmail.com" className={styles.input} />
                <button className={styles.saveBtn}>СОХРАНИТЬ</button>
              </div>
              <div className={styles.column}>
                <label>Изменить пароль</label>
                <input type="password" className={styles.input} />
                <button className={styles.saveBtn}>СОХРАНИТЬ</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.item}>
        <div className={styles.header} onClick={() => toggle('contact')}>
          <span className={styles.title}>Изменить контактную информацию</span>
          <span className={`${styles.arrow} ${openSections.contact ? styles.up : ''}`}>⌄</span>
        </div>
        {openSections.contact && (
          <div className={styles.content}>
            <p className={styles.description}>Тут вы можете поменять информацию про компанию, которую видят ваши клиенты</p>
            <div className={styles.contactGrid}>
              {['Название компании', 'Страна', 'Город', 'Адрес', 'Почтовый индекс', 'Мобильный телефон', 'Веб-Сайт', 'Время работы'].map((label) => (
                <div key={label} className={styles.inputGroup}>
                  <label>{label}</label>
                  <input type="text" className={styles.input} />
                </div>
              ))}
            </div>
            <button className={styles.submitBtnLarge}>СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
          </div>
        )}
      </div>

      <div className={styles.item}>
        <div className={styles.header} onClick={() => toggle('company')}>
          <span className={styles.title}>Изменить информацию о компании</span>
          <span className={`${styles.arrow} ${openSections.company ? styles.up : ''}`}>⌄</span>
        </div>
        {openSections.company && (
          <div className={styles.content}>
            <p className={styles.description}>
              Опишите вашу компанию. Эта информация будет показана на странице продавца
            </p>
            <div className={styles.editorContainer}>
              <div className={styles.toolbar}>
                <span>B</span> <span>I</span> <span>U</span> <span>A</span> <span>H1</span> <span>≡</span>
              </div>
              <textarea className={styles.textarea} placeholder="Описание..."></textarea>
            </div>
            <button className={styles.submitBtnLarge}>СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section11;
