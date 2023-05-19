import React, {useState} from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import {useCartContext} from '../CartContext';
import '../styles/ItemDetail.css';

const ItemDetail = ({product}) => {
    const {category, image, name, price, description, stock} = product || {}

    const [goToCart, setGoToCart] = useState(false)

    const {addProduct} = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(product, quantity)
    }

    return (
        <>
        <div className='container-detail'>
            <article className='card-detail'>
                <img className='card-img-dt' src={image} alt={name}/>
                <h2 className='card-title-dt'>{name}</h2>
                <h3 className='card-p-dt'>U$D {price}</h3>
                <p className='card-category'>{category}</p>
                <p className='card-descript'>{description}</p>
                <p className='card-stock'>{stock} unidades en stock</p>
            </article>
            {
                goToCart ? <Link to='/cart' className='card-buy'>Terminar Compra</Link> 
                : <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
            }
            
        </div>
        </>
    )
}

export default ItemDetail