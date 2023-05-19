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

function App() {
  const mainRef = useRef()
  const [floatingNavIsShown, setFloatingNavIsShown] = useState(false)
  const [yPosition, setYPosition] = useState(64)

  function showFloatingNav() {
    setFloatingNavIsShown(true)
  }

  function hideFloatingNav() {
    setFloatingNavIsShown(false)
  }

  function checkForStop() {
    if (window.scrollY === yPosition) {
      hideFloatingNav()
    }
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
    const intervalCheck = setTimeout(checkForStop, 1300)

    return () => {
      window.removeEventListener("scroll", handler)
      clearTimeout(intervalCheck)
    }
  }, [yPosition])

  return (
    <main ref={mainRef}>
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
      {floatingNavIsShown && <FloatingNav />}
    </main>
  )
}

export default App
