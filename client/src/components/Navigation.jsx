import React from 'react';
import '../styles/Navigation.css';

function Navigation({ setActiveSection }) {
  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav>
      <ul>
        <li onClick={() => handleClick('AboutMe')}>About Me</li>
        <li onClick={() => handleClick('Portfolio')}>Portfolio</li>
        <li onClick={() => handleClick('Contact')}>Contact</li>
        <li onClick={() => handleClick('Resume')}>Resume</li>
      </ul>
    </nav>
  );
}

export default Navigation;