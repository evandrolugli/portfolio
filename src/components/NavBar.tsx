import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-lg font-bold">My Portfolio</h1>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-3">About</Link>
          <Link to="/resume" className="text-gray-300 hover:text-white px-3">Resume</Link>
          <Link to="/projects" className="text-gray-300 hover:text-white px-3">Projects</Link>
        </div>
      </div>
    </nav>
  );
}