import { StyledHeadline } from "components/Header/Header.styles";
import { StyledHeadingContainer, StyledText } from "components/UI/UI";

import { FleetCardWrapper } from "./Fleets.styles";

export const FleetCard = ({ title, subtitle }) => {
  return (
    <FleetCardWrapper size="small">
      <StyledHeadingContainer>
        <StyledHeadline>{title}</StyledHeadline>
        <StyledText>{subtitle}</StyledText>
      </StyledHeadingContainer>
    </FleetCardWrapper>
  );
};
