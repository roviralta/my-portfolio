import React from "react";
import "./About.css";
import pict from "../../data/test.webp";
import { about } from "../../data/About";

const About = () => {
  return (
    <section id="about">
      <div className="about-me">
        <div className="about-picture">
          <img alt="not me :)" src={pict} id="portfolio-picture" />
          <h1>Hi, I am {about.name}.</h1>
        </div>
        <div className="about-text">
          <h3>A {about.role}.</h3>
          <p>{about.description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
