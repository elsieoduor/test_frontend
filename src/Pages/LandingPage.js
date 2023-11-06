import React from 'react'
import Slider from '../Components/Slider'
import About from '../Components/About'
import Donations from '../Components/Donations'
import Review from '../Components/Review'
import Contact from '../Components/Contact'



const LandingPage = () => {
  return (
    <div>
      <Slider />
      <About />
      <Donations />
      <Review />
      <Contact />
    </div>

  )
}

export default LandingPage