import React, { useState, useEffect } from 'react';
import './css/AdminHome.css';
import mockClients from '../src/mock_users.json';

const AdminUsers = () => {
  const [clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newClient, setNewClient] = useState({
    nom: '',
    prénom: '',
    téléphone: '',
    email: '',
    mot_de_passe: '',
    admin: 0,
  });

  // Charger les données des clients depuis le fichier JSON
  useEffect(() => {
    setClients(mockClients);
  }, []);

  // Fonction pour ajouter un client
  const addClient = () => {
    if (newClient.nom && newClient.prénom && newClient.téléphone && newClient.email && newClient.mot_de_passe) {
      const updatedClients = [...clients, newClient];
      setClients(updatedClients);
      setShowModal(false);
      setNewClient({
        nom: '',
        prénom: '',
        téléphone: '',
        email: '',
        mot_de_passe: '',
        admin: 0,
      });
    }
  };

  // Fonction pour supprimer un client
  const deleteClient = index => {
    const updatedClients = [...clients];
    updatedClients.splice(index, 1);
    setClients(updatedClients);
  };

  return (
    <div className="admin-client-container">
      <h1>Administration des Clients</h1>
      <button className="add-button" onClick={() => setShowModal(true)}>
        Ajouter un client
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Ajouter un client</h2>
            <input
              type="text"
              placeholder="Nom"
              value={newClient.nom}
              onChange={e => setNewClient({ ...newClient, nom: e.target.value })}
            />
            <input
              type="text"
              placeholder="Prénom"
              value={newClient.prénom}
              onChange={e => setNewClient({ ...newClient, prénom: e.target.value })}
            />
            <input
              type="text"
              placeholder="Téléphone"
              value={newClient.téléphone}
              onChange={e => setNewClient({ ...newClient, téléphone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Email"
              value={newClient.email}
              onChange={e => setNewClient({ ...newClient, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={newClient.mot_de_passe}
              onChange={e => setNewClient({ ...newClient, mot_de_passe: e.target.value })}
            />
            <div className="modal-buttons">
              <button className="add-button" onClick={addClient}>
                Ajouter
              </button>
              <button className="cancel-button" onClick={() => setShowModal(false)}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="client-list">
        <h2>Liste des clients</h2>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Téléphone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td>{client.nom}</td>
                <td>{client.prénom}</td>
                <td>{client.téléphone}</td>
                <td>{client.email}</td>
                <td>
                  <button onClick={() => deleteClient(index)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
