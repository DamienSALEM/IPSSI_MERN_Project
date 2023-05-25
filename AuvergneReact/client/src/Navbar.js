import React from 'react';

const Navbar = () => {
  return (
    <div>
      <h1 style={titleStyles}>Ligue d'Auvergne</h1>
      <nav style={navStyles}>
        <img src="https://tse1.mm.bing.net/th?id=OIP.jUuuvdM1wjCSTyM38JRjPgHaGX&pid=Api&P=0&h=180" alt="Logo" style={logoStyles} />
        <div style={searchContainerStyles}>
          <input type="text" placeholder="Rechercher" style={searchInputStyles} />
          <img src="https://tse4.mm.bing.net/th?id=OIP.1yTpCDeVy53DZU0Zk8pypQHaHa&pid=Api&P=0&h=180" alt="Recherche" style={searchIconStyles} />
        </div>
        <ul style={ulStyles}>
          <li style={liStyles}>
            <a href="/connexion" style={linkStyles}>Connexion</a>
          </li>
          <li style={liStyles}>
            <a href="/" style={linkStyles}>Accueil</a>
          </li>
          <li style={liStyles}>
            <a href="/inscription" style={linkStyles}>Inscription</a>
          </li>
        </ul>
      </nav>
</div>
  );
}

const titleStyles = {
  color: '#232f3e',
  textAlign: 'center',
  margin: '0',
  padding: '10px',
  fontSize: '24px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

const navStyles = {
  backgroundColor: '#232f3e',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const logoStyles = {
  width: '100px',
  height: 'auto',
};

const searchContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '5px',
  borderRadius: '3px',
};

const searchInputStyles = {
  border: 'none',
  outline: 'none',
  width: '300px',
  padding: '5px',
};

const searchIconStyles = {
  width: '20px',
  height: '20px',
  marginLeft: '5px',
};

const ulStyles = {
  listStyle: 'none',
  display: 'flex',
};

const liStyles = {
  margin: '0 10px',
};

const linkStyles = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Navbar;
