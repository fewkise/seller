import { useState, useEffect } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import styles from './Section9.module.css';
import { Link } from 'react-router-dom';

const Section9 = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("Ошибка загрузки:", err));
  }, []);

  const filtered = items.filter(i => 
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className={styles.section}>
      <div className={styles.stats}>
        Использовано объявлений: <span className={styles.statsCount}>4/10</span>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchWrapper}>
          <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a884" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            className={styles.searchInput}
            type="text" 
            placeholder="Поиск по объявлениям" 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
        
        <Link to='/createNewItem' className={styles.addLink}>
          <button className={styles.addBtn}>
            <span className={styles.plusIcon}>+</span> ДОБАВИТЬ ОБЪЯВЛЕНИЕ
          </button>
        </Link>
      </div>

      <div className={styles.grid}>
        {filtered.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <button className={styles.loadMore}>ЗАГРУЗИТЬ ЕЩЕ</button>
    </section>
  );
};

export default Section9;
