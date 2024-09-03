import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProgramsPage from './components/ProgramsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import TempContactPage from './components/TempContactPage';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/temp-contact" element={<TempContactPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
