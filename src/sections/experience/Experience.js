import CurrentLearningCards from "./CurrentLearningCards"
import ExperienceCard from "./ExperienceCard"
import "./experience.css"

function Experience() {
  const categories = ["Frontend", "Backend"]

  return (
    <section id="experience">
      <h2>My Experience</h2>
      {/* <p>What Skills I Have</p> */}
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
      <div className="container learning-path-wrapper">
        <div className="learning-path-header">
          What I'm Learning THIS DOESN'T LOOK GOOD
        </div>
        <div className="flex learning-card-container">
          <CurrentLearningCards />
        </div>
      </div>
    </section>
  )
}

export default Experience
