import React from 'react';
import {
  StyledFooter, SearchBox, FlexInfo, InfoBox, Copyright, SocialMediaContainer,
} from './styles';

const Footer = () => (
  <StyledFooter>
    <FlexInfo>
      <InfoBox>
        <h4>Contact</h4>
        <p>3205 Davis Lane</p>
        <p>San Pedro</p>
        <p>CA</p>
        <p>720-278-3733</p>
      </InfoBox>
      <InfoBox>
        <h4>Site</h4>
        <ul>
          <li>Home</li>
          <li>How works?</li>
          <li>About us</li>
        </ul>
        <SearchBox type="search" placeholder="Search content" />
      </InfoBox>
      <InfoBox>
        <h4>Social media</h4>
        <SocialMediaContainer>
          <i className="lab la-facebook" />
          <i className="lab la-instagram" />
          <i className="lab la-twitter" />
        </SocialMediaContainer>
      </InfoBox>
    </FlexInfo>
    <Copyright>
      <p>
        © Copyright Nutrition Watcher | All rights reserved
      </p>
    </Copyright>
  </StyledFooter>
);

export default Footer;
