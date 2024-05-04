import { useQuery } from "@apollo/client";

import { StyledText } from "components/UI/UI";
import { GET_LAUNCHES } from "api/queries";

import { LaunchStatisticContainer, LaunchStatisticWrapper } from "./LaunchStatistic.styles";
import { LaunchesGraph } from "./LaunchesGraph";
import { LaunchResume } from "./LaunchResume";
import { LaunchCount } from "./LaunchCount";

export const LaunchStatistic = () => {
  const { data, loading, error } = useQuery(GET_LAUNCHES);

  const renderStatistic = () => {
    if (loading) return <StyledText centred>Loading...</StyledText>;
    else if (error) return <StyledText centred>Something went wrong</StyledText>;
    else
      return (
        <LaunchStatisticContainer>
          <LaunchCount count={data.launches.length} />
          <LaunchesGraph />
          <LaunchResume />
        </LaunchStatisticContainer>
      );
  };

  return <LaunchStatisticWrapper>{renderStatistic()}</LaunchStatisticWrapper>;
};
