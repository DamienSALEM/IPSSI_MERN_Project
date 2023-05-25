import React, { useState } from 'react';
import mockItems from '../src/mock_items.json';
import './css/ProductList.css';
import Cart from './Cart';

const ProductList = () => {
  const [articles, setArticles] = useState(mockItems);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (article) => {
    if (article.quantite > 0) {
      setCartItems((prevCartItems) => [...prevCartItems, article]);
      setArticles((prevArticles) =>
        prevArticles.map((prevArticle) =>
          prevArticle.id === article.id
            ? { ...prevArticle, quantite: prevArticle.quantite - 1 }
            : prevArticle
        )
      );
    }
  };

  return (
    <div className="product-list-container">
      <h1>Liste des Articles</h1>
      <Cart items={cartItems} />
      {articles.map((article, index) => (
        <div className="product" key={index}>
          <div className="product-image">
            <img src={article.image} alt={article.nom} />
          </div>
          <h2>{article.nom}</h2>
          <p>Quantité disponible : {article.quantite}</p>
          <button
            className="add-to-cart"
            onClick={() => addToCart(article)}
            disabled={article.quantite === 0}
          >
            Ajouter au panier
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
