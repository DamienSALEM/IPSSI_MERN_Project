import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <p style={textStyles}>Ceci est le pied de page de l'application.</p>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
  textAlign: 'center',
  position: 'absolute',
  left: '0',
  bottom: '0',
  width: '100%',
  zIndex: '999',
  flexShrink: '0',
  height: '60px',
};

const textStyles = {
  color: 'gray',
};

export default Footer;
