import HeaderSeller from '../../components/HeaderSeller/HeaderSeller';
import Footer from '../../components/Footer/Footer';
import Section14 from './Section14/Section14';
import styles from './RegisterSeller.module.css';

const RegisterSeller = () => {
  return (
    <div className={styles.pageWrapper}>
      <HeaderSeller />
      <main className={styles.container}>
        <Section14 />
      </main>
      <Footer />
    </div>
  );
};

export default RegisterSeller;
