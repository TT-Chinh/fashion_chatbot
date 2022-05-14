import React, {useState,useEffect} from 'react';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
import {success} from 'tata-js';
import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/elegant-icons.css";
import './App.css';

// import NavbarNavite from './components/Header/NavbarNavite';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Shop from './components/Shops/Shop';
import ChatBox from './components/ChatBot/ChatBox/ChatBox';
import ProductDetails from './components/Product/ProductDetails';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';

function App() {

  const storeCart = JSON.parse(localStorage.getItem('cart'))
  const [cart, setCart] = useState(storeCart ?? [])

  const addCart = (p) => {
    if(cart.find((product) => {
      return product.id === p.id;
    }) === undefined){
      setCart([...cart, p])
    }else {
      setCart(cart.map(product => {
        if(product.id === p.id){
          product.quantity += p.quantity;
        }
        return product;
      }));
    }
    success(
      'Thêm sản phẩm', 
      'Thêm sản phẩm vào giỏ hàng thành công.', 
      {position: 'tr'}
    );
  }

  const updateCart = newCart => {
    setCart(newCart);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart])

  return (
    <div className="App">
      <Navbar cart = {cart} />
      <Routes>
        <Route path='/SignIn' element = {<SignIn/>} />
        <Route path='/SignUp' element = {<SignUp/>} />
        <Route path='/' element={<Home addCart = {addCart} />} />
        <Route path='/Shop' element={<Shop addCart = {addCart} />} />
        <Route path='/Shop/Product/:id' element={<ProductDetails addCart = {addCart} />} />
        <Route path='/Shop/Cart' 
          element={
            <Cart
              cart={cart}
              updateCart = {updateCart}
            />
          } 
        />
        <Route path='/Shop/Checkout' 
          element={
            <Checkout
              updateCart = {updateCart}
            />
          }
        />
      </Routes>
      <ChatBox />
      <Footer /> 
    </div>
  );
}

export default App;
