// src/App.js
import React from 'react';
import Row from './components/Row';
import requests from './requests';

function App() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <header className="flex items-center justify-between p-4 bg-gray-800">
                <h1 className="text-2xl font-bold text-red-600">Netflix Clone</h1>
                <button className="bg-red-600 text-white py-2 px-4 rounded">Sign In</button>
            </header>

            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        </div>
    );
}

export default App;
