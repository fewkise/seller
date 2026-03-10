import HeaderSeller from '../../components/HeaderSeller/HeaderSeller';
import Footer from '../../components/Footer/Footer';
import Section12 from './Section12/Section12';
import styles from './SubSeller.module.css';

const SubSeller = () => {
  return (
    <div className={styles.pageWrapper}>
      <HeaderSeller />
      
      <main className={styles.container}>
        <h1 className={styles.mainTitle}>Управление подпиской</h1>
        
        <nav className={styles.tabs}>
          <span>Мои объявления</span>
          <span>Сообщения (4 новых)</span>
          <span className={styles.activeTab}>Управление подпиской</span>
          <span>Настройки профиля</span>
        </nav>

        <Section12 />
      </main>

      <Footer />
    </div>
  );
};

export default SubSeller;
