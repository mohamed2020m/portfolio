import React, {useEffect, useState} from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Education, Hero, Navbar, Tech, Works, StarsCanvas, EarthCanvas } from './components'
import ScrollToTop from "react-scroll-to-top";

const App = ()=> {
  const [isMobile, setIsMobile ] = useState(false)

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }

  },[])


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
        {!isMobile ? <EarthCanvas className='dvGrab' /> : null}
        <div className='relative z-0'>
          <Contact/>
          {!isMobile ? <StarsCanvas/>: null}
        </div>
      </div>
      <ScrollToTop smooth className='flex justify-center items-center hover:bg-gray-300'/>
    </BrowserRouter>
  )
}

export default App
