import React from 'react';
import './NavBar.css';
import CarWidget from '../carWidget/carwidget';

function NavBar() {
    const itemCount = 5;

    return (
        <nav>
            <ul>
                <li className='item'>Menu Principal</li>
                <li className='item'>Comida de perro</li>
                <li className='item'>Comida de Gato</li>
                <li className='item'>Contacto</li>
                <CarWidget itemCount={itemCount} /> 
            </ul>
        </nav>
    );
}

export default NavBar;