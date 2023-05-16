import AboutCard from "../../components/about-card/AboutCard"

function Project({ project }) {
  return (
    <AboutCard className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Project Preview" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a
          href={project.demo}
          className="btn sm project__left-button"
          target="_blank"
          rel="noreferrer noopener"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          className="btn sm primary project__right-button"
          target="_blank"
          rel="noreferrer noopener"
        >
          View Code
        </a>
      </div>
    </AboutCard>
  )
}

export default Project
