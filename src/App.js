import React from "react";
import "./App.css";
import Row from "./components/Rows";
import requests from "../src/requests";
import Banner from "./components/Banner";
import Nav from './components/Nav'

function App() {
  return (
    <div className="app">

      <Banner />
      <Nav />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy " fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
