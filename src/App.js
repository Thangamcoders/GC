// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  // Sample product data
  const [products] = useState([
    { id: 1, name: 'Rice', price: 9.99},
    { id: 2, name: 'Moong Dal', price: 5.99 },
    { id: 3, name: 'salt', price: 1.49 },
    { id: 4, name: 'chilli powder', price: 2.49 },
    { id: 5, name: 'sugar', price: 3.49 },
    { id: 6, name: 'pepper', price: 2.49 },
  ]);
  
  // State for the cart
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className="App">
      <center>
      <h1 style={{textAlign:'center',fontSize:'80px'}}>Grocery Store</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
      </center>
      </div>
  );
}

export default App;
