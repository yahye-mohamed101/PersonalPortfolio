import React from 'react'; 
import Navigation from './Navigation'; 
import '../assets/styles/header.css';

function Header() {
  return (
    <header>
      <h1>Yahye Mohamed</h1> {/* Main title of the header */}
      <Navigation /> {/* Render the Navigation component */}
    </header>
  );
}

export default Header; 
