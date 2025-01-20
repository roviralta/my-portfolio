import React from "react";
import { skills } from "../../data/Skills";
import Skill from "../Skill/Skill";
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <header className="section-title">
        <h1 id="title">Technical Skills</h1>
      </header>
      <div className="iterat-skill" role="list">
        {skills.map((ski, index) => (
          <div key={index} role="listitem">
            <Skill name={ski} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillContainer;
