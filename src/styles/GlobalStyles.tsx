import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-font-smoothing: 'antialiased';
    -moz-osx-font-smoothing: 'grayscale';
    height: '100%';
    width: '100%';
  }
  body {
    height: '100%';
    width: '100%';
    overflow: hidden;
  }
  #root {
    height: '100%';
    width: '100%';
  }
`
