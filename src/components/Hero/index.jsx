import React from 'react';
import bowl from '../../images/bowl.png';
import { HeroGrid, Title, ImageContainer } from './styles';

const Hero = () => (
  <header>
    <HeroGrid>
      <div className="title-container">
        <Title>Nutrition Watcher</Title>
      </div>
      <ImageContainer>
        <div className="vector-slash" />
        <div className="isologo-container">
          <img src={bowl} alt="Green apple iamge" />
        </div>
      </ImageContainer>
    </HeroGrid>
  </header>
);

export default Hero;
