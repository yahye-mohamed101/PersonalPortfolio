import React from 'react'; // Import React
import '../assets/styles/portfolio.css';

const Project = ({ project }) => {
  return (
    <div className="project"> {/* Container for individual project */}
      <h3>{project.title}</h3> {/* Display project title */}
      <img src={project.image} alt={project.title} /> {/* Display project image */}
      <p>{project.description}</p> {/* Display project description */}
      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a> {/* Link to live demo */}
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a> {/* Link to GitHub repository */}
    </div>
  );
};

export default Project; // Export Project component for use in other files

