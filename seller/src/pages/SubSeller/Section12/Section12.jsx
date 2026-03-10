import styles from './Section12.module.css';

const Section12 = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.blockTitle}>Ваш тарифный план:</h3>
      
      <div className={styles.currentPlanBox}>
        <div className={styles.planCardActive}>
          <div className={styles.planIcon}>⚪</div>
          <span className={styles.planName}>Starter</span>
          <h2 className={styles.priceFree}>Бесплатно</h2>
          <p className={styles.planLimit}>До 10 объявлений</p>
        </div>

        <div className={styles.planInfo}>
          <div className={styles.infoRow}>
            <span>Оплачено:</span>
            <strong>15.10.2020</strong>
          </div>
          <div className={styles.infoRow}>
            <span>Действителен до:</span>
            <strong>15.10.2021</strong>
          </div>
          <p className={styles.infoNote}>
            * Вы выбрали бесплатный пакет Starter, который действует до 15.10.2021. <br/>
            С 15.09.21 этот пакет будет стоить 499 гривен / месяц.
          </p>
        </div>
      </div>

      <h3 className={styles.blockTitle}>Другие тарифные планы:</h3>
      
      <div className={styles.otherPlansContainer}>
        <div className={styles.plansList}>
          <div className={styles.planCardSmall}>
            <div className={styles.planIconSmall}>∞</div>
            <span className={styles.planNameSmall}>Premium</span>
            <div className={styles.priceRow}>
              <span className={styles.currency}>₴</span>
              <span className={styles.priceValue}>999</span>
              <span className={styles.period}>/ месяц</span>
            </div>
            <p className={styles.planLimitSmall}>До 30 объявлений</p>
            <button className={styles.arrowBtn}>→</button>
          </div>
          <div className={styles.planCardSmall}>
            <div className={styles.planIconSmall}>∞</div>
            <span className={styles.planNameSmall}>Ultimate</span>
            <div className={styles.priceRow}>
              <span className={styles.currency}>₴</span>
              <span className={styles.priceValue}>1999</span>
              <span className={styles.period}>/ месяц</span>
            </div>
            <p className={styles.planLimitSmall}>До 50 объявлений</p>
            <button className={styles.arrowBtn}>→</button>
          </div>
        </div>

        <div className={styles.salesContact}>
          <p>Для размещения более 50-ти объявлений в месяц, свяжитесь с отделом продаж</p>
          <button className={styles.salesBtn}>ОТДЕЛ ПРОДАЖ</button>
        </div>
      </div>
    </section>
  );
};

export default Section12;
