import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';
import users from '../src/mock_users.json';

const Login = ({setLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.mot_de_passe === password);

    if (user) {
      setLoggedIn(true);
      navigate('/produits');
    } else {
      console.log('Identifiants invalides');
    }
  };

  return (
    <div className="login-container">
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
