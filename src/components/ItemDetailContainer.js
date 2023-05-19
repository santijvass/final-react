import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {getFirestore, getDoc, doc} from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [detailProducts, setDetailProducts] = useState(null)
    const {id} = useParams()

        useEffect(() => {
            const db = getFirestore()
            const detailProduct = doc(db, 'products', id)
            console.log(detailProduct);
            getDoc(detailProduct).then((snapshot) => {
                if(snapshot.exists()) {
                    setDetailProducts({id:snapshot.id, ...snapshot.data()})
                }
            })
        }, [id])

        return (
            <>
             <h1>BIKE PRO</h1>
             <div className='card-container'>
                    <ItemDetail key={id} product={detailProducts}/>
             </div>
            </>
        )
    }
    
    export default ItemDetailContainer
            
