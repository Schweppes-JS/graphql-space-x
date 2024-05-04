import { StyledHeadingContainer, StyledText, StyledTitle } from "components/UI/UI";
import { convertUTCtoLocal } from "helpers/timeConvertor";

import { PastLaunchCardImage, PastLaunchCardWrapper } from "./PastLaunchers.styles";

export const PastLaunchCard = ({ info }) => {
  return (
    <PastLaunchCardWrapper>
      <PastLaunchCardImage />
      <StyledHeadingContainer>
        <StyledTitle>{info.mission_name}</StyledTitle>
        <StyledText>{convertUTCtoLocal(info.static_fire_date_utc)}</StyledText>
      </StyledHeadingContainer>
    </PastLaunchCardWrapper>
  );
};
