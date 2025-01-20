import React from "react";
import Project from "../Project/Project";
import "./ProjectContainer.css";
import { projects } from "../../data/ProjectContainer";

const ProjectContainer = () => {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="section-title">
        <h1 id="title">Projects</h1>
      </div>
      <div className="iterat-proj">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            skills={project.skills_used}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectContainer;
