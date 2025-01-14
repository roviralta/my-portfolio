import React from "react";
import "./About.css";
import pict from "../../data/test.webp";

const About = () => {
  return (
    <section id="about">
      <div className="about-me">
        <div className="about-picture">
          <img alt="not me :)" src={pict} id="portfolio-picture" />
          <h1>Hi, I am Sergi Roviralta.</h1>
        </div>
        <div className="about-text">
          <h3>A Full-Stack Engineer.</h3>
          <p>
            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta
            facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum
            delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis!
            Maiores minima consectetur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
