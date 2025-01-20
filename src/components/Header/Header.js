import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav aria-label="Main Navigation">
        <ul className="header-list">
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
