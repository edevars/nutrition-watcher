import styled from 'styled-components';

export const HowWrapper = styled.div`
    padding: 10rem 0px 20rem;
`;

export const Divider = styled.div`
    width: 7.2rem;
    height: 2px;
    background: ${({ theme }) => (theme.fontPrimary)};
    margin: 0 auto;
`;

export const Title = styled.h2`
    font-weight: bold;
    font-size: 4.8rem;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 0px;
`;

export const StepsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    margin: 0 auto;
    justify-content: space-evenly;
`;
