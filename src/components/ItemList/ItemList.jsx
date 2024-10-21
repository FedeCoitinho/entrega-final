import React from "react";
import Item from "../Item/Item";
import styles from "./item.module.css"

const ItemList = ( {productos}) => {

    return (
        <div>
            <h2>Productos</h2>
            <div className={styles.gridContainer}>
                {productos.map ( (prod) => <Item producto={prod}  key={prod.id} />) }
            </div>
        </div>
    )
}
export default ItemList