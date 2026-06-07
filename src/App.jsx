import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css';

function App(){
  const products = [ 
 { id: 1, 
  name: 'Apple',
   price: '$1.00', 
   category: 'Fruits'},
  { id: 2,
     name: 'Milk', 
     price: '$2.50', 
     category: 'Dairy',
    },
   ];
const [isDarkMode, setIsDarkMode] = useState(false);
const [cart, SetCart] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("All");

const filteredProducts = 
 selectedCategory === "All"
 ? products
 : products.filter (
  (product) => product.category === selectedCategory );
 
  function handleAddToCart(product) {
    SetCart([...cart, product]);
  }
  return (
    <div className={isDarkMode ? "Dark" : "Light" }>
      <h1>Shopping App</h1>

      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Dark" : "Light"}
      </button>

      <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}>

        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ul>
        {filteredProducts.map((product) =>(
          <li key ={product.id}>
            {product.name}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>

          </li>
        ))}
      </ul>
      <h2> Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
