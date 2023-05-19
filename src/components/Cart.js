import React from 'react';
import {useCartContext} from '../CartContext';
import {Link} from 'react-router-dom';
import ItemCart from './ItemCart';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import Swal from 'sweetalert2'
import '../styles/Item.css';

const Cart = () => {
    const {cart, totalPrice} = useCartContext()


  const sendOrder = () => {

    const order = {
        Buyer: {
            Name: 'Matias',
            Phone: '3516170266',
            Email: 'sivadon.m@gmail.com',
            Address: 'Av. Siempre Viva 123'
        },
        Items: cart,
        Total: totalPrice()
    }
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order).then(({id}) => Swal.fire('Gracias por su compra! Su número de orden es ' + id))
    }

    if(cart.length === 0) {
        return (
            <>
                <h2 className='msj-no-products'>No hay productos en el carrito</h2>
                <Link className='msj-add-products' to='/'>Agregar productos al carrito</Link>
            </>
        )
    } 

    return (
        <>
            {cart.map(product => <ItemCart key={product.id} product={product} />)}
            <p className='card-total'> Total a pagar: U$D {totalPrice()} </p>
            <button className='buy-btn' onClick={sendOrder}>Finalizar compra</button>
        </>
    )  
}

export default Cart