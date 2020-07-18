import React from 'react';
import { Link } from 'react-scroll';
import Button from '../../styles/Button';
import './navbar.css';

const Navbar = () => (
  <nav className="home-navbar">
    <ul className="menu">
      <Link activeClass="active" to="how-works" spy smooth duration={600}>
        <li className="link">How works?</li>
      </Link>
      <Link activeClass="active" to="start-now" spy smooth duration={600}>
        <li className="link">Start now!</li>
      </Link>
      <Link activeClass="active" to="contact" spy smooth duration={600}>
        <li className="link">Contact</li>
      </Link>
      <Button type="button">Sign Up</Button>
      <Button type="button" secondary>
        Login
      </Button>
    </ul>
  </nav>
);

export default Navbar;
