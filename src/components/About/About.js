import React from "react";
import "./About.css";
import pict from "../../data/test2.webp";
import { about } from "../../data/About";
import ResumeButton from "../Button/ResumeButton";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFileArrowDown } from "react-icons/fa6";
import resume from "../../data/SergiRoviralta_CV.pdf";

const About = () => {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="about-me">
        <div className="about-picture">
          <img
            src={pict}
            alt="Illustration representing {about.name}"
            id="portfolio-picture"
          />
          <h1 id="title">Hi, I am {about.name}.</h1>
        </div>
        <div className="about-text">
          <h3>A {about.role}.</h3>
          <p>{about.description}</p>
        </div>
        <div className="about-buttons">
          <ResumeButton
            icon={FaFileArrowDown}
            link={resume}
            aria-label="Download Resume"
          ></ResumeButton>
          <ResumeButton
            link={about.social.linkedin}
            icon={FaLinkedin}
            aria-label="Visit LinkedIn Profile"
          ></ResumeButton>
          {/*  <ResumeButton
            name="Github"
            link={about.social.github}
            icon={IoLogoGithub}
            aria-label="Visit Github Profile"
          ></ResumeButton> */}
        </div>
      </div>
    </section>
  );
};

export default About;
