
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/sections/AboutMe';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Resume from './components/sections/Resume';
import projects from './data/projects';
import './assets/styles/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <Routes>
          {/* Routes for different sections of the portfolio */}
          <Route path="/" element={<AboutMe />} /> {/* Default route */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
