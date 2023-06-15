import "./about.css"
import headshotThree from "../../assets/headshot-3a.jpg"
import CV from "../../assets/cv.pdf"
import { FiDownloadCloud } from "react-icons/fi"
import renderedCards from "./about-items"
import { useInView } from "react-intersection-observer"
import { FaLongArrowAltRight } from "react-icons/fa"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { useState } from "react"

function About() {
  const { ref: myRef, inView: myElementIsVisible } = useInView()
  const [longVersionIsActive, setLongVersionIsActive] = useState(false)

  function handleExpand() {
    setLongVersionIsActive(!longVersionIsActive)
  }

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
            <img src={headshotThree} alt="About Portrait" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">{renderedCards}</div>
          <p className="short-version">
            Trooper Candidate &nbsp;
            <FaLongArrowAltRight /> &nbsp; Teacher &nbsp;
            <FaLongArrowAltRight /> &nbsp; Developer
          </p>
          <p
            className={`long-version-text ${longVersionIsActive ? "show" : ""}`}
          >
            In 2014, I graduated from{" "}
            <span className="about-me-span">Arizona State University</span> with
            an undergraduate degree in criminal justice. I quickly realized that
            <span className="about-me-span"> being a trooper</span> was not
            something I would enjoy doing for the rest of my life. I ended up
            taking a job at a summer camp while I figured out what I wanted to
            do.
            <br></br>
            <br></br>
            Having never worked with kids before, I was unsure what to expect.
            Thankfully, it took me{" "}
            <span className="about-me-span">
              less than a day to realize I wanted to be a teacher
            </span>
            . Two months later I was back in school for my{" "}
            <span className="about-me-span">M.Ed. in Elementary Education</span>
            . About five awesome years later, the desire to pay off my student
            loans as quickly as possible had me reluctantly searching for a new
            career.{" "}
            <span className="about-me-span">
              I landed on software development.
            </span>
            <br></br>
            <br></br>
            I'm happy to say that what started as a reluctant endeavor, quickly
            turned into a passion. There are no words to express the level of
            excitement I have for this new possibility.
          </p>
          <div onClick={handleExpand} className="long-version-button">
            <div className="long-version-wrapper">
              {/* Add "Long Version" & "Collapse" text to this */}
              {longVersionIsActive ? (
                <div className="about-me-dropdown">
                  Collapse{" "}
                  <span className="arrow">
                    <IoMdArrowDropup />
                  </span>
                </div>
              ) : (
                <div className="about-me-dropdown">
                  Long Version
                  <span className="arrow">
                    <IoMdArrowDropdown />
                  </span>
                </div>
              )}
            </div>
          </div>
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
