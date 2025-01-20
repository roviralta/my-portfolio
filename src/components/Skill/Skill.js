import React from "react";
import "./Skill.css";

const Skill = (props) => {
  return (
    <article className="skill">
      <p className="skill-name">{props.name}</p>
    </article>
  );
};

export default Skill;
