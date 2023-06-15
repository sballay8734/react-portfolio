import "./header.css"
import headshotOne from "../../assets/headshot-1a.jpg"
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
              "Teacher",
              "Below Average Golfer",
              "Producer"
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
          <img src={headshotOne} alt="Header Portrait" />
        </div>
      </div>
    </header>
  )
}

export default Header
