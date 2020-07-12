import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="page-info">
      <div className="info-item">
        <h4>Contact</h4>
        <p>3205 Davis Lane</p>
        <p>San Pedro</p>
        <p>CA</p>
        <p>720-278-3733</p>
      </div>
      <div className="info-item">
        <h4>Site</h4>
        <ul>
          <li>Home</li>
          <li>How works?</li>
          <li>About us</li>
        </ul>
        <input type="search" placeholder="Search content" className="search-footer" />
      </div>
      <div className="info-item">
        <h4>Social media</h4>
        <div className="social-media">
          <i className="lab la-facebook" />
          <i className="lab la-instagram" />
          <i className="lab la-twitter" />
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>
        © Copyright Nutrition Watcher | All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;
