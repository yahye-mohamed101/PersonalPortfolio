import React from 'react'; // Import React
import '../../assets/project.css';

function Project({ title, description, link, github }) {
  return (
    <div className="project"> {/* Container for each project */}
      <h3>{title}</h3> {/* Project title */}
      <p>{description}</p> {/* Project description */}
      <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a> {/* Link to live demo */}
      <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a> {/* Link to GitHub repository */}
    </div>
  );
}

export default Project; // Export Project component for use in other files
