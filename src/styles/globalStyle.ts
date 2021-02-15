import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-font-smoothing: 'antialiased';
    -moz-osx-font-smoothing: 'grayscale';
    height: '100vh';
    width: '100vw';
  }
  body {
    height: '100vh';
    width: '100vw';
    overflow: hidden;
  }
  #root {
    height: '100%';
    width: '100%';
  }
  a {
    text-decoration: none;
  }
`;
