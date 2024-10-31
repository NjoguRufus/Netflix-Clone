// src/pages/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import background from '../background.jpg'; // Import the background image

function LoginPage() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }} // Set the background image
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-md w-96">
        <h1 className="text-white text-3xl mb-6">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />
        <button className="bg-red-600 text-white py-2 w-full rounded hover:bg-red-700 transition duration-300">
          Login
        </button>
        <p className="text-white mt-4">
          Don't have an account? <Link to="/signup" className="text-red-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;