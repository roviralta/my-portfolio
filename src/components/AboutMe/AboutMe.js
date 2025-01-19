import React from "react";
import "./AboutMe.css";
import { CgProfile } from "react-icons/cg";
import profile from "../../data/test.webp";

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="about-title">
        <CgProfile id="about-icon" />
        <div className="section-title">
          <h1 id="title">About me</h1>
        </div>
      </div>
      <div className="about-me-desc">
        <p>
          🎓 Computer Science Engineer | Aspiring Full Stack Developer<br></br>
          <br></br>I have experience developing hybrid applications and working
          with a diverse set of programming languages, including C, Java,
          Python, and JavaScript. I’m always eager to learn new technologies and
          programming languages to adapt to project needs and deliver value.
          <br></br>
          <br></br> I’m passionate about creating innovative solutions and
          delivering high-quality results. I thrive in environments that
          challenge me to grow, learn, and contribute meaningfully to impactful
          projects.<br></br>
          <br></br> Let’s connect to explore how we can collaborate to achieve
          shared goals!
        </p>
        <img src={profile} alt="not me another time" id="profile"></img>
      </div>
    </section>
  );
};

export default AboutMe;
