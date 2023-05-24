import React from 'react';
import './css/ProductList.css';
const ProductList = () => {
  return (
    <div className="product-list-container">
      <h1>Liste des Articles</h1>
      <div className="product">
        <div className="product-image">
          <img src="chemin_de_l_image.jpg" alt="Nom de l'article" />
        </div>
        <h2>Nom de l'article</h2>
        <button className="add-to-cart">Ajouter au panier</button>
      </div>
      {/* Ajoutez ici la liste des articles */}
    </div>
  );
};

export default ProductList;
