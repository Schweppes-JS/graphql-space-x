import styled from "styled-components";

import { StyledWrapper } from "components/UI/UI";

export const FleetsWrapper = styled.section`
  padding: 2px;
  height: 118px;
  overflow: auto;

  @media (min-width: 1024px) {
    grid-row: 2/3;
  }
`;

export const StyledFleetList = styled.ul`
  display: flex;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 20px;
  }
`;

export const FleetCardWrapper = styled(StyledWrapper)`
  min-width: 206px;
`;
