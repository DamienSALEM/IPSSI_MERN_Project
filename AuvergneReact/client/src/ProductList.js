import React, { useState, useEffect } from 'react';
import mockItems from '../src/mock_items.json';
import './css/ProductList.css';

const ProductList = () => {
  const [articles, setArticles] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    setArticles(mockItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [cartItems]);

  const addToCart = (article) => {
    if (article.quantite > 0) {
      const updatedArticles = articles.map((prevArticle) =>
        prevArticle.id === article.id
          ? { ...prevArticle, quantite: prevArticle.quantite - 1 }
          : prevArticle
      );
      setArticles(updatedArticles);
      setCartItems((prevCartItems) => [...prevCartItems, { ...article }]);
    }
  };

  const removeFromCart = (index) => {
    const removedItem = cartItems[index];
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);

    setArticles((prevArticles) =>
      prevArticles.map((prevArticle) =>
        prevArticle.id === removedItem.id
          ? { ...prevArticle, quantite: prevArticle.quantite + 1 }
          : prevArticle
      )
    );
  };

  return (
    <div className="product-list-container">
      <h1>Liste des Articles</h1>
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
      {articles.map((article) => (
        <div className="product" key={article.id}>
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
