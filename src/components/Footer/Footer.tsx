import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faHeart} className="heart__icon" />
        Created by Nataliia Vakhovska
        <FontAwesomeIcon icon={faHeart} className="heart__icon" />
      </a>
    </footer>
  );
};

export default Footer;
