import React from 'react';
import './NavBar.css';
import CarWidget from '../carWidget/carwidget';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav>
            <Link to="/"> <h1>Milye Pet</h1></Link>
            <ul>
                <li ><Link className='item' to='/'>Menu Principal</Link></li>
                <li ><Link className='item' to='productos/perro'>Comida de perro</Link></li>
                <li ><Link className='item' to="productos/gato">Comida de Gato</Link></li>
                <li ><Link className='item' to='/contacto'>Contacto</Link></li>
                <CarWidget/> 
            </ul>
        </nav>
    );
}

export default NavBar