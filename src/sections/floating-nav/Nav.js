function Nav({ link, className }) {
  return (
    <li className={className}>
      <a href={link.link}>{link.icon}</a>
    </li>
  )
}

export default Nav
