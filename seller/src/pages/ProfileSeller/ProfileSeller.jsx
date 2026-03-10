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
        <nav className={styles.tabs}>
          <span className={styles.activeTab}>Мои объявления</span>
          <span>Сообщения</span>
          <Link to='/subSeller'><span>Управление подпиской</span></Link>
          <Link to='/settingsSeller'><span>Настройки профиля</span></Link>
        </nav>

        <p className={styles.stats}>Использовано объявлений: <b>4/10</b></p>
        <Section9 />
        
      </main>

      <Footer/>
    </div>
  );
};

export default ProfileSeller;
