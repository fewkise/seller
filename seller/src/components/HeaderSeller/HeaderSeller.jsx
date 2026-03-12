import { Link } from 'react-router-dom';
import styles from './HeaderSeller.module.css';

const HeaderSeller = () => (
  <header className={styles.header}>
    <div className={styles.top}>
      <Link to='/'><span className={styles.logo}>NOVO SELLER</span></Link>
      <button className={styles.mainBtn}>ПЕРЕЙТИ НА NOVO</button>
    </div>

  </header>
);
export default HeaderSeller;
