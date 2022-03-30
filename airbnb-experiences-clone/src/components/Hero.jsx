import React from 'react';
import PhotoGrid from '../images/photo-grid.png';

function Hero() {
  return (
    <div className="hero">
      <img src={PhotoGrid} alt="Grid" />
      <h1>Online Experiences</h1>
      <h2>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </h2>
    </div>
  );
}

export default Hero;
