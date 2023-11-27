import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/navbar';
import Aboutme from './Components/aboutme';
import Resume from './Components/resume';
import Project from './Components/project';

const App = () => {
  return (

    
    <Router>
        <Navbar />
        <div>
        <Routes>
        <Route path="/portfolio" element={<Aboutme />}/>
        <Route path="/portfolio/aboutme" element={<Aboutme />}/>
        <Route path="/portfolio/resume" element={<Resume />}/>
        <Route path="/portfolio/project" element={<Project />}/>
          </Routes>
      </div>

    </Router>
  );
}

export default App;
