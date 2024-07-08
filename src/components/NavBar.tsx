import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaCode, FaGhost } from 'react-icons/fa'; // Import icons from react-icons library


export function NavBar() {
  return (
    // <nav className="bg-gray-800 p-4" >
    //   <div className="container mx-auto flex justify-center">
    //     <div>
    //       <Link to="/" className="text-gray-300 hover:text-white px-5">
    //         <FaUser className="text-xl" />
    //         About
    //       </Link>
    //       <Link to="/resume" className="text-gray-300 hover:text-white px-5">
    //         <FaFileAlt className="text-xl" />
    //         Resume
    //       </Link>
    //       <Link to="/projects" className="text-gray-300 hover:text-white px-5">
    //         <FaBriefcase className="text-xl" />
    //         Projects
    //       </Link>
    //     </div>
    //   </div>
    // </nav>

    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center text-gray-300 hover:text-white px-5">
          <FaGhost className="text-xl size-3" />
          <span className="ml-2">About</span>
        </Link>
        <Link to="/resume" className="flex items-center text-gray-300 hover:text-white px-5">
          <FaFileAlt className="text-xl size-3" />
          <span className="ml-2">Resume</span>
        </Link>
        <Link to="/projects" className="flex items-center text-gray-300 hover:text-white px-5">
          <FaCode className="text-xl size-3" />
          <span className="ml-2">Projects</span>
        </Link>
      </div>
    </div>
    </nav>
  );
}