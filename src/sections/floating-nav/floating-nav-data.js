import { AiFillHome } from "react-icons/ai"
import { BsPersonFill } from "react-icons/bs"
import { AiFillAppstore } from "react-icons/ai"
import { AiFillMessage } from "react-icons/ai"
import { GiBookmarklet } from "react-icons/gi"

const floatingNavLinks = [
  { id: 1, link: "#", icon: <AiFillHome /> },
  { id: 2, link: "#about", icon: <BsPersonFill /> },
  { id: 3, link: "#portfolio", icon: <AiFillAppstore /> },
  { id: 4, link: "#experience", icon: <GiBookmarklet /> },
  // { id: 5, link: "#faqs", icon: "FAQs" },
  // { id: 6, link: "#services", icon: "Services" },
  { id: 7, link: "#contact", icon: <AiFillMessage /> }
]

export default floatingNavLinks
