import React from "react";
import "./Experience.css";
import { experience } from "../../data/Experience";
import { MdWork, MdWorkOff } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-title">
        <h1 id="title">Experience</h1>
      </div>
      <div className="iterat-exp">
        {experience.map((exp, index) => (
          <div className="exp" key={index}>
            <div className="info">
              <div className="info-exp">
                <h3>
                  {exp.time.includes("Present") ? <MdWork /> : <MdWorkOff />}{" "}
                  {exp.name}
                </h3>
                <h5>{exp.time}</h5>
              </div>
              <div className="descr-exp">
                <p>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
