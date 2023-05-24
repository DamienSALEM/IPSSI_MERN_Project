import React from 'react';
import './css/MyAccount.css';

const MyAccount = () => {
  return (
    <div className="my-account-container">
      <h1>Mon Compte</h1>
      <div className="profile">
        <h2>Informations du profil</h2>
        <div className="profile-info">
          <div>
            <span>Nom :</span>
            <span>Nom de l'utilisateur</span>
          </div>
          <div>
            <span>Adresse :</span>
            <span>Adresse de l'utilisateur</span>
          </div>
          <div>
            <span>Email :</span>
            <span>Email de l'utilisateur</span>
          </div>
          <div>
            <span>Téléphone :</span>
            <span>Numéro de téléphone de l'utilisateur</span>
          </div>
        </div>
      </div>
      <div className="orders">
        <h2>Commandes récentes</h2>
        <div className="order-item">
          <span>Nom du produit</span>
          <span>Date de la commande</span>
          <span>Prix</span>
        </div>
        {/* Ajoutez ici la liste des commandes récentes */}
      </div>
    </div>
  );
};

export default MyAccount;
