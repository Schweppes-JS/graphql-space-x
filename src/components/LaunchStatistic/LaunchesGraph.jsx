import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useMemo } from "react";

import { grayColors } from "styles/colors/gray";

import { LaunchesGraphWrapper } from "./LaunchStatistic.styles";

export const LaunchesGraph = ({ launches }) => {
  const yearlyStatistic = useMemo(() => {
    return launches.reduce((accum, launch) => {
      const launchIndex = accum.findIndex((item) => item.name === launch.launch_year);
      console.log({ launchIndex });
      if (launchIndex === -1) return [...accum, { name: launch.launch_year, count: 1 }];
      else {
        accum[launchIndex] = { ...accum[launchIndex], count: accum[launchIndex].count + 1 };
        return accum;
      }
    }, []);
  }, [launches]);

  return (
    <LaunchesGraphWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={yearlyStatistic.reverse()}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="count" fill={grayColors[600]} />
        </BarChart>
      </ResponsiveContainer>
    </LaunchesGraphWrapper>
  );
};
