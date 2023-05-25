import React from 'react';
import './css/signup.css'; // Import du fichier CSS

const Signup = () => {
  return (
    <div className="signup-container">
      <h1>Inscription</h1>
      <form>
        <div className="form-group">
          <label htmlFor="prenom">Prénom :</label>
          <input type="text" id="prenom" name="prenom" required />
        </div>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" required />
        </div>
        <div className="form-group"> {/* Ajout de la classe "form-group" */}
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group"> {/* Ajout de la classe "form-group" */}
          <label htmlFor="password">Password :</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group"> {/* Ajout de la classe "form-group" */}
          <label htmlFor="confirmPassword">Confirm Password :</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
