// src/components/Row.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Row.css';

function Row({ title, fetchUrl, onSelectMovie }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const handleMovieClick = async (movie) => {
    const trailerUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
    const response = await axios.get(trailerUrl);
    const trailer = response.data.results.find((vid) => vid.type === "Trailer" && vid.site === "YouTube");

    if (trailer) {
      onSelectMovie(`https://www.youtube.com/embed/${trailer.key}`);
    } else {
      console.log("No trailer available");
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row-poster rounded-lg" // Add rounded class here
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            onClick={() => handleMovieClick(movie)}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
