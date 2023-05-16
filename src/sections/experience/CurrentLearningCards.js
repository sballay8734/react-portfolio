import currentLearningData from "./current-learning-data"

function CurrentLearningCard() {
  const renderedItems = currentLearningData.map((item) => {
    return (
      <div className="card learning-card">
        <span>{item.logo}</span>
        <h5>{item.concept}</h5>
        <small>{item.area}</small>
      </div>
    )
  })
  return renderedItems
}

export default CurrentLearningCard
