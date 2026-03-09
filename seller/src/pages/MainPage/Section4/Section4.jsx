import React, { useEffect, useState } from 'react';
import styles from './Section4.module.css';

const Section4 = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/text')
      .then((res) => res.json())
      .then((data) => {
        setText(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Ошибка:", err));
  }, []);

  return (
    <section className={styles.forsec}>
      <div className={styles.forcont}>
        <p className={styles.subtitle}>Тарифы и цены</p>
        <h2 className={styles.title}>
          Стань продавцом сегодня и получи <br /> 10 объявлений бесплатно!
        </h2>
        
        <div className={styles.cont}>
          {text.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.circleIcon}></div>
              <p className={styles.cardName}>{item.name}</p>
              <h3 className={styles.price}>
                {item.price === "0" || item.price === 0 || item.price === "Бесплатно" 
                  ? "Бесплатно" 
                  : item.price}
              </h3>
              <p className={styles.description}>{item.description}</p>
              <button className={styles.btn}>
                <span>{'>'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
