import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 14px;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  input,
  button,
  textarea,
  select {
    font-family: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;

    color: black;
    background: white;

    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }
`;

export default GlobalStyles;
