import React from 'react';
import Button from '../../styles/Button';
import { CtaGrid, Subtitle } from './styles';
import healthyWoman from '../../images/healthy-woman.png';

const CallToAction = () => (
  <CtaGrid>
    <div className="cta-text">
      <Subtitle>
        Start taking care of you and feel better than ever one day at time.
      </Subtitle>
      <Button type="button">
        I want to start to lose weight
      </Button>
    </div>
    <div className="healthy-person">
      <img src={healthyWoman} alt="healthy woman" />
    </div>
  </CtaGrid>
);

export default CallToAction;
