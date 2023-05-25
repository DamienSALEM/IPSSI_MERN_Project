import React from 'react';

const Cart = ({ items }) => {
  const isEmpty = items.length === 0;

  return (
    <div className="cart-container">
      <h2>Panier</h2>
      {isEmpty ? (
        <p>Le panier est vide.</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.nom}</li>
            ))}
          </ul>
          <button className="valider-panier">Valider mon panier</button>
        </>
      )}
    </div>
  );
};

export default Cart;
