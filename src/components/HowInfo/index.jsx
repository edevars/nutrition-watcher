import React from 'react';
import StepItem from '../StepItem';
import './HowInfo.css';

const HowInfo = () => (
  <section className="how-section">
    <h2 className="how-title">How Works?</h2>
    <div className="steps-container">
      <StepItem />
      <StepItem />
      <StepItem />
    </div>
  </section>
);

export default HowInfo;
