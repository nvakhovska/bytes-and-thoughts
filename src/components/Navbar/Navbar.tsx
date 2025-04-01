import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "../../hooks/useTheme";
import "./navBar.css";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showNavList, setShowNavList] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleNavList = () => setShowNavList((prev) => !prev);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav className="center nav">
      {(showNavList || !isMobile) && (
        <ul className="nav__list">
          <li className="nav__list-item">
            <a
              href={`${import.meta.env.BASE_URL}`}
              className="link link--nav"
              onClick={() => setShowNavList(false)}
            >
              Blog
            </a>
          </li>
        </ul>
      )}

      <button
        className="btn btn--icon nav__theme"
        type="button"
        aria-label="toggle theme"
        onClick={toggleTheme}
      >
        <FontAwesomeIcon
          className="fontawesome-icon"
          icon={theme === "dark" ? faSun : faMoon}
        />
      </button>

      {isMobile && (
        <button
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
          type="button"
          onClick={toggleNavList}
        >
          <FontAwesomeIcon
            className="fontawesome-icon"
            icon={showNavList ? faXmark : faBars}
          />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
