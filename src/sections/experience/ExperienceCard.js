import experienceData from "./experience-data"
import { AiOutlineCheckCircle } from "react-icons/ai"

function ExperienceCard({ area }) {
  const filteredData = experienceData.filter((item) => {
    return item.area === area
  })

  const itemsToRender = filteredData.map((item) => {
    return (
      <div key={item.concept} className="flex card__item">
        <div className="checkmark">
          <AiOutlineCheckCircle />
        </div>
        <div>
          <p className="black experience__concept">{item.concept}</p>
          <p className="black muted experience__proficiency">
            {item.proficiency}
          </p>
        </div>
      </div>
    )
  })

  return itemsToRender
}

export default ExperienceCard
