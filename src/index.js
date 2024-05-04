import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { LaunchStatistic } from "components/LaunchStatistic/LaunchStatistic";
import { Fleets } from "components/Fleets/Fleets";
import { PastLaunchers } from "components/PastLaunchers/PastLaunchers";
import { Header } from "components/Header/Header";

import GlobalFont from "./styles/fonts";
import GlobalStyle from "./styles/globalStyle";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
    <GlobalFont />
    <GlobalStyle />
  </ApolloProvider>
);

function App() {
  return (
    <>
      <Header />
      <Fleets />
      <LaunchStatistic />
      <PastLaunchers />
    </>
  );
}
