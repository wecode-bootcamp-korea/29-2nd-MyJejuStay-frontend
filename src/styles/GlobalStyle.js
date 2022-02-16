import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'SF Pro Display', sans-serif;
    color: #484848;
  }

  button {
    cursor: pointer;
  }
  

`;
export default GlobalStyle;
