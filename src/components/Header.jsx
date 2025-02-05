import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "components/Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav-left">
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="nav-right">
        <ul>
          <li>
            <a
              href="https://github.com/drakesur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/drake-sur-258303121"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
