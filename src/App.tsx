import { Button } from "./components/ui/button"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Projects } from './pages/Projects';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons library

export function App() {
  return (
    <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/projects" element={<Projects/>} />
          </Routes>

          <footer className="bg-gray-800 text-gray-300 py-4 text-center">
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/evandrolugli/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-400">
                <FaLinkedin className="inline-block text-2xl size-4" />
                <span className="ml-2">LinkedIn</span>
              </a>
              <a href="https://github.com/evandrolugli" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-gray-400">
                <FaGithub className="inline-block text-2xl size-4" />
                <span className="ml-2">GitHub</span>
              </a>
              <a href="mailto:evandro.lugli@gmail.com" className="flex items-center text-gray-300 hover:text-gray-400">
                <FaEnvelope className="inline-block text-2xl size-4" />
                <span className="ml-2">Email</span>
              </a>
            </div>
            <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} - Evandro Lugli</p>
          </footer>

        </Router>
      </>
  );
}