// src/components/ProjectsPage.js
import React from 'react';
import Project from './Project';


const ProjectsPage = () => {
  // Example project data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'project1.jpg',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: 'project2.jpg',
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
