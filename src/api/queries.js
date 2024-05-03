import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const limit = 10;

export const GET_PAST_LAUNCHES = gql`
  query GetPastLaunches($limit: Int!, $offset: Int!) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      static_fire_date_utc
    }
  }
`;

export const useGetLaunches = () => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const { fetchMore, ...result } = useQuery(GET_PAST_LAUNCHES, {
    variables: { limit, offset },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => setItems((prevItems) => [...prevItems, ...data.launchesPast]),
  });

  const loadMoreItems = () => {
    fetchMore({ variables: { offset: offset + limit } }).then(() => {
      setOffset(offset + limit);
    });
  };

  return { items, ...result, loadMoreItems };
};
