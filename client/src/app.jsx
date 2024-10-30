import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/sections/AboutMe';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Resume from './components/sections/Resume';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('AboutMe');

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'AboutMe' && <AboutMe />}
        {activeSection === 'Portfolio' && <Portfolio />}
        {activeSection === 'Contact' && <Contact />}
        {activeSection === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;