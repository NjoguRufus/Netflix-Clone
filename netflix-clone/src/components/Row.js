// src/components/Row.js
import React, { useState, useEffect } from 'react';
import axios from '../axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="text-white ml-5">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="flex overflow-y-hidden overflow-x-scroll space-x-4 p-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className="max-h-56 transition-transform duration-300 ease-in-out transform hover:scale-110 rounded"
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
