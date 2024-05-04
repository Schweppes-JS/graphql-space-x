import { StyledHeadingContainer, StyledText, StyledTitle } from "components/UI/UI";

import { LaunchCountWrapper } from "./LaunchStatistic.styles";

export const LaunchCount = ({ count }) => {
  return (
    <LaunchCountWrapper>
      <StyledTitle>Launches</StyledTitle>
      <StyledHeadingContainer>
        <StyledTitle size="large">{count}</StyledTitle>
        <StyledText>Total number of launches that have occurred, including launches that are scheduled as upcoming.</StyledText>
      </StyledHeadingContainer>
    </LaunchCountWrapper>
  );
};
