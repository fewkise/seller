import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Section13.module.css';

const Section13 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const SERVER_URL = 'http://localhost:5000/uploads/';

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => console.error(err));
  }, [id]);
    const handleDelete = async () => {
    if (window.confirm("Вы уверены, что хотите удалить это объявление?")) {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`, {
          method: 'DELETE'
        });
        if (res.ok) {
          alert("Объявление удалено");
          navigate('/')
        }
      } catch (err) {
        console.error("Ошибка удаления:", err);
      }
    }
  };

  if (!item) return <div className={styles.loader}>Загрузка...</div>;

    return (
    <section className={styles.section}>
      <div className={styles.topNav}>
        <span className={styles.back} onClick={() => navigate(-1)}>‹ Назад</span>
        <div className={styles.actions}>
          <button className={styles.editBtn}>Редактировать объявление</button>
          <button className={styles.deleteBtn} onClick={handleDelete}>Удалить</button>
        </div>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.gallery}>
          <img src={`${SERVER_URL}${item.image_url}`} className={styles.mainImg} />
          <div className={styles.thumbs}>
             <img src={`${SERVER_URL}${item.image_url}`} />
             <img src={`${SERVER_URL}${item.image_url}`} />
             <img src={`${SERVER_URL}${item.image_url}`} />
             <div className={styles.morePhotos}>Больше фото</div>
          </div>
        </div>

        <div className={styles.shortInfo}>
          <h1 className={styles.title}>{item.title}</h1>
          <span className={styles.categoryName}>{item.category}</span>
          
          <div className={styles.priceCard}>
            <div className={styles.specItem}><span>Год выпуска</span><strong>{item.year} год</strong></div>
            <div className={styles.specItem}><span>Пробег</span><strong>{item.mileage?.toLocaleString()} km</strong></div>
            <div className={styles.specItem}><span>Цена</span><strong className={styles.priceText}>{item.price?.toLocaleString()} €</strong></div>
          </div>
        </div>
      </div>

      <div className={styles.detailsBlock}>
        <h3>Обзор транспортного средства</h3>
        <div className={styles.specsTable}>
          <div className={styles.row}><span>Категория</span><strong>{item.category}</strong></div>
          <div className={styles.row}><span>Марка</span><strong>Nissan</strong></div>
          <div className={styles.row}><span>Модель</span><strong>{item.title}</strong></div>
          <div className={styles.row}><span>Год (начиная с)</span><strong>{item.year}</strong></div>
          <div className={styles.row}><span>Пробег</span><strong>{item.mileage?.toLocaleString()} km</strong></div>
          <div className={styles.row}><span>Страна</span><strong>{item.location}</strong></div>
          <div className={styles.row}><span>Вес</span><strong>{item.weight} kg</strong></div>
        </div>
      </div>

      <div className={styles.description}>
        <h3>Описание</h3>
        <p>{item.description}</p>
        <span className={styles.showMore}>Показать больше</span>
      </div>
    </section>
  );
};

export default Section13;
