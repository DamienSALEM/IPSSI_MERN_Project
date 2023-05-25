import React from 'react';
import { Link } from 'react-router-dom';

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
const NavbarAdmin = () => {
  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
        <li style={liStyles}>
          <Link to="/administration" style={linkStyles}>Administration</Link>
        </li>
        <li style={liStyles}>
          <Link to="/administration-client" style={linkStyles}>Utilisateurs</Link>
        </li>
        <li style={liStyles}>
          <Link to="/administration-produit" style={linkStyles}>Produits</Link>
        </li>
      </ul>
    </nav>
  );
  };

export default NavbarAdmin;
