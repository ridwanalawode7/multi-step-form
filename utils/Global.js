import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
// import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0 0;
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin: 0 auto;
}

`;
