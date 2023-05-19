import React from 'react';
import {useCartContext} from '../CartContext';
import '../styles/Item.css';

const ItemCart = ({product}) => {
    const {id, image, name, price, quantity} = product

    const {removeItem} = useCartContext()
    return (
        <div className='card'>
            <img className='card-img' src={image} alt={name}/>
            <h2 className='card-title'>{name}</h2>
            <h3 className='card-p'>${price}</h3>
             <p className='card-quantity'>Cantidad: {quantity}</p>
             <p className ='card-subt'> Subtotal: U$D {quantity * price} </p>
             <button className='card-remove' onClick ={() => removeItem(id)}>Eliminar Item</button>
        </div>
    )
}

export default ItemCart