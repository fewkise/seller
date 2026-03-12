import HeaderSeller from '../../components/HeaderSeller/HeaderSeller';
import Footer from '../../components/Footer/Footer';
import Section10 from './Section10/Section10';
import styles from './CreateNewItem.module.css';
import { Link } from 'react-router-dom';

const CreateNewItem = () => {
  return (
    <div className={styles.pageWrapper}>
      <HeaderSeller />
      <main className={styles.container}>
        <div className={styles.topInfo}>
           <Link to='/profileSeller'><span className={styles.back}>‹ Назад</span></Link>
           <h1>Создание нового объявления</h1>
        </div>
        <Section10 />
      </main>
      <Footer />
    </div>
  );
};
export default CreateNewItem;
