import CurrentLearningCard from "./CurrentLearningCard"
import ExperienceCard from "./ExperienceCard"
import "./experience.css"

function Experience() {
  const categories = ["Frontend", "Backend"]

  return (
    <section id="experience">
      <h6>What Skills I Have</h6>
      <h2>My Experience</h2>
      <div className="container experience__cards">
        {categories.map((category) => {
          return (
            <div key={category} className="experience__card">
              <p className="experience__card-header">{category} Development</p>
              <div className="card__items-wrapper">
                <ExperienceCard area={category} />
              </div>
            </div>
          )
        })}
      </div>
      <CurrentLearningCard />
    </section>
  )
}

export default Experience
