import styled from "styled-components";

import { StyledButton, StyledWrapper } from "components/UI/UI";
import { grayColors } from "styles/colors/gray";

export const PastLaunchersWrapper = styled(StyledWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 32px;
    grid-column: 2/3;
    grid-row: 2/4;
  }
`;
PastLaunchersWrapper.displayName = "PastLaunchersWrapper";

export const StyledPastLaunchersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
StyledPastLaunchersContainer.displayName = "StyledPastLaunchersContainer";

export const PastLaunchersBox = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
  height: calc(100% - 105px);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 32px;
  }
`;
PastLaunchersBox.displayName = "PastLaunchersBox";

export const PastLaunchersList = styled.ul`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
PastLaunchersList.displayName = "PastLaunchersList";

export const PastLaunchCardWrapper = styled.li`
  display: flex;
  gap: 16px;
`;
PastLaunchCardWrapper.displayName = "PastLaunchCardWrapper";

export const PastLaunchCardImage = styled.img`
  width: 54px;
  height: 54px;
  background-color: ${grayColors[300]};
  border-radius: 8px;
`;
PastLaunchCardImage.displayName = "PastLaunchCardImage";

export const PastLaunchButton = styled(StyledButton)`
  margin: 0 auto;
`;
PastLaunchButton.displayName = "PastLaunchButton";
