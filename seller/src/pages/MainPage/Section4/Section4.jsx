import React, { useEffect, useState } from 'react'
import styles from './Section4.module.css'
const Section4 = () => {
    const [text, setText] = useState([])
    useEffect(()=>{
        fetch ('http://localhost:5000/api/text')
        .then(res => res.json())
        .then(data => setText(data))
        .catch(err =>console.log(err))
    }, [])
    console.log(text)
  return (
    <section className={styles.forsec}>
        <div className={styles.forcont}>
            <p>Тарифы и цены</p>
            <p>Стань продавцом сегодня и получи <br /> 10 объявлений бесплатно!</p>
            <div className={styles.cont}>
                {text.map((item)=>(
            <div className={styles.card}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
            </div>
            ))}
            </div>
            
        </div>
        
    </section>
  )
}

export default Section4
