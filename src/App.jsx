
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Education, Hero, Navbar, Tech, Works, StarsCanvas, EarthCanvas } from './components'
import ScrollToTop from "react-scroll-to-top";

const App = ()=> {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Education />
        <Experience/>
        <Tech/>
        <Works/>
        <EarthCanvas className='dvGrab' />
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
      <ScrollToTop smooth className='flex justify-center items-center'/>
    </BrowserRouter>
  )
}

export default App
