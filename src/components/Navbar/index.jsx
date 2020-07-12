import React from 'react';
import './navbar.css';

const Navbar = () => (
  <nav className="home-navbar">
    <ul className="menu">
      <li>Home</li>
      <li>How works?</li>
      <li>About</li>
      <button type="button" className="button">
        Iniciar sesión
      </button>
    </ul>
  </nav>
);

export default Navbar;
