import ExperienceCard from "./ExperienceCard"
import LearningCard from "./LearningCard"
import { useInView } from "react-intersection-observer"
import "./experience.css"

function Experience() {
  const categories = ["Frontend", "Backend"]
  const learningCategories = ["Currently", "Future"]
  const { ref, inView } = useInView()

  return (
    <section id="experience">
      <div
        ref={ref}
        className={`container experience__section-content ${
          inView ? "animate" : ""
        }`}
      >
        <h2>My Experience</h2>
        {/* <p>What Skills I Have</p> */}
        <div className="container experience__cards">
          {categories.map((category) => {
            return (
              <div key={category} className="experience__card">
                <p className="experience__card-header">
                  {category} Development
                </p>
                <div className="card__items-wrapper">
                  <ExperienceCard area={category} />
                </div>
              </div>
            )
          })}
        </div>
        <div className="container learning-path-wrapper">
          {learningCategories.map((category) => {
            return (
              <div key={category} className="learning__card">
                <p className="experience__card-header">{category} Learning</p>
                <div className="card__items-wrapper">
                  <LearningCard time={category} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
