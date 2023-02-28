import React from "react";
import AddMovie from "../AddMovie/AddMovie";

import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
const MovieList = ({ movie }) => {
  return (
    <div>
      <div className="movielist">
        {movie.map((el) => (
          <MovieCard movie={el} />
        ))}
      </div>
      <div>
        <AddMovie />
      </div>
    </div>
  );
};

export default MovieList;
