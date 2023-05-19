import React, {useState, useContext} from 'react';
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    
    console.log('cart', cart)


    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({...item, quantity:newQuantity})
        setCart(newCart)
    }

    const clear = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))

    const totalPrice = () => {
        return cart.reduce((accumulator, act) => accumulator + act.quantity * act.price, 0)
    }

    const totalProducts = () => {
        return cart.reduce((accum, currentProduct) => accum + currentProduct.quantity, 0)
    }


    return (
        <CartContext.Provider value ={{clear, isInCart, removeItem, addProduct, totalPrice, totalProducts, cart}}>
            {children}
        </CartContext.Provider>    
    )
}

export default CartProvider