import React from 'react';
import img from './mobile-app-location-digital-art (1).jpg';
import './Welcomecard.css';

const Welcomecard = () => {
  return (
    <div className="welcome-card">
      <h3>Welcome to Rent Hive !!</h3>
      <div className="wel-text-container">
        <div className="text-container">
          <p>Rent Anything</p>
          <p>Anytime Anywhere</p>
        </div>
        <div className="img-container">
          <img src={img} alt="Welcome" height={190} />
        </div>
      </div>
    </div>
  );
};

export default Welcomecard;
