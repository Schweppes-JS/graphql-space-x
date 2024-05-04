import { useQuery } from "@apollo/client";

import { StyledText } from "components/UI/UI";
import { GET_FLEETS } from "api/queries";

import { FleetsWrapper, StyledFleetList } from "./Fleets.styles";
import { FleetCard } from "./FleetCard";

export const Fleets = () => {
  const { data, loading } = useQuery(GET_FLEETS);

  const renderFleets = () => {
    const fleets = Object.entries(data);
    return fleets.map(([name, fleet]) => {
      if (name === "roadster") return <FleetCard title={name} subtitle={`View details in its ${Math.round(fleet.period_days)} day journey`} />;
      else return <FleetCard title={`${fleet.length} ${name}`} subtitle={`View details on the ${name} fleet`} />;
    });
  };

  return <FleetsWrapper>{loading ? <StyledText>Loading...</StyledText> : <StyledFleetList>{renderFleets()}</StyledFleetList>}</FleetsWrapper>;
};
