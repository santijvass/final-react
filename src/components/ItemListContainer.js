import React, {useEffect, useState} from 'react';
import Item from './Item'
import {useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import '../styles/Item.css';

const ItemListContainer = () => {
    const [allProducts, setAllProducts] = useState(null)
    const {category} = useParams()

    useEffect(() => {

        if(category) {
                const db = getFirestore()
                const q = query(collection(db, 'products'), where('category', '==', category))
                getDocs(q).then((snapshot) => {
                    const filteredProducts = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
                    setAllProducts(filteredProducts)
                    console.log(filteredProducts)
                })
        } else {
            const db = getFirestore()
            const itemsCollection = collection(db, 'products')
                getDocs(itemsCollection).then((snapshot) => {
                    const products = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
                    setAllProducts(products)
                })
            }
    }, [category])        

    return (
        <>
         <h1 className='title'>BIKE PRO</h1>
         <div className='card-container'>
            {allProducts && allProducts.map((product) => (
                <Item key={product.id} product={product}/>
            ))}
         </div>
        </>
    )
}

export default ItemListContainer