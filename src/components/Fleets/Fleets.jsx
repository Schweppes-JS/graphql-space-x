import { useQuery } from "@apollo/client";

import { StyledText } from "components/UI/UI";
import { GET_FLEETS } from "api/queries";

import { FleetsWrapper, StyledFleetList } from "./Fleets.styles";
import { FleetCard } from "./FleetCard";

export const Fleets = () => {
  const { data, loading, error } = useQuery(GET_FLEETS);

  const renderFleets = () => {
    if (loading) return <StyledText centred>Loading...</StyledText>;
    else if (error) return <StyledText centred>Something went wrong</StyledText>;
    else {
      const fleets = Object.entries(data);
      return (
        <StyledFleetList>
          {fleets.map(([name, fleet]) => {
            if (name === "roadster") return <FleetCard title={name} subtitle={`View details in its ${Math.round(fleet.period_days)} day journey`} />;
            else return <FleetCard title={`${fleet.length} ${name}`} subtitle={`View details on the ${name} fleet`} />;
          })}
        </StyledFleetList>
      );
    }
  };

  return <FleetsWrapper>{renderFleets()}</FleetsWrapper>;
};
