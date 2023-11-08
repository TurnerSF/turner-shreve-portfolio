import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/turner-shreve-portfolio.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclass="active" to="/">
        <FontAwesomeIcon icon={faHome} color="4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclass="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclass="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/turnershreve"
        >
          <FontAwesomeIcon icon={faLinkedin} color="$4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/TurnerSF"
        >
          <FontAwesomeIcon icon={faGithub} color="$4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/9bCcMUD5"
        >
          <FontAwesomeIcon icon={faDiscord} color="$4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
