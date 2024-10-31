// src/components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../background.jpg'; // Import the background image

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-cover bg-center h-[600px]"
      style={{ backgroundImage: `url(${background})` }} // Set the background image
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Unlimited Movies, TV Shows, and More.</h1>
        <h2 className="text-xl md:text-3xl mb-8">Watch anywhere. Cancel anytime.</h2>
        <button
          onClick={() => navigate('/signup')}
          className="bg-red-600 text-white font-bold py-2 px-6 rounded hover:bg-red-700 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
