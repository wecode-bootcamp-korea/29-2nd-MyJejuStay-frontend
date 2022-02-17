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
  
`;
export default GlobalStyle;
