import { createGlobalStyle } from "styled-components";
// import theme from "./theme";

const globalStyle = createGlobalStyle`
  @import url('./static/inter-ui-web/inter-ui.css');

  :root {
    font-family:
      'Inter UI',
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
    ;
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    color: ${props => props.theme.colors["dark-gray"]};
    font-size: 1rem;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    background: white;
    width: auto;
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export default globalStyle;
