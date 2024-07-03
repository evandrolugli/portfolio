import { Button } from "./components/ui/button"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Projects } from './pages/Projects';
import { Home, FileText, Project } from 'phosphor-react';
import { RouteWithIcon } from "./components/RouteWithIcon";

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
        </Router>
      </>
  );
}