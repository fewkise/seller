import React from 'react'
import styles from './Section1.module.css'
const Section1 = () => {
  return (
    <section className={styles.forContainer}>
        <div >
            <p>Novo - маркетплейс техники</p>
            <p>Продавай технику <br /> быстро и удобно! </p>
            <button>стать продавцем на Novo</button>
        </div>
    </section>
  )
}

export default Section1
