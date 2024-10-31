import React from 'react';
import Project from './Project';
import '../../assets/Portfolio.css';
import projects from '../../data/projects';



const projects = [
  { title: 'Project One', description: 'Description of Project One', link: '#', github: '#' },
  { title: 'Project Two', description: 'Description of Project Two', link: '#', github: '#' },
  
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
