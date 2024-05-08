import { useMemo } from "react";

import { LaunchResumeWrapper, StyledLaunchResumeContainer } from "./LaunchStatistic.styles";
import { StyledTitle } from "components/UI/UI";

export const getLaunchResume = (launches) => {
  return launches.reduce(
    (accum, launch) => {
      if (launch.launch_year === "2022") accum.currentYearLaunchesCount++;
      if (launch.upcoming) accum.upcomingLaunches++;
      if (launch.rocket.rocket.cost_per_launch) accum.totalCost += launch.rocket.rocket.cost_per_launch;
      if (launch.rocket.rocket.success_rate_pct < 50) accum.failures++;
      return accum;
    },
    { currentYearLaunchesCount: 0, upcomingLaunches: 0, totalCost: 0, failures: 0 }
  );
};

export const LaunchResume = ({ launches }) => {
  const { currentYearLaunchesCount, upcomingLaunches, totalCost, failures } = useMemo(() => getLaunchResume(launches), [launches]);

  return (
    <LaunchResumeWrapper>
      <StyledLaunchResumeContainer>
        <StyledTitle size="small">Current year</StyledTitle>
        <StyledTitle size="large">{currentYearLaunchesCount}</StyledTitle>
      </StyledLaunchResumeContainer>
      <StyledLaunchResumeContainer>
        <StyledTitle size="small">Upcoming</StyledTitle>
        <StyledTitle size="large">{upcomingLaunches}</StyledTitle>
      </StyledLaunchResumeContainer>
      <StyledLaunchResumeContainer>
        <StyledTitle size="small">Average cost</StyledTitle>
        <StyledTitle size="large">{(totalCost / launches.length / 1000000).toFixed(1)}m</StyledTitle>
      </StyledLaunchResumeContainer>
      <StyledLaunchResumeContainer>
        <StyledTitle size="small">Failures</StyledTitle>
        <StyledTitle size="large">{failures}</StyledTitle>
      </StyledLaunchResumeContainer>
    </LaunchResumeWrapper>
  );
};
