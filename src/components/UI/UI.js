import styled from "styled-components";

import { grayColors } from "styles/colors/gray";

export const StyledWrapper = styled.section`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  padding: 12px;

  @media (min-width: 768px) {
    padding: ${(props) => {
      switch (props.size) {
        case "small":
          return "20px";
        default:
          return "32px";
      }
    }};
  }
`;
StyledWrapper.displayName = "StyledWrapper";

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
StyledTitle.displayName = "StyledTitle";

export const StyledText = styled.p`
  ${(props) =>
    props.centred
      ? `
    margin: auto;
    text-align: center;
    align-self: center;
  `
      : ""}
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
StyledText.displayName = "StyledText";

export const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
StyledHeadingContainer.displayName = "StyledHeadingContainer";

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
StyledButton.displayName = "StyledButton";
