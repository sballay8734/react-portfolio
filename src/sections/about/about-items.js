import { FaAward } from "react-icons/fa"
import { TbBooks } from "react-icons/tb"
import { BiHappyHeartEyes } from "react-icons/bi"
import AboutCard from "../../components/about-card/AboutCard"

const items = [
  { id: 1, icon: <FaAward />, title: "Experience", desc: "2+ years" },
  { id: 2, icon: <TbBooks />, title: "Projects", desc: "20+ completed" },
  {
    id: 3,
    icon: <BiHappyHeartEyes />,
    title: "Something",
    desc: "Blah blah"
  }
]

const renderedCards = items.map((item) => {
  return (
    <AboutCard key={item.id} className="about__card">
      <span className="about__card-icon">{item.icon}</span>
      <h5>{item.title}</h5>
      <small>{item.desc}</small>
    </AboutCard>
  )
})

export default renderedCards
