import styled from "styled-components";

import { StyledWrapper } from "components/UI/UI";

export const FleetsWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 2px;
  height: 118px;
  overflow: auto;

  @media (min-width: 1024px) {
    grid-row: 2/3;
  }
`;
FleetsWrapper.displayName = "FleetsWrapper";

export const StyledFleetList = styled.ul`
  display: flex;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 20px;
  }
`;
StyledFleetList.displayName = "StyledFleetList";

export const FleetCardWrapper = styled(StyledWrapper)`
  min-width: 206px;
`;
FleetCardWrapper.displayName = "FleetCardWrapper";
