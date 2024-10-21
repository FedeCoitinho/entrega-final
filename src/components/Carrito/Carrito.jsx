import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Carrito.module.css"

const Carrito = () => {
    const {carrito} = useContext(CartContext);
    console.log(carrito)

    return (
      <>
          <h1 className={styles.titulo}>Carrito de Compras</h1>
          <div className={styles.gridContainer}>
              {carrito.map((prod) => (
                  <div key={prod.id} className={styles.carritoContainer}>
                      <img src={prod.image} alt={prod.product_name} />
                      <div>
                          <h2>{prod.product_name}</h2>
                          <p>Precio por unidad: ${prod.price}</p>
                          <p>Cantidad: {prod.cantidad}</p>
                          <p>Precio total: ${prod.price * prod.cantidad}</p>
                      </div>
                  </div>
              ))}
          </div>
      </>
  );
};

export default Carrito;