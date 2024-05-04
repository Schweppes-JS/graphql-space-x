import { StyledHeadingContainer, StyledTitle, StyledText } from "components/UI/UI";

import { PastLaunchButton, PastLaunchersBox, PastLaunchersList, PastLaunchersWrapper } from "./PastLaunchers.styles";
import { useGetLaunches } from "./PastLaunchersHelpers";
import { PastLaunchCard } from "./PastLaunchCard";

export const PastLaunchers = () => {
  const { items, loading, error, loadMoreItems } = useGetLaunches();

  const renderLaunches = () => {
    if (error) return <StyledText>Something went wrong</StyledText>;
    else return items.map((launchInfo) => <PastLaunchCard key={launchInfo.id} info={launchInfo} />);
  };

  return (
    <PastLaunchersWrapper>
      <StyledHeadingContainer>
        <StyledTitle>Past launches</StyledTitle>
        <StyledText>All launches that have taken place since the beginning</StyledText>
      </StyledHeadingContainer>
      <PastLaunchersBox>
        {loading && items.length === 0 ? <StyledText>Loading...</StyledText> : <PastLaunchersList>{renderLaunches()}</PastLaunchersList>}
        <PastLaunchButton disabled={loading} onClick={loadMoreItems}>
          {loading && items.length > 0 ? "Fetching..." : "Load More"}
        </PastLaunchButton>
      </PastLaunchersBox>
    </PastLaunchersWrapper>
  );
};
