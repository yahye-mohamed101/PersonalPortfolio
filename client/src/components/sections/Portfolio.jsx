import React from 'react';
import Project from './Project';
import '../../assets/Portfolio.css';
import projects from '../../data/projects';



const projects = [
  {
    title: 'TuneForge',
    description: 'A web application that utilizes HTML, CSS, and JavaScript. It allows one to store audio files in multiple different playlists by dragging and dropping in your audio files into newly created playlists. ',
    link: '#',
    github: '#'
  },

  {
    title: 'Employee Tracker',
    description: `A command-line application built using TypeScript, Node.js, the Inquirer package, and PostgreSQL.
                  This application creates an appliaction that allows users to manage a company's employee database.
                  This application can perform operations such as viewing all employees, roles, and departments, adding new employees, roles, and departments, and updating employee roles.`,
    link: '#',
    github: '#'
  },

  {
    title: 'Vehicle Builder',
    description: `A TypeScript command-line application that builds and uses cars to include additional options for motorbikes and trucks.
                  This application creates an easy way to make vehicles, customize them, and have them sorted.
                  This application solves the issue of spending more time than necessary on building cars, motorbikes, or trucks.`,
    link: '#',
    github: '#'
  },

  {
    title: 'ReadME Generator',
    description: `A command-line application that generates a unique, professional, and dynamic ReadME file from user input using the inquirer package.
                  This application creates an easy alternative than having to write your very own ReadME file and gives you the ease of mind.
                  This application solves the issue of spending more time than necessary on building a ReadME file from scratch.`,
    link: '#',
    github: '#'
  },


];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2> {/* Section title */}
      {projects.map((project, index) => ( // Map over projects array to create Project components
        <Project key={index} {...project} /> // Render Project component for each project
      ))}
    </section>
  );
}

export default Portfolio;
