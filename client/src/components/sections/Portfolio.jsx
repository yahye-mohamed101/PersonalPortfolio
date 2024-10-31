import React from 'react';
import projects from '../../data/projects';
import Project from '../Project';
import '../../assets/styles/portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>My Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            websiteLink={project.websiteLink}
            videoLink={project.videoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
