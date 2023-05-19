import "./floating-nav.css"
import Nav from "./Nav"
import Scrollspy from "react-scrollspy"
import floatingNavLinks from "./floating-nav-data"

function FloatingNav({ className }) {
  return (
    <ul className={`container floating__nav ${className}`}>
      <Scrollspy
        offset={-400}
        className="scrollspy"
        items={["header", "about", "portfolio", "experience", "contact"]}
        currentClassName="active"
      >
        {floatingNavLinks.map((link) => {
          return <Nav key={link.id} link={link} />
        })}
      </Scrollspy>
    </ul>
  )
}

export default FloatingNav
