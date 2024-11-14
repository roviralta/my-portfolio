import React from "react";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="presentation">
        <h1>
          <span className="intro">Hi I am&nbsp;</span>
          <span className="name">Sergi Roviralta,</span>
        </h1>
      </div>
      <h2 className="role">A Full Stack Engineer</h2>
      <p className="resume">
        Computer science engineer skilled in full stack development and hybrid
        applications with C, Java, Python, and JavaScript. Passionate about
        high-quality solutions and eager to tackle new challenges.
      </p>
      <div className="buttons">
        <button id="cv" title="Download Resume">
          Resume
        </button>
        <span className="icon" aria-label="Github" title="Github">
          <FaGithub />
        </span>
        <span className="icon" aria-label="LinkedIn" title="LinkedIn">
          <FaLinkedin />
        </span>
      </div>
    </section>
  );
};

export default About;
