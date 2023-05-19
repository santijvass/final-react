import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Item.css';


const Item = ({product}) => {
    const {id,category, image, name, price} = product || {}
    return (
         <article className='card'>
            <Link to ={`item/${id}`}>
                <img className='card-img' src={image} alt={name}/>
            </Link>
                <h2 className='card-title'>{name}</h2>
                <h3 className='card-p'>U$D {price}</h3>
                <p className='card-category'>{category}</p>
        </article>
    )
}

export default Item