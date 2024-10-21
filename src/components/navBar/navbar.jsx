import React from 'react';
import styles from './navBar.module.css';
import CarWidget from '../carWidget/carwidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className={styles.nav}>
            <Link to="/" className={styles.logo}><h1>Milye Pet</h1></Link>
            <ul className={styles.navList}>
                <li><Link className={styles.item} to='/'>Menu Principal</Link></li>
                <li><Link className={styles.item} to='productos/perro'>Comida de perro</Link></li>
                <li><Link className={styles.item} to='productos/gato'>Comida de Gato</Link></li>
                <li><Link className={styles.item} to='/contacto'>Contacto</Link></li>
                <CarWidget/>
            </ul>
        </nav>
    );
}

export default NavBar;
