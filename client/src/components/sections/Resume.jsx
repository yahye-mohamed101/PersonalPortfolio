// src/components/sections/Resume.jsx
import React from 'react';
//import './Resume.css'; // Import the CSS stylesheet for styling

function Resume() {
    const proficiencies = [
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'React' },
      { id: 3, name: 'Node.js' },
      { id: 4, name: 'HTML & CSS' },
      { id: 5, name: 'Git & GitHub' },
      { id: 6, name: 'Problem-Solving' },
      { id: 7, name: 'PostgreSQL' },
      { id: 8, name: 'TypeScript' },
    ];
  
    return (
      <section>
        <h2>Resume</h2>
        
        {/* Link to download the resume */}
        <a href="/path_to_your_resume/resume.pdf" download className="resume-link">
          Download My Resume
        </a>
        
        <h3>Proficiencies</h3>
        <ul className="proficiencies-list">
          {proficiencies.map(proficiency => (
            <li key={proficiency.id}>{proficiency.name}</li> 
          ))}
        </ul>
      </section>
    );
  }
  
  export default Resume;