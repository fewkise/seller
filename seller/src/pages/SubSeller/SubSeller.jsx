import HeaderSeller from '../../components/HeaderSeller/HeaderSeller';
import Footer from '../../components/Footer/Footer';
import Section12 from './Section12/Section12';
import styles from './SubSeller.module.css';
import { Link } from 'react-router-dom';

const SubSeller = () => {
  return (
    <div className={styles.pageWrapper}>
      <HeaderSeller />
      
      <main className={styles.container}>
        <h1 className={styles.mainTitle}>Управление подпиской</h1>
        
        <nav className={styles.tabs}>
          <Link to='/profileSeller'><span>Мои объявления</span></Link>
          <Link to='/registerSeller'><span>Сообщения (4 новых)</span></Link>
          <Link to='/subSeller'><span className={styles.activeTab}>Управление подпиской</span></Link>
          <Link to='/settingsSeller'><span>Настройки профиля</span></Link>
        </nav>

        <Section12 />
      </main>

      <Footer />
    </div>
  );
};

export default SubSeller;
