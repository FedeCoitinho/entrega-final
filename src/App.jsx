import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider } from './components/context/CartContext';
import Carrito from './components/Carrito/Carrito';


function App() {


  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <NavBar/>

        <Routes>
            <Route path ="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/> }/>
            <Route path="/productos/:category" element={<ItemListContainer/> }/>
            <Route path="/carrito" element={<Carrito/>} />
        </Routes>
 
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App
