import React from 'react'; // Import React
import '../assets/styles/project.css';

const Project = ({ title, githubLink, image }) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <h3>{title}</h3>
        <a href={githubLink} className="link-button" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;

