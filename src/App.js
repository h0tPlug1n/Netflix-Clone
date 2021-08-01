// API : fbb2d8b330ad0c1bd7de6c2e634b2c0b
// API Request : https://api.themoviedb.org/3/movie/550?api_key=fbb2d8b330ad0c1bd7de6c2e634b2c0b

import React from "react";
import Row from "./Row.js";
import requests from "./requests.js";
import "./App.css";
import Banner from "./Banner";
import "./nav.css";
import Nav from "./Nav.js";
const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </React.Fragment>
  );
};

export default App;
