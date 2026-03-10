import { useState } from 'react';
import styles from './Section10.module.css';

const Section10 = () => {
  const [formData, setFormData] = useState({
    category: '',
    year: '',
    title: '',
    mileage: '',
    location: '',
    price: '',
    weight: '',
    description: ''
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (file) {
      data.append('image', file);
    }

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert("Успешно!");
        window.location.href = '/';
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.whiteCard}>
      <h2 className={styles.sectionTitle}>Обзор транспортного средства</h2>
      
      <div className={styles.inputGrid}>
        <div className={styles.inputGroup}>
          <label>Категория</label>
          <input name="category" value={formData.category} onChange={handleChange} type="text" placeholder="Категория" />
        </div>
        <div className={styles.inputGroup}>
          <label>Год</label>
          <input name="year" value={formData.year} onChange={handleChange} type="number" placeholder="Год" />
        </div>
        <div className={styles.inputGroup}>
          <label>Марка / Модель</label>
          <input name="title" value={formData.title} onChange={handleChange} type="text" placeholder="Название" />
        </div>
        <div className={styles.inputGroup}>
          <label>Пробег</label>
          <input name="mileage" value={formData.mileage} onChange={handleChange} type="number" placeholder="Пробег" />
        </div>
        <div className={styles.inputGroup}>
          <label>Страна</label>
          <input name="location" value={formData.location} onChange={handleChange} type="text" placeholder="Местоположение" />
        </div>
        <div className={styles.inputGroup}>
          <label>Цена (€)</label>
          <input name="price" value={formData.price} onChange={handleChange} type="number" placeholder="Цена" />
        </div>
        <div className={styles.inputGroup}>
          <label>Вес (кг)</label>
          <input name="weight" value={formData.weight} onChange={handleChange} type="number" placeholder="Вес" />
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Медиа файлы</h2>
      <div className={styles.photoGrid}>
        <label className={styles.mainPhotoBox}>
          {file ? file.name : "Добавить фото"}
          <input type="file" hidden onChange={(e) => setFile(e.target.files[0])} />
        </label>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.emptyPhotoBox}>+</div>
        ))}
      </div>

      <h2 className={styles.sectionTitle}>Описание</h2>
      <div className={styles.editorWrapper}>
        <div className={styles.toolbar}>
          <span>B</span> <span>I</span> <span>U</span>
        </div>
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          className={styles.textarea} 
          placeholder="Описание..."
        ></textarea>
      </div>

      <div className={styles.footerActions}>
          <button onClick={handleSubmit} className={styles.submitBtn}>
            СОЗДАТЬ ОБЪЯВЛЕНИЕ
          </button>
      </div>
    </section>
  );
};

export default Section10;
