import styled from 'styled-components';

export const HeroGrid = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 40% 1fr;
    margin-bottom: 10rem;

    .title-container {
        width: 100%;
        height: 100%;
    }
`;

export const Title = styled.h1`
    padding-top: 10rem;
    font-size: 10vw;
    margin: 0px;
    padding-left: 3rem;
`;

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    .vector-slash {
        position: absolute;
        z-index: 0;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => (theme.primary)};
        background: ${({ theme }) => (theme.fancyGradient)};
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }

    .isologo-container {
        position: absolute;
        z-index: 1;
        height: 100%;
        width: 60%;
        
        img{
            width: 100%;
        }
    }
  `;
