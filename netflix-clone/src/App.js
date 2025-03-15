

import React from "react";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Footer from "./components/Footer";
import movies from "./data/movies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Row title="Top Searches" movies={movies.topSearches} />
      <Row title="Continue Watching for Shrushti" movies={movies.continueWatching} />
      <Row title="Movies set in India" movies={movies.moviesSetInIndia} />
      <Row title="Critically Acclaimed TV Shows" movies={movies.criticallyAcclaimed} />
      <Footer />
    </div>
  );
}

export default App;
