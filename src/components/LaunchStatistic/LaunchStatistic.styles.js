import styled from "styled-components";

import { StyledWrapper } from "components/UI/UI";

export const LaunchStatisticWrapper = styled(StyledWrapper)`
  display: flex;

  @media (min-width: 1024px) {
    grid-row: 3/4;
  }
`;

export const LaunchStatisticContainer = styled.div`
  grid-template-rows: min-content auto 220px;
  display: grid;
  gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: 30% auto;
    grid-template-rows: auto 220px;
    gap: 32px;
  }
`;

export const LaunchCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LaunchResumeWrapper = styled(StyledWrapper)`
  @media (min-width: 1024px) {
    grid-column: 1/3;
  }
`;

export const LaunchesGraphWrapper = styled(StyledWrapper)`
  @media (min-width: 1024px) {
    margin-top: 30px;
  }
`;
