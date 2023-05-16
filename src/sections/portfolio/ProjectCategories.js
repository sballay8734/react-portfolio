import { useState } from "react"
import data from "./data"

function ProjectCategories({ setProjects }) {
  const categories = ["All", "Frontend", "Backend"]
  const [activeCategory, setActiveCategory] = useState("All")

  function filterProjects(category) {
    if (category === "All") {
      setProjects(data)
    } else {
      const updatedProjects = data.filter((project) => {
        return project.category === category
      })
      setProjects(updatedProjects)
    }
  }

  function handleClick(category) {
    setActiveCategory(category)
    filterProjects(category)
  }

  return (
    <div className="project__categories-buttons">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className={`${category === activeCategory ? "active" : ""} btn`}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default ProjectCategories
