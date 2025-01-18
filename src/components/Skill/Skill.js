import React from "react";
import "./Skill.css";

const Skills = (props) => {
  return (
    <div className="skill">
      <p>{props.name}</p>
    </div>
  );
};

export default Skills;
