import { StyledHeadline, StylesSubHeadline } from "./Header.styles";

export const Header = () => {
  return (
    <header>
      <StyledHeadline>Dashboard</StyledHeadline>
      <StylesSubHeadline>
        Welcome back, here’s what’s happening with SpaceX today. Below is an
        overview of the fleets, all launches past and upcoming.
      </StylesSubHeadline>
    </header>
  );
};
