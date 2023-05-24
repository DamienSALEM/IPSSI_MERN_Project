import React from 'react';

const Navbar = () => {
  return (
    <nav style={navStyles}>
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
  );
};

const navStyles = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
};

const ulStyles = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
};

const liStyles = {
  margin: '0 10px',
};

const linkStyles = {
  color: 'black',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Navbar;
