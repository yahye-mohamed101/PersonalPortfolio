import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import '../assets/styles/navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">About Me</Link></li> {/* Link to About Me section */}
        <li><Link to="/portfolio">Portfolio</Link></li> {/* Link to Portfolio section */}
        <li><Link to="/contact">Contact</Link></li> {/* Link to Contact section */}
        <li><Link to="/resume">Resume</Link></li> {/* Link to Resume section */}
      </ul>
    </nav>
  );
}

export default Navigation; // Export Navigation component for use in other files

