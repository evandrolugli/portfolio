import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, Project } from 'phosphor-react';

export function NavBar() {
  return (
    <nav className="bg-gray-800 p-4" >
      <div className="container mx-auto flex justify-center">
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-5">About</Link>
          <Link to="/resume" className="text-gray-300 hover:text-white px-5">Resume</Link>
          <Link to="/projects" className="text-gray-300 hover:text-white px-5">Projects</Link>
        </div>
      </div>
    </nav>
  );
}