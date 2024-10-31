import React from 'react'; // Import React
import Navigation from './Navigation'; // Import Navigation component
import '../assets/styles/header.css';

function Header() {
  return (
    <header>
      <h1>Yahye Mohamed</h1> {/* Main title of the header */}
      <Navigation /> {/* Render the Navigation component */}
    </header>
  );
}

export default Header; // Export Header component for use in other files
