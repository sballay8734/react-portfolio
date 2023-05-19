import futureLearningData from "./learning-data"
import { AiOutlineCheckCircle } from "react-icons/ai"

function LearningCard({ time }) {
  const filteredData = futureLearningData.filter((item) => {
    return item.time === time
  })

  const itemsToRender = filteredData.map((item) => {
    return (
      <div key={item.concept} className="flex learning__item">
        <div className="checkmark">
          <AiOutlineCheckCircle />
        </div>
        <div>
          <p className="black experience__concept">{item.concept}</p>
          <p className="black muted experience__proficiency">{item.area}</p>
        </div>
        <span className="learning-card-logo">{item.logo}</span>
      </div>
    )
  })

  return itemsToRender
}

export default LearningCard
