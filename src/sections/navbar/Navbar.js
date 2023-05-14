import Logo from "../../assets/logo.jpg"
import "../../index.css"
import "./navbar.css"
import renderedLinks from "./links"
import { BsDroplet } from "react-icons/bs"

function Navbar() {
  return (
    <nav id="navbar">
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        {/* From links.js */}
        <ul className="nav__menu">{renderedLinks}</ul>
        <button id="theme__icon">
          <BsDroplet />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
