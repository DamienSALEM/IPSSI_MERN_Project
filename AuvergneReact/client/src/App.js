import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import NavbarAdmin from './NavbarAdmin';
import NavbarIsLoggin from './NavbarIsLoggin.js';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Cart from './Cart';
import MyAccount from './MyAccount';
import ProductList from './ProductList';
import AdminHome from './AdminHome';
import AdminProducts from './AdminProducts';
import AdminUsers from './AdminUsers.js';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <BrowserRouter>
      {window.location.pathname === '/administration' || window.location.pathname.startsWith('/administration/') ? (
        <NavbarAdmin />
      ) : isLoggedIn ? (
        <NavbarIsLoggin />
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/inscription" element={<Signup />} />
        <Route
          exact
          path="/connexion"
          element={<Login onLogin={handleLogin} />}
        />
        <Route exact path="/panier" element={<Cart />} />
        <Route exact path="/mon-compte" element={<MyAccount />} />
        <Route exact path="/produits" element={<ProductList />} />
        <Route exact path="/administration" element={<AdminHome />} />
        <Route
          exact
          path="/administration-produit"
          element={<AdminProducts />}
        />
        <Route
          exact
          path="/administration-client"
          element={<AdminUsers />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
