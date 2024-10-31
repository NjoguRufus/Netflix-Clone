// src/pages/HomePage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Row from '../components/Row';
import MoviePlayer from '../components/MoviePlayer';

function HomePage() {
  const [selectedMovieUrl, setSelectedMovieUrl] = useState(null);

  const requests = {
    trending: 'https://api.themoviedb.org/3/trending/movie/week?api_key=4e16ddcf87e900adcc7b8ed9d833a2fd',
    topRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=4e16ddcf87e900adcc7b8ed9d833a2fd',
    action: 'https://api.themoviedb.org/3/discover/movie?api_key=4e16ddcf87e900adcc7b8ed9d833a2fd&with_genres=28',
    comedy: 'https://api.themoviedb.org/3/discover/movie?api_key=4e16ddcf87e900adcc7b8ed9d833a2fd&with_genres=35',
    horror: 'https://api.themoviedb.org/3/discover/movie?api_key=4e16ddcf87e900adcc7b8ed9d833a2fd&with_genres=27',
    romance: 'https://api.themoviedb.org/3/discover/movie?api_key=4e16ddcf87e900adcc7b8ed9d833a2fd&with_genres=10749',
  };

  return (
    <div className="homepage bg-black">
      <Navbar />
      <HeroSection />

      {/* Render multiple Row components for each category */}
      <Row title="Trending Now" fetchUrl={requests.trending} onSelectMovie={setSelectedMovieUrl} />
      <Row title="Top Rated" fetchUrl={requests.topRated} onSelectMovie={setSelectedMovieUrl} />
      <Row title="Action Movies" fetchUrl={requests.action} onSelectMovie={setSelectedMovieUrl} />
      <Row title="Comedy Movies" fetchUrl={requests.comedy} onSelectMovie={setSelectedMovieUrl} />
      <Row title="Horror Movies" fetchUrl={requests.horror} onSelectMovie={setSelectedMovieUrl} />
      <Row title="Romance Movies" fetchUrl={requests.romance} onSelectMovie={setSelectedMovieUrl} />

      {/* Display MoviePlayer only when a movie is selected */}
      {selectedMovieUrl && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
          <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
            <MoviePlayer movieUrl={selectedMovieUrl} />
            <button
              className="absolute top-0 right-0 m-4 p-2 bg-red-600 rounded text-white"
              onClick={() => setSelectedMovieUrl(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
