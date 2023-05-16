import experienceData from "./data"

function ExperienceCard({ area }) {
  const filteredData = experienceData.filter((item) => {
    return item.area === area
  })

  const itemsToRender = filteredData.map((item) => {
    return (
      <div key={item.concept} className="flex card__item">
        <div>+</div>
        <div>
          <p className="white experience__concept">{item.concept}</p>
          <p className="muted experience__proficiency">{item.proficiency}</p>
        </div>
      </div>
    )
  })

  return itemsToRender
}

export default ExperienceCard
