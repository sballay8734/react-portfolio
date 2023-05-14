import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

const links = [
  { id: 1, link: "https://github.com/sballay8734", icon: <AiOutlineGithub /> },
  {
    id: 2,
    link: "https://https://www.linkedin.com",
    icon: <AiFillLinkedin />
  }
]

const renderedLinks = links.map((link) => {
  return (
    <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer">
      {link.icon}
    </a>
  )
})

export default renderedLinks
