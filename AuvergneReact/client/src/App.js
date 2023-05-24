import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Cart from './Cart';
import MyAccount from './MyAccount';
import ProductList from './ProductList';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/inscription" element={<Signup />} />
        <Route exact path="/connexion" element={<Login />} />
        <Route exact path="/panier" element={<Cart />} />
        <Route exact path="/mon-compte" element={<MyAccount />} />
        <Route exact path="/produits" element={<ProductList />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;