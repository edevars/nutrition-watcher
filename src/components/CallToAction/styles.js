import styled from 'styled-components';

const CtaGrid = styled.section`
  display: grid;
  grid-template-columns: 40% 1fr;
  padding-top: 10rem;
  margin-bottom: 20rem;

  .cta-text {
    margin-top: 20rem;
    padding-left: 20rem;
  }

  .healthy-person {
    max-width: 70%;
    margin-left: 8rem;

    img{
      width: 100%;
    }
  }
`;

const Subtitle = styled.h3`
    font-size: 4.2rem;  
`;
export { CtaGrid, Subtitle };
