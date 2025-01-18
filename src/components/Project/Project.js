import React from "react";
import "./Project.css";
import ResumeButton from "../Button/ResumeButton";
import { IoLogoGithub } from "react-icons/io";

const Project = (props) => {
  return (
    <div id="project">
      <h3 className="nameProject">{props.name}</h3>
      <p className="project-desc">{props.description}</p>
      <p className="skills">{props.skills}</p>
      <button id="git-project">
        <ResumeButton
          link="https://www.google.com/?hl=es"
          icon={IoLogoGithub}
        />
      </button>
    </div>
  );
};

export default Project;
