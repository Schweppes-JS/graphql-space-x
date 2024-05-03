import styled, { createGlobalStyle } from "styled-components";

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
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    grid-template-rows: auto 110px auto;
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

export const StyledWrapper = styled.section`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  padding: 12px;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

export default GlobalStyle;
