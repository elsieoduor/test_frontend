import React from 'react'
import Slider from '../Components/Slider'
import About from '../Components/About'
import Donations from '../Components/Donations'
import Reviews from '../Components/Reviews'
import Contact from '../Components/Contact'
import Map from '../Pages/Map'



const LandingPage = () => {
  return (
    <div>
      <Slider />
      <About />
      <Donations />
      <Reviews />
      <Contact />
      <Map/>
    </div>

  )
}

export default LandingPage