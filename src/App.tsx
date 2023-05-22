import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Continents from "./components/Continents";

const client = new ApolloClient({
  uri: "https://countries.nausicaa.wilders.dev/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header>Checkpoint CDA frontend</header>
        <Routes>
          <Route path="/" element={<Continents />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
