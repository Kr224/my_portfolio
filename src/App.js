import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
