import "./about-card.css"

function AboutCard({ children, className, onClick }) {
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  )
}

export default AboutCard
