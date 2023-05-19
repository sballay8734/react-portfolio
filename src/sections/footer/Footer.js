import "./footer.css"
import { socialLinks } from "./footer-data"
import { navLinks } from "./footer-data"

function Footer() {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <ul className="footer__nav">
          {navLinks.map((link) => {
            return (
              <li key={link.id} className="footer__nav-item">
                <a href={link.link}>{link.label}</a>
              </li>
            )
          })}
        </ul>
        <div className="footer__socials">
          {socialLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.link}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}
              </a>
            )
          })}
        </div>
      </div>
      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} shawnballay.com</small>
      </div>
    </footer>
  )
}

export default Footer
