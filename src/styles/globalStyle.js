import styled, { createGlobalStyle } from "styled-components";

import { grayColors } from "./colors/gray";

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
    grid-template-rows: auto 110px 615px 615px;
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
    grid-template-rows: auto 110px 615px ;
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

export const StyledTitle = styled.p`
  color: ${grayColors[900]};
  font-weight: ${(props) => {
    switch (props.size) {
      case "small":
        return "400";
      case "large":
        return "800";
      default:
        return "600";
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "14px";
      case "large":
        return "36px";
      default:
        return "18px";
    }
  }};
  line-height: 150%;
`;

export const StyledText = styled.p`
  color: ${grayColors[500]};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "14px";
      case "large":
        return "20px";
      default:
        return "16px";
    }
  }};
`;

export const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledButton = styled.button`
  width: max-content;
  outline: none;
  background: inherit;
  border: 1px solid ${grayColors[300]};
  color: ${grayColors[900]};
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    transform: scale(1.05);
  }
`;

export default GlobalStyle;
