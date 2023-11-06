import React from 'react'
import hands from "../assets/images/helpinghand.jpg";

const About = () => {
  return (
    <>
    <p className="text-center text-3xl font-bold mb-4 mt-10">About</p>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-24 py-12">
   
    <div className="mb-8 lg:mb-0 lg:mr-12">
      <img src={hands} alt="About" className="w-full lg:w-80 h-90" />
    </div>

   
    <div>
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-4">
        Some description text about your organization or company goes here. You can add more details about
        your mission, vision, or any information you'd like to convey to your audience.
      </p>
      <a href="/view-more" className="text-blue-500 hover:underline">View More</a>
    </div>
  </div>
  </>
  )
}

export default About