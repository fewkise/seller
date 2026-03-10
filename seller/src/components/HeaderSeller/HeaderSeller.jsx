import styles from './HeaderSeller.module.css';

const HeaderSeller = () => (
  <header className={styles.header}>
    <div className={styles.top}>
      <span className={styles.logo}>NOVO SELLER</span>
      <button className={styles.mainBtn}>ПЕРЕЙТИ НА NOVO</button>
    </div>

  </header>
);
export default HeaderSeller;
