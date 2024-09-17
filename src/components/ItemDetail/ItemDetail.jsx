

const ItemDetail = ({item}) => {
    
    const intemCount = 5;

    return (
        <div>
            <div>
                <img src={item.image} alt="item.product_name" />
                <div>
                    <h3>{item.product_name}</h3>
                    <p>{item.description}</p>
                    <p>Categoria: {item.category}</p>
                    <p> Precio: ${item.price}</p>
                
                </div>

            </div>
        </div>
    )
}

export default ItemDetail