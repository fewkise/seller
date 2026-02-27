import React from 'react'
import styles from './Section3.module.css'
import img_1 from '../../../assets/image 22.png'
import img_2 from '../../../assets/image 21.png'
import img_3 from '../../../assets/image 23.png'
import img_4 from '../../../assets/image 20.png'
import img_5 from '../../../assets/image 24.png'
const Section3 = () => {
  return (
    <section className={styles.forcontainer}>
        <div className={styles.imgcontainer}>
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
            <div className={styles.card}>
                <img src={img_5} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Section3
