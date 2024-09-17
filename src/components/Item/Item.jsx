import { Link } from "react-router-dom"


const Item = ( {producto} ) => {

    return(
        <div>
            <img src= {producto.image} />
            <div>
                <h4>{producto.product_name}</h4>
                <p> Precio: ${producto.price}</p>
                <p>Categoria: {producto.category}</p>
                <Link to={`/Item/${producto.id}`}> ver mas</Link>
            </div>
        </div>
    )
}   

export default Item