import React from "react";
import { skills } from "../../data/Skills";
import Skill from "../Skill/Skill";
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <section id="skills">
      <div className="section-title">
        <h1 id="title">Skills</h1>
      </div>
      <div className="iterat-skill">
        {skills.map((ski, index) => (
          <Skill name={ski} key={index}></Skill>
        ))}
      </div>
    </section>
  );
};

export default SkillContainer;
