import HeaderSeller from '../../components/HeaderSeller/HeaderSeller';
import Footer from '../../components/Footer/Footer';
import Section9 from './Section9/Section9';
import styles from './ProfileSeller.module.css';
import { Link } from 'react-router-dom';

const ProfileSeller = () => {
  return (
    <div className={styles.pageWrapper}>
      <HeaderSeller />
      
      <main className={styles.container}>
        <h1 className={styles.mainTitle}>Мои объявления</h1>
        <nav className={styles.tabs}>
          <Link to="/" className={styles.activeTab}>Мои объявления</Link>
          <Link to="/registerSeller">Сообщения</Link>
          <Link to="/subSeller">Управление подпиской</Link>
          <Link to="/settingsSeller">Настройки профиля</Link>
        </nav>
        <Section9 />
        
      </main>

      <Footer/>
    </div>
  );
};

export default ProfileSeller;
