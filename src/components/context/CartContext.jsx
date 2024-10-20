import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const enCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (enCarrito) {
            enCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado)

        }
        setCarrito([...carrito, itemAgregado]);


    }
    const cantCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

    }

    useEffect(() =>{
        localStorage.setItem("carrito", JSON.stringify (carrito))
    }, [carrito])

    return(<CartContext.Provider value={{carrito, agregarAlCarrito, cantCarrito}}>
        {children}
    </CartContext.Provider>
    ) 


}