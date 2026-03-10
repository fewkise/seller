import HeaderSeller from '../../components/HeaderSeller/HeaderSeller';
import Footer from '../../components/Footer/Footer';
import Section11 from './Section11/Section11';
import styles from './SettingsSeller.module.css';
import { Link } from 'react-router-dom';

const SettingsSeller = () => {
  return (
    <div className={styles.pageWrapper}>
      <HeaderSeller />
      
      <main className={styles.container}>
        <h1 className={styles.mainTitle}>Настройки профиля</h1>
        
        <nav className={styles.tabs}>
          <Link to='/profileSeller'><span>Мои объявления</span> </Link>
          <span>Сообщения (4 новых)</span>
          <span>Управление подпиской</span>
          <Link to='/settingsSeller'><span className={styles.activeTab}>⚙️ Настройки профиля</span></Link>
        </nav>

        <div className={styles.profileHeader}>
          <h3>Профиль OTP Leasing</h3>
          <button className={styles.logoutBtn}>Выйти из аккаунта</button>
        </div>
        <Section11 />
      </main>

      <Footer />
    </div>
  );
};

export default SettingsSeller;
