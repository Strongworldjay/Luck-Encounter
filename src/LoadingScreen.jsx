// src/LoadingScreen.jsx
import React from 'react';
import rollingD20 from './assets/rollingd20.gif'; // Make sure to have the GIF in your assets folder
import './LoadingScreen.css';

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <img src={rollingD20} alt="Rolling d20" className="loading-d20" />
    </div>
  );
};

export default LoadingScreen;
