import "./about.css"
import AboutImage from "../../assets/about.jpg"
import CV from "../../assets/cv.pdf"
import { FiDownloadCloud } from "react-icons/fi"
import renderedCards from "./about-items"
import { useInView } from "react-intersection-observer"

function About() {
  const { ref: myRef, inView: myElementIsVisible } = useInView()

  return (
    <section id="about">
      <div
        ref={myRef}
        className={`container about__container ${
          myElementIsVisible ? "animate" : ""
        }`}
      >
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Portrait" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">{renderedCards}</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href={CV} download className="btn primary">
            Download CV{" "}
            <span>
              <FiDownloadCloud />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
