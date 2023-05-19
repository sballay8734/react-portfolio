import "./portfolio.css"
import data from "./data"
import ProjectCategories from "./ProjectCategories"
import Projects from "./Projects"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

function Portfolio() {
  const { ref, inView } = useInView()

  const [projects, setProjects] = useState(data)

  return (
    <section id="portfolio">
      <div
        ref={ref}
        className={`portfolio__section ${inView ? "animate" : ""}`}
      >
        <h2 className="portfolio__section-header">Recent Projects</h2>
        <p className="portfolio__section-p">
          Check out some of the projects I recently worked on.
        </p>
        <div className="container portfolio__container">
          <ProjectCategories projects={projects} setProjects={setProjects} />
          <Projects projects={projects} />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
