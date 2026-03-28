import React from 'react';
import { imageUrl } from "../api/movieApi";

const MovieGrid = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="movies-container">
        <p>No movies found.</p>
      </div>
    );
  }

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img 
            src={movie.poster_path ? imageUrl + movie.poster_path : ''}
            alt={movie.title}
            className={movie.poster_path ? '' : 'blank-poster'}
          />
          <h3>{movie.title}</h3>
          <p>Release: {movie.release_date || 'N/A'}</p>
          <p>Rating: {movie.vote_average || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;