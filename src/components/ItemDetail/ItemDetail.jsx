import { useContext, useState } from "react"
import ItemCount from "../ItemCount.jsx/ItemCount"
import { CartContext } from "../context/CartContext"
import Item from "../Item/Item";
import styles from "./itemDetail.module.css"


const ItemDetail = ({item}) => {

    const {carrito, agregarAlCarrito } = useContext(CartContext);
       
    
    const [ cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        setCantidad(cantidad + 1)

    }


    return (
        <div className={styles.itemDetailContainer}>
            <img src={item.image} alt={item.product_name} className={styles.itemImage} />
            <div className={styles.itemDetails}>
                <h3>{item.product_name}</h3>
                <p>{item.description}</p>
                <p>Categoría: {item.category}</p>
                <p>Precio: ${item.price}</p>
                <ItemCount 
                    cantidad={cantidad} 
                    handleSumar={handleSumar} 
                    handleRestar={handleRestar} 
                    handleAgregar={() => agregarAlCarrito(item, cantidad)} 
                />
            </div>
        </div>
    );
};

export default ItemDetail;