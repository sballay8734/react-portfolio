import "./portfolio.css"
import data from "./data"
import ProjectCategories from "./ProjectCategories"
import Projects from "./Projects"
import { useState } from "react"

function Portfolio() {
  const [projects, setProjects] = useState(data)

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Check out some of the projects I recently worked on.</p>
      <div className="container portfolio__container">
        <ProjectCategories projects={projects} setProjects={setProjects} />
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default Portfolio
