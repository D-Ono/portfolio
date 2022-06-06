import { createGlobalStyle } from  'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-div: #202024;
        --background: #121214;
        --red: #E52E4D;
        --gray: #202024;
        --green: #33CC95;
        --white: #FFFFFF;
                
        --text-title: #0560DA;
        --text-title-wrapper: #FFFFFF;
        --text-body: #AAAAAA;
        --shape: #FFFFFF;
    }

    *{
        margin: 0; 
        padding: 0; 
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;  // Usar porcentagem e nao valor absoluto (por exemplo 15px) 
        }

        @media (max-width: 1080px){
            font-size: 87.5%;  // Usar porcentagem e nao valor absoluto (por exemplo 15px) 
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // Fonte tem mais detalhes no Chrome e outros que usam webkit
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }   

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html, body, #root {
     font-family: 'Montserrat', sans-serif;
     width: 98vw;
     height: 100vh;
  }
  button {
    cursor : pointer;
  }
`;