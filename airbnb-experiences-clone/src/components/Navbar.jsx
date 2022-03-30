import React from 'react';
import Logo from '../images/airbnb-logo.png';

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="Airbnb Logo" id="logo" />
      <h3 id="logo-text">airbnb</h3>
    </nav>
  );
}
export default Navbar;
