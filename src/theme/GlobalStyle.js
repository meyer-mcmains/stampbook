import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        background-color: ${p => p.theme.color.white};
        body {
          margin: 0;
        }
        p { 
          margin: 0;
        }
        ul {
          margin: 0;
        }
    }
`;

export default GlobalStyle;
