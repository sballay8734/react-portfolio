import "./header.css"
import HeaderImage from "../../assets/header.jpg"
import renderedLinks from "./social-links"
import Typewriter from "typewriter-effect"

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <p className="hello">Hello, I'm</p>
        <h2 className="name">Shawn Ballay</h2>
        <Typewriter
          className="animate"
          options={{
            strings: [
              "Developer",
              "Below Average Golfer",
              "Producer",
              "Health Enthusiast"
            ],
            autoStart: true,
            loop: true
          }}
        />
        <div className="header__cta">
          <a className="btn primary" href="#contact">
            Contact Me
          </a>
          <a className="btn light" href="#portfolio">
            My Projects
          </a>
        </div>
        <div className="header__socials">{renderedLinks}</div>
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
      </div>
    </header>
  )
}

export default Header
