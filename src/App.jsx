import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './components/context/CartContext';
import Carrito from './components/Carrito/Carrito';


function App() {

  const [carrito, setCarrito] = useState([]);
  
  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito];
    const enCarrito = nuevoCarrito.find((item) => item.id === itemAgregado.id);

    if(enCarrito){
        enCarrito.cantidad += cantidad;
        
    }else {
    nuevoCarrito.push(itemAgregado)
    }
    setCarrito(nuevoCarrito);

    console.log(carrito);
}
const cantCarrito = () => {
return carrito.reduce( ( acc, prod) => acc + prod.cantidad, 0);

}

  


  return (
    <>
    <CartContext.Provider value={{carrito, agregarAlCarrito, cantCarrito}}>
    <BrowserRouter>
      <NavBar/>

        <Routes>
            <Route path ="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/> }/>
            <Route path="/productos/:category" element={<ItemListContainer/> }/>
            <Route path="/carrito" element={<Carrito/>} />
        </Routes>

    </BrowserRouter>
    </CartContext.Provider>
    </>
  );
}

export default App
