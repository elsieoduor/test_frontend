import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-tertiary flex items-center justify-between py-4 px-6" style={{ backgroundColor: '#394867' }}>
      <div className="text-white font-bold text-2xl">Hearts to Homes</div>

      <div className="flex space-x-4">
        <a href="#about" className="text-white hover:text-accent transition duration-300">Link 1</a>
        <a href="#donation" className="text-white hover:text-accent transition duration-300">Link 2</a>
        <a href="#visit" className="text-white hover:text-accent transition duration-300">Link 3</a>
        <a href="#visit" className="text-white hover:text-accent transition duration-300">Link 4</a>
        <a href="#visit" className="text-white hover:text-accent transition duration-300">Link 5</a>
      </div>

      <div>
        <button className="text-white font-semibold mr-4 py-2 px-4 rounded hover:bg-accent transition duration-300" style={{ backgroundColor: '#212A3E' }}>Login</button>
        <button className="text-white font-semibold py-2 px-4 rounded hover:bg-accent transition duration-300" style={{ backgroundColor: '#212A3E' }}>Register</button>

      </div>
    </nav>
  )
}

export default NavBar