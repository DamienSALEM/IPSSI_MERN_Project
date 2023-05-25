import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h2>Mon Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <h3>{item.nom}</h3>
                <p>Prix : {item.prix}</p>
              </div>
              <button onClick={() => removeFromCart(index)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
