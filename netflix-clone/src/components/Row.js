import React from "react";
import "./Row.css";

function Row({ title, movies }) {
  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie, index) => (
          <img
            key={index}
            className="row-poster"
            src={movie.image}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
