import React from 'react';
import Project from '../Project';
import '../../styles/Portfolio.css';
import projects from '../../data/projects';

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;