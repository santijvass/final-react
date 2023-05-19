import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './CartContext'
import {Routes, Route} from 'react-router-dom';
import './styles/Item.css'



function App() {

  return (
    <>
      <CartProvider>
        <NavBar/>
        <main>
            <Routes>
              <Route exact path='/' element ={<ItemListContainer/>} />
              <Route exact path='/category/:category' element ={<ItemListContainer/>} />
              <Route exact path='/item/:id' element ={<ItemDetailContainer/>} />
              <Route exact path='/category/:category/item/:id' element ={<ItemDetailContainer/>} />
              <Route exact path='/cart' element ={<Cart/>} />
            </Routes>
        </main>
      </CartProvider>    
    </>

  )
}

export default App;
