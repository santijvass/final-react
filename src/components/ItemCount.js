import React, {useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrease = () => {
        setCount(count -1)
    }

    const increase = () => {
        setCount(count +1)
    }

    return (
        <div className='counter'>
            <button disabled={count <=1} onClick={decrease} className='counter-btn'>-</button>
            <span className='count'>{count}</span>
            <button disabled={count >=stock} onClick={increase} className='counter-btn'>+</button>
        <div>
            <button disabled={stock<=0} onClick={()=> onAdd(count)} className='counter-add'>Agregar al carrito</button>
        </div>    
        
        </div>
    )
}

export default ItemCount