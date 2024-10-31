import React from 'react'; // Import React
import projects from '../../data/projects.jsx'; // Import project data
import Project from '../Project.jsx'; // Import Project component
import "./assets/styles/Portfolio.css"


const Portfolio = () => {
  return (
    <section>
      <h2>My Projects</h2>
      <div className="portfolio-container">
        {projects.map((project) => (
          <Project key={project.id} project={project} /> // Render each project
        ))}
      </div>
    </section>
  );
};

export default Portfolio; // Export Portfolio component for use in other files

