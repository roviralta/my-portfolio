import React from "react";
import "./ResumeButton.css";

const ResumeButton = (props) => {
  return (
    <button id="about-button">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.icon && <props.icon className="icon" />}
      </a>
    </button>
  );
};

export default ResumeButton;
