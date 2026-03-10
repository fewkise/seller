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
      <div className={styles.controls}>
        <input 
          className={styles.searchInput}
          type="text" 
          placeholder="Поиск по объявлениям..." 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <Link to='/createNewItem'><button className={styles.addBtn}>+ ДОБАВИТЬ ОБЪЯВЛЕНИЕ</button></Link>
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
