import React from 'react';
import './css/Login.css'; // Import du fichier CSS

const Login = () => {
  return (
    <div className="login-container"> {/* Ajout de la classe "login-container" */}
      <h1>Connexion</h1>
      <form>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
