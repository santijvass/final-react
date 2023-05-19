import React, {useState, useEffect} from 'react';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';
import '../styles/NavBar.css';


const NavBar = () => {

    const [urls, setUrls] = useState([])

    useEffect(()=> {
        const db = getFirestore()
        const categories = collection(db, 'categories')
        getDocs(categories).then((snapshot) =>  setUrls(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))) )
    },[])

    return ( 
            <nav className='navbar-container'>
                <ul className='navbar'>
                    <li className='navbar-items'>
                        <NavLink to='/'>HOME</NavLink>
                    </li>
                        {urls.length && urls.map((url, index)=>{
                            return(
                                <li className='navbar-items' key={index}>
                                    <NavLink to={`category/${url.category}`}>{url.category}</NavLink>
                                </li>
                            )
                        })}
                        <li className='navbar-items-cart'>
                            <NavLink to='/cart'> <CartWidget/> </NavLink>
                        </li>
                </ul>
            </nav> 
    )
}

export default NavBar