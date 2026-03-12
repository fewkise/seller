import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/N.SELLER.png'
const Header = () => {
  return (
    <header className={styles.forHeader}>
        <div  className={styles.container}>
            <Link to='/'><img src={logo} alt="" /></Link>
            <ul>
                <li><Link to='/profileSeller'>Маркетплейс</Link></li>
                <li><Link>Про нас </Link></li>
                <li><Link>Преимущества</Link></li>
                <li><Link>Тарифы</Link></li>
            </ul>
            <Link to='/login'><button>Войти</button></Link>
        </div>
    </header>
  )
}

export default Header
