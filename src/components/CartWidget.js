import React from 'react'
import CartImg from '../assets/shopping-cart.png'
import '../styles/NavBar.css';
import {useCartContext} from '../CartContext';

const CartWidget = () => {
    const {totalProducts} = useCartContext()
    return (

        <div className='cart-container'>
            <div>
                <span className='cart-counter'>{totalProducts() || []}</span>
            </div>
            <div>
                <img className='cart-img' src={CartImg} alt='Cart-Img'/>
            </div>
        </div>
    )
}

export default CartWidget