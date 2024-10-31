// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../name.jpg'; // Import the logo image

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" /> {/* Use the image instead of text */}
        </Link>
      </div>
      <div>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/signup" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
