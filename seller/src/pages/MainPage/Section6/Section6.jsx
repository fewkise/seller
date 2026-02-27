import React from 'react'
import styles from './Section6.module.css'
import img_1 from '../../../assets/Rectangle 196.png'
import img_2 from '../../../assets/Rectangle 196 (1).png'
import img_3 from '../../../assets/Rectangle 196 (2).png'
const Section6 = () => {
  return (
    <section className={styles.forsec}>
        <div className={styles.forcont}>
            <div className={styles.cont}>
                <div>
                    <img src={img_1} alt="" />
                </div>
                <div>
                    <p>Шаг первый</p>
                    <p>Регистрация</p>
                </div>
            </div>
            <div className={styles.cont}>
                <div>
                    <img src={img_2} alt="" />
                </div>
                <div>
                    <p>Шаг второй</p>
                    <p>Выбор пакета</p>
                </div>
            </div>
            <div className={styles.cont}>
                <div>
                    <img src={img_3} alt="" />
                </div>
                <div>
                    <p>Шаг третий</p>
                    <p>Размещение <br />объявления</p>
                </div>
            </div>
            <button>СТАТЬ ПРОДАВЦОМ</button>
        </div>
    </section>
  )
}

export default Section6
