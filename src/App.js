import React from "react"
import Navbar from "./sections/navbar/Navbar"
import Header from "./sections/header/Header"
import About from "./sections/about/About"
import Portfolio from "./sections/portfolio/Portfolio"
import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import FloatingNav from "./sections/floating-nav/FloatingNav"
import Experience from "./sections/experience/Experience"
import { useRef, useState, useEffect } from "react"
import useModal from "./hooks/useModal"
import Theme from "./theme/Theme"
import useTheme from "./hooks/useTheme"

function App() {
  const mainRef = useRef()
  const [navIsShown, setNavIsShown] = useState(true)
  const [yPosition, setYPosition] = useState(64)
  const { modalIsShown } = useModal()
  const { theme } = useTheme()

  function showFloatingNav() {
    setNavIsShown(true)
  }

  function setScrollPosition() {
    const position = window.scrollY
    setYPosition(position)
  }

  useEffect(() => {
    function handler() {
      showFloatingNav()
      setScrollPosition()
    }
    window.addEventListener("scroll", handler)

    function checkForStop() {
      if (window.scrollY === yPosition) {
        setNavIsShown(false)
      }
    }

    const intervalCheck = setTimeout(checkForStop, 1800)

    return () => {
      window.removeEventListener("scroll", handler)
      clearTimeout(intervalCheck)
    }
  }, [yPosition])

  return (
    <main className={theme} ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Experience />
      {/* Maybe remove FAQs and Services */}
      {/* <FAQs />
      <Services /> */}
      <Contact />
      <Footer />
      {navIsShown ? (
        <FloatingNav className="show" />
      ) : (
        <FloatingNav className="hidden" />
      )}
      {modalIsShown ? <Theme /> : ""}
    </main>
  )
}

export default App
