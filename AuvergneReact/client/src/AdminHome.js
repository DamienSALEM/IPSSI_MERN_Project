import React from 'react';
import './css/AdminHome.css';

const AdminHome = () => {
  return (
    <div className="admin-home-container">
      <h1>Admin Home</h1>
      <div className="products">
        <h2>Liste des produits</h2>
        <ul className="product-list">
          <li>Produit 1 <button className="delete-button">Supprimer</button></li>
          <li>Produit 2 <button className="delete-button">Supprimer</button></li>
          {/* Ajoutez ici la liste des produits */}
        </ul>
        <button className="add-button">Ajouter un produit</button>
      </div>
      <div className="clients">
        <h2>Liste des clients</h2>
        <ul className="client-list">
          <li>Client 1 <button className="delete-button">Supprimer</button></li>
          <li>Client 2 <button className="delete-button">Supprimer</button></li>
          {/* Ajoutez ici la liste des clients */}
        </ul>
        <button className="add-button">Ajouter un client</button>
      </div>
    </div>
  );
};

export default AdminHome;
