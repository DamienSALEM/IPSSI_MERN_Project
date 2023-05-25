import React, { useState, useEffect } from 'react';
import './css/AdminHome.css';
import axios from 'axios';

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    nom: '',
    prix: '',
    image: '',
    description: '',
    quantité: '',
  });

  // Charger les données des produits depuis l'API
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fonction pour charger les produits depuis l'API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items/items');
      setProducts(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
    }
  };

  // Fonction pour ajouter un produit
  const addProduct = async () => {
    if (newProduct.nom && newProduct.prix && newProduct.image && newProduct.description && newProduct.quantité) {
      try {
        const response = await axios.post('http://localhost:5000/items/items', newProduct);
        const createdProduct = response.data;
        const updatedProducts = [...products, createdProduct];
        setProducts(updatedProducts);
        setShowModal(false);
        setNewProduct({
          nom: '',
          prix: '',
          image: '',
          description: '',
          quantité: '',
        });
      } catch (error) {
        console.error('Erreur lors de l\'ajout du produit:', error);
      }
    }
  };

  // Fonction pour supprimer un produit
  // Fonction pour supprimer un produit
  const deleteProduct = async (id, index) => {
    try {
      await axios.delete(`http://localhost:5000/items/:id`);
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Erreur lors de la suppression du produit:', error);
    }
  };

  return (
    <div className="admin-product-container">
      <h1>Administration des Produits</h1>
      <button className="add-button" onClick={() => setShowModal(true)}>
        Ajouter un produit
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Ajouter un produit</h2>
            <input
              type="text"
              placeholder="Nom du produit"
              value={newProduct.nom}
              onChange={(e) => setNewProduct({ ...newProduct, nom: e.target.value })}
            />
            <input
              type="text"
              placeholder="Prix"
              value={newProduct.prix}
              onChange={(e) => setNewProduct({ ...newProduct, prix: e.target.value })}
            />
            <input
              type="text"
              placeholder="URL de l'image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Quantité"
              value={newProduct.quantité}
              onChange={(e) => setNewProduct({ ...newProduct, quantité: e.target.value })}
            />
            <div className="modal-buttons">
              <button className="add-button" onClick={addProduct}>
                Ajouter
              </button>
              <button className="cancel-button" onClick={() => setShowModal(false)}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="product-list">
        <h2>Liste des produits</h2>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.nom}</td>
                <td>{product.prix}</td>
                <td>{product.quantite}</td>
                <td>
                  <button onClick={() => deleteProduct(index)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProduct;
