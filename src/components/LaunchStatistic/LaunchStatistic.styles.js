import styled from "styled-components";

import { StyledHeadingContainer, StyledWrapper } from "components/UI/UI";
import { grayColors } from "styles/colors/gray";

export const LaunchStatisticWrapper = styled(StyledWrapper)`
  display: flex;

  @media (min-width: 1024px) {
    grid-row: 3/4;
  }
`;
LaunchStatisticWrapper.displayName = "LaunchStatisticWrapper";

export const LaunchStatisticContainer = styled.div`
  grid-template-rows: min-content auto min-content;
  display: grid;
  width: 100%;
  gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: 30% auto;
    grid-template-rows: auto min-content;
    gap: 32px;
  }
`;
LaunchStatisticContainer.displayName = "LaunchStatisticContainer";

export const LaunchCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
LaunchCountWrapper.displayName = "LaunchCountWrapper";

export const LaunchResumeWrapper = styled(StyledWrapper)`
  overflow: hidden;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media (min-width: 768px) {
    flex-wrap: wrap;
    display: flex;
  }

  @media (min-width: 1024px) {
    grid-column: 1/3;
  }
`;
LaunchResumeWrapper.displayName = "LaunchResumeWrapper";

export const LaunchesGraphWrapper = styled(StyledWrapper)`
  @media (min-width: 1024px) {
    margin-top: 30px;
  }
`;
LaunchesGraphWrapper.displayName = "LaunchesGraphWrapper";

export const StyledLaunchResumeContainer = styled(StyledHeadingContainer)`
  border: 1px solid ${grayColors[200]};
  padding: 20px;
  flex: 1;
`;
StyledLaunchResumeContainer.displayName = "StyledLaunchResumeContainer";
