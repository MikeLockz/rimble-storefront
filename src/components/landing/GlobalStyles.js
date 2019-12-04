import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  html {
    background: #f2f4f7;
  }
  body {
    background: white;
    width: auto;
    max-width: 100vw;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export default globalStyle;
