import React from 'react'
import Header from './components/pages/Header/Header'
import Nav from "./components/pages/Nav/Nav"
import About from "./components/pages/About/About"
import Experience from "./components/pages/Experience/Experience"
import Services from "./components/pages/Services/Services"
import Portfolio from "./components/pages/Portfolio/Portfolio"
import Testimonials from "./components/pages/Testimonials/Testimonials"
import Contact from "./components/pages/Contact/Contact"
import Footer from "./components/pages/Footer/Footer"

const App = () => {
  return (
    <>
       <Header />
       <Nav />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Testimonials />
       <Contact />
       <Footer /> 
    </>
  )
}

export default App