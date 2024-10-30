import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header({ setActiveSection }) {
  return (
    <header className="header">
      <h1>Yahye Mohamed</h1>
      <Navigation setActiveSection={setActiveSection} />
    </header>
  );
}

export default Header;