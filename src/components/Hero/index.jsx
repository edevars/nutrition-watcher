import React from 'react';
import './Hero.css';
import bowl from '../../images/bowl.png';

const Hero = () => (
  <section>
    <div className="hero-grid">
      <div className="title-container">
        <h1>Nutrition Watcher</h1>
      </div>
      <div className="image-container">
        <div className="vector-slash" />
        <div className="isologo-container">
          <img src={bowl} alt="Green apple iamge" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
