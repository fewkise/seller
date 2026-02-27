import React from 'react'
import styles from './Section5.module.css'
import tele from '../../../assets/X Mockup.png'
const Section5 = () => {
  return (
    <section className={styles.forsec}>
        <div className={styles.forcontainer}>
            <div >
                <img src={tele} alt="" />
            </div>
            <div className={styles.cont}>
                <p>Хотите размещать больше 50-ти <br /> объявлений в месяц? </p>
                <p>Мы предложим индивидуальные <br />условия сотрудничества!</p>
                <button>отдел продаж</button>
            </div>
        </div>
    </section>
  )
}

export default Section5
