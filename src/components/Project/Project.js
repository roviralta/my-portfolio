import React from "react";
import "./Project.css";
import ResumeButton from "../Button/ResumeButton";
import { IoLogoGithub } from "react-icons/io";

const Project = ({ name, description, skills }) => {
  return (
    <div className="project" aria-labelledby={`${name}-title`}>
      <h3 id={`${name}-title`} className="nameProject">
        {name}
      </h3>
      <p className="project-desc">{description}</p>
      <p className="skills">{skills}</p>
      <ResumeButton
        link="https://www.google.com/?hl=es"
        icon={IoLogoGithub}
        aria-label={`View ${name} on GitHub`}
      />
      Github
    </div>
  );
};

export default Project;
