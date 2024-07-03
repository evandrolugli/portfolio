import { Button } from "./components/ui/button"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Projects } from './pages/Projects';
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
            <a href="https://www.linkedin.com/in/evandrolugli/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/evandrolugli" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:evandro.lugli@gmail.com">
              Email
            </a>
          </div>
          <p className="mt-2">&copy; {new Date().getFullYear()} Evandro Lugli</p>
        </footer>

        </Router>
      </>
  );
}