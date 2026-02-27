import React from 'react'
import img_1 from '../../../assets/category 01.png'
import img_2 from '../../../assets/category 02.png'
import img_3 from '../../../assets/category 03.png'
import img_4 from '../../../assets/category 04.png'
import styles from './Section2.module.css'
const Section2 = () => {
  return (
    <section className={styles.forsec}>
        <div className={styles.forcontainer}>
            <p>Про компанию</p>
            <p>NOVO - торговая площадка коммерческого <br /> транспорта и тяжелой техники</p>
            <div className={styles.forcardscontainer}>
                <div className={styles.card}>
                    <img src={img_1} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={img_2} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={img_3} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={img_4} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2
