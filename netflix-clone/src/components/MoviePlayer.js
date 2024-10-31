// src/components/MoviePlayer.js
import React from 'react';

function MoviePlayer({ movieUrl }) {
  return (
    <iframe
      width="100%"
      height="100%"
      src={movieUrl}
      title="Movie Player"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  );
}

export default MoviePlayer;
