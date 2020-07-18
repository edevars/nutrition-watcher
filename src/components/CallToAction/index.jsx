import React from 'react';
import Button from '../../styles/Button';
import './CallToAction.css';
import healthyWoman from '../../images/healthy-woman.png';

const CallToAction = () => (
  <section className="cta-grid">
    <div className="cta-text">
      <h3>
        Start taking care of you and feel better than ever one day at time.
      </h3>
      <Button type="button">
        I want to start to lose weight
      </Button>
    </div>
    <div className="healthy-person">
      <img src={healthyWoman} alt="healthy woman" />
    </div>
  </section>
);

export default CallToAction;
