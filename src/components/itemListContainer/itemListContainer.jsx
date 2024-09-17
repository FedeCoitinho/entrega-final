import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import './itemListConainer.css'
import ItemList from '../Itemlist/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const category = useParams().category;
    
    useEffect (() => {
        pedirDatos ()
            .then ((res) =>{
                
                if(category){
                    setProductos ( res.filter((prod) => prod.category === category));
                }else {
                setProductos(res);
                }
            })
    }, [category])
    
    
    return (
        <div> 
            <ItemList productos ={productos}/>
        </div>
    );
}

export default ItemListContainer;