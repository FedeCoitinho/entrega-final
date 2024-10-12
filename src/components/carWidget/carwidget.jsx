import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CarWidget  = () => {
  
const {cantCarrito} = useContext(CartContext);

  return (
    <div className="car-widget">
      <Link to="/carrito" className="fas fa-shopping-cart">

        <span> {cantCarrito()}</span>

      </Link>

    
    </div>
  );
}

export default CarWidget;