import React from 'react'
import { Link } from 'react-router-dom'
import img_1 from '../../assets/facebook-logo-button.png'
import img_2 from '../../assets/Vector.png'
import img_3 from '../../assets/youtube.png'
import logo from '../../assets/NOVO.png'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer>
        <div className={styles.forcont}>
            <div  className={styles.forconttop}>
                <div  className={styles.forcontmel}>
                    <Link to='/'><img src={logo} alt="" /></Link>
                    <p>Маркетплейс коммерчиского транспорта <br /> и тяжелой техники</p>
                </div>
                <div  className={styles.forcontmel}>
                    <p>Покупателю</p>
                    <Link to='/'>Служба поддержки</Link>
                </div>
                <div  className={styles.forcontmel}>
                    <Link>Стать правцем</Link>
                </div>
                <div  className={styles.forcontmel}>
                    <p>Следите за нами</p>
                    <div className={styles.forsocials}>
                        <Link><img src={img_1} alt="" /></Link>
                        <Link><img src={img_2} alt="" /></Link>
                        <Link><img src={img_3} alt="" /></Link>
                    </div>
                </div>
            </div>
            <div className={styles.niz}>
                <p>© 2019–2020 Группа компаний «NOVO»</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
