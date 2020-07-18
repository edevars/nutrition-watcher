import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    color: ${({ theme }) => (theme.fontPrimary)};
  }

  body {
    font-family: "Asap", sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
