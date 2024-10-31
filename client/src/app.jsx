import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation'; // Import Navigation component
import AboutMe from './components/sections/AboutMe';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Resume from './components/sections/Resume';
import './assets/styles/app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation /> {/* Add the Navigation component here */}
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<AboutMe />} /> {/* Default route for unknown paths */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
