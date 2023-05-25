import React from 'react';

const NavbarIsLoggin = () => {
  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
        <li style={liStyles}>
          <a href="/produits" style={linkStyles}>Liste des produits</a>
        </li>
        <li style={liStyles}>
          <a href="/panier" style={linkStyles}>Panier</a>
        </li>
        <li style={liStyles}>
          <a href="/mon-compte" style={linkStyles}>Mon Compte</a>
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

export default NavbarIsLoggin;
