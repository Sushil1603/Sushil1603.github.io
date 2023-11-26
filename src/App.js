import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Intro from './Components/Intro/intro'
import Skills from './Components/Skills/skills'
import Portfolio from './Components/Portfolio/portfolio'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/Footer'
import About from './About/about'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
