import React, {useEffect} from 'react';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/elegant-icons.css";
// import "./css/magnific-popup.css";
// import "./css/nice-select.css";
// import "./css/slicknav.min.css";
import './App.css';

import NavbarNavite from './components/Header/NavbarNavite';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Shop from './components/Shops/Shop';
import ChatBox from './components/ChatBot/ChatBox/ChatBox';
import ProductDetails from './components/Product/ProductDetails';
import SignIn from './components/Login/SignIn';

function App() {

  return (
    <div className="App">
      <NavbarNavite />
      <Navbar />
      <Routes>
        <Route path='/SignIn' element = {<SignIn/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Shop/Product/:id' element={<ProductDetails />} />
      </Routes>
      <ChatBox />
      <Footer /> 
    </div>
  );
}

export default App;
