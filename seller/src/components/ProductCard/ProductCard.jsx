import styles from './ProductCard.module.css';

const ProductCard = ({ item }) => {
  const imageUrl = `http://localhost:5000/uploads/${item.image_url}`;

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={item.title} className={styles.image} />
      <div className={styles.body}>
        <div className={styles.category}>Закрытые грузопассажирские автомобили</div>
        <h3 className={styles.title}>{item.title}</h3>
        <div className={styles.specs}>
          <span>{item.year}</span> <span>{item.weight} kg</span> <span>{item.mileage} km</span>
        </div>
        <div className={styles.footer}>
          <div className={styles.location}>📍 {item.location}</div>
          <div className={styles.price}>{item.price?.toLocaleString()} €</div>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
