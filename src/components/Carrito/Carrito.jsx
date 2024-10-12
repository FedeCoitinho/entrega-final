import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
    const {carrito} = useContext(CartContext);
    console.log(carrito)

    return (
        <div>
          <h1>Carrito de Compras</h1>
          {carrito.map((prod) => (
            <div key={prod.id}>
              <h2>{prod.product_name}</h2>
              <p>Precio por unidad: ${prod.price}</p>
              <p>Cantidad: {prod.cantidad}</p>
              <p>Precio total: ${prod.price * prod.cantidad}</p>
            </div>
          ))}
        </div>
      );
    };
    
    export default Carrito;