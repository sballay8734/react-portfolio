const links = [
  { id: 1, link: "#", label: "Home" },
  { id: 2, link: "#about", label: "About" },
  { id: 3, link: "#portfolio", label: "Portfolio" },
  { id: 4, link: "#current-learning", label: "Current Learning" },
  // { id: 5, link: "#faqs", label: "FAQs" },
  // { id: 6, link: "#services", label: "Services" },
  { id: 7, link: "#contact", label: "Contact" }
]

const renderedLinks = links.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.link}>{link.label}</a>
    </li>
  )
})

export default renderedLinks
