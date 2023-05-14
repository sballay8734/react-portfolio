import React from "react"
import Navbar from "./sections/navbar/Navbar"
import Header from "./sections/header/Header"
import About from "./sections/about/About"
import Services from "./sections/services/Services"
import Portfolio from "./sections/portfolio/Portfolio"
import CurrentlyLearning from "./sections/currently-learning/CurrentlyLearning"
import FAQs from "./sections/faqs/FAQs"
import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import FloatingNav from "./sections/floating-nav/FloatingNav"

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <CurrentlyLearning />
      {/* Maybe remove FAQs and Services */}
      {/* <FAQs />
      <Services /> */}
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  )
}

export default App
