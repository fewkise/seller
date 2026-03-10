import HeaderSeller from '../../components/HeaderSeller/HeaderSeller';
import Footer from '../../components/Footer/Footer';
import Section10 from './Section10/Section10';
import styles from './CreateNewItem.module.css';

const CreateNewItem = () => {
  return (
    <div className={styles.pageWrapper}>
      <HeaderSeller />
      <main className={styles.container}>
        <div className={styles.topInfo}>
           <span className={styles.back}>‹ Назад</span>
           <h1>Создание нового объявления</h1>
        </div>
        <Section10 />
      </main>
      <Footer />
    </div>
  );
};
export default CreateNewItem;
