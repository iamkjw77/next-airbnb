import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";
import palette from "./palette";

const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    color: ${palette.black};
    font-family: "Nanum Gothic", sans-serif;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
