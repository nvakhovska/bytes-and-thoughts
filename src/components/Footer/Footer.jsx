import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Styles
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <a
        href="https://github.com/nvakhovska"
        className="footer__link"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit nvakhovska Github (opens in a new window)"
      >
        Created by Nataliia Vakhovska
      </a>
    </footer>
  );
};
export default Footer;
