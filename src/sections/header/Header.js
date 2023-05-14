import "./header.css"
import HeaderImage from "../../assets/header.jpg"
import renderedLinks from "./social-links"

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Shawn Ballay</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="header__cta">
          <a className="btn primary" href="#contact">
            Contact Me
          </a>
          <a className="btn light" href="#portfolio">
            My Projects
          </a>
        </div>
        <div className="header__socials">{renderedLinks}</div>
      </div>
    </header>
  )
}

export default Header
