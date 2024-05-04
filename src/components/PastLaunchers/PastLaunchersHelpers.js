import { useQuery } from "@apollo/client";
import { useState } from "react";

import { GET_PAST_LAUNCHES } from "api/queries";

const limit = 10;

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
