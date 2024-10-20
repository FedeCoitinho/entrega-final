import { useEffect, useState } from 'react';

import './itemListConainer.css'
import ItemList from '../Itemlist/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';


const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const category = useParams().category;
    
    useEffect (() => {
        const prodRef = collection(db, "productos");

        const q = category ? query(prodRef, where("category", "==", category )) : prodRef;
        
        getDocs(q)
        .then((resp) => {
            setProductos(
                resp.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })
            )
        })
        
    }, [category])
    
    
    return (
        <div> 
            <ItemList productos ={productos}/>
        </div>
    );
}

export default ItemListContainer;