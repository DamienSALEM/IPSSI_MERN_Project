import React from 'react';
import './css/Cart.css';

const Cart = () => {
  return (
    <div className="panier-container">
      <h1>Panier</h1>
      <div className="item">
        <span>Nom du produit</span>
        <span>Prix</span>
        <span>Quantité</span>
        <span>Total</span>
      </div>
      {/* Ajoutez ici la liste des éléments du panier */}
      <div className="total">
        <span>Total :</span>
        <span>Montant total</span>
      </div>
    </div>
  );
};

export default Cart;
