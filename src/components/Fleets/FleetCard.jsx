import { StyledHeadingContainer, StyledText, StyledTitle } from "components/UI/UI";

import { FleetCardWrapper } from "./Fleets.styles";

export const FleetCard = ({ title, subtitle }) => {
  return (
    <FleetCardWrapper size="small">
      <StyledHeadingContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{subtitle}</StyledText>
      </StyledHeadingContainer>
    </FleetCardWrapper>
  );
};
