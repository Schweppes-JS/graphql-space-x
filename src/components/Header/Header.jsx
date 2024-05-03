import { StyledHeadingContainer, StyledText } from "styles/globalStyle";

import { StyledHeadline } from "./Header.styles";

export const Header = () => {
  return (
    <StyledHeadingContainer>
      <StyledHeadline size="large">Dashboard</StyledHeadline>
      <StyledText size="large">
        Welcome back, here’s what’s happening with SpaceX today. Below is an overview of the fleets, all launches past and upcoming.
      </StyledText>
    </StyledHeadingContainer>
  );
};
