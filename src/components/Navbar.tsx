import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "../assets/styles/navBar.css";

interface NavbarProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchQueryChange,
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const { theme, setTheme } = useTheme();
  const [showNavList, setShowNavList] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Toggle mobile nav visibility
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
      {/* Category filter dropdown (only shown on homepage) */}
      {location.pathname === "/" && (
        <div className="nav__controls">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            className="blog-search-input"
          />

          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="category-dropdown"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Main nav links */}
      {(showNavList || !isMobile) && (
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link
              to="/"
              className="link link--nav"
              onClick={() => setShowNavList(false)}
            >
              Blog
            </Link>
          </li>
        </ul>
      )}

      {/* Theme toggle button */}
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

      {/* Mobile menu toggle */}
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
