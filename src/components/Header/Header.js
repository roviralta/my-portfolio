import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>SR</h1>
      <nav>
        <ul className="header-links">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#projects">Icon</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
