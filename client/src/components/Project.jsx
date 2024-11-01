import React from 'react'; // Import React
import '../assets/styles/project.css';



const Project = ({ title, githubLink, websiteLink, image }) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <h3>{title}</h3>
        <div className="links">
          <a href={githubLink} className="link-button" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* Only display the live link button if websiteLink exists */}
          {websiteLink && (
            <a href={websiteLink} className="link-button" target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;


