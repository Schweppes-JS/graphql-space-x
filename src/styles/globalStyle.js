import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }


  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-width: none;
    -ms-overflow-style: none; 
  }

  *::-webkit-scrollbar {
    display: none; 
  }

  #root {
    grid-template-rows: auto 118px 615px 615px;
    display: grid;
    padding: 16px;
    margin: auto;
    gap: 20px;
  }


  @media (min-width: 768px) {
    #root {
      padding: 32px;
      gap: 32px;
    }
  }


  @media (min-width: 1024px) {
    #root {
    grid-template-rows: auto 118px 615px ;
      grid-template-columns: auto 30%;
      padding: 32px;
      gap: 48px;
    }
  }

  @media (min-width: 1440px) {
    #root {
      max-width: 1440px;
      padding: 48px;
      gap: 48px;
    }
  }
`;

export default GlobalStyle;
