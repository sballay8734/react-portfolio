import "./header.css"
import HeaderImage from "../../assets/header.jpg"
import renderedLinks from "./social-links"

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <p className="hello">Hello, I'm</p>
        <h2 className="name">Shawn Ballay</h2>
        <p className="animate">Developer (Animate this)</p>
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
