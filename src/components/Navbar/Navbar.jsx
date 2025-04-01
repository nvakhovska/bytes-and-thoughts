import { useState } from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { projects, workExperience, skills } from "../../portfolio";

// Contexts
import { ThemeContext } from "../../contexts/theme";

// Styles
import "./navBar.css";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul style={{ display: showNavList ? "flex" : null }} className="nav__list">
        {projects.length ? (
          <li className="nav__list-item">
            <a href="#projects" onClick={toggleNavList} className="link link--nav">
              Projects
            </a>
          </li>
        ) : null}

        {workExperience.length ? (
          <li className="nav__list-item">
            <a href="#experience" onClick={toggleNavList} className="link link--nav">
              Experience
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav__list-item">
            <a href="#skills" onClick={toggleNavList} className="link link--nav">
              Skills
            </a>
          </li>
        ) : null}

        <li className="nav__list-item">
          <a href="#contact" onClick={toggleNavList} className="link link--nav">
            Contact
          </a>
        </li>
      </ul>

      <button
        className="btn btn--icon nav__theme"
        type="button"
        aria-label="toggle theme"
        onClick={toggleTheme}
      >
        {themeName === "dark" ? (
          <FontAwesomeIcon className="fontawesome-icon" icon={faSun} />
        ) : (
          <FontAwesomeIcon className="fontawesome-icon" icon={faMoon} />
        )}
      </button>

      <button
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
        type="button"
        onClick={toggleNavList}
      >
        {showNavList ? (
          <FontAwesomeIcon className="fontawesome-icon" icon={faXmark} />
        ) : (
          <FontAwesomeIcon className="fontawesome-icon" icon={faBars} />
        )}
      </button>
    </nav>
  );
};
export default Navbar;
