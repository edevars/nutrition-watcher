import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => (theme.fontPrimary)};
  margin-top: 20rem;
  color: white;

  h4 {
    font-size: 21px;
    text-align: center;
  }

`;

export const SearchBox = styled.input`
  padding: 0.8rem 1.6rem;
  border-radius: 1rem;    
`;

export const FlexInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  padding: 5rem 5rem 10rem;
`;

export const InfoBox = styled.div`
  font-size: 1.6rem;
  width: 320px;

  i{
    font-size: 4rem;
  margin-right: 1rem;
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 1rem 0px;
  background: ${({ theme }) => (theme.fancyGradient)};
  color: ${({ theme }) => (theme.fontPrimary)};
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
