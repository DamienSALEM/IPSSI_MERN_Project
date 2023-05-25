import React from 'react';

const Home = () => {
  return (
    <div style={homeStyles}>
      <h1 style={titleStyles}>Accueil</h1>
      <p style={descriptionStyles}>
        La ligue sportive d'Auvergne est une association sportive offrant la location de matériel sportif à ses adhérents. Elle propose une large gamme d'équipements de haute qualité pour divers sports. La location permet aux adhérents de tester différents équipements et offre une flexibilité. L'équipe est disponible pour conseiller et garantir la qualité des équipements. Rejoignez la ligue sportive d'Auvergne pour vivre pleinement votre passion sportive. Contactez-nous pour plus d'informations.
      </p>
    </div>
  );
};

const homeStyles = {
  textAlign: 'center',
  fontFamily: 'Jazz LET, fantasy',
};

const titleStyles = {
  fontSize: '3rem',
  marginBottom: '20px',
};

const descriptionStyles = {
  fontSize: '1.5rem',
  maxWidth: '600px',
  margin: '0 auto',
};

export default Home;
