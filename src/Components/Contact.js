import React from 'react'

const Contact = () => {
  return (
    <div className="lg:mx-32 mt-8 lg:mt-16 mb-10">
    <p className="text-center text-3xl font-bold mb-4">Contact</p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Contact us:</h3>
          <ul>
            <li className="mb-2">
              <a href="social_link_1" className="text-black-500 hover:underline">Email: hearts2homes@gmail.com</a>
            </li>
            <li className="mb-2">
              <a href="social_link_2" className="text-black-500 hover:underline">Phone: +254 123 4567897</a>
            </li>
            <li>
              <a href="social_link_3" className="text-black-500 hover:underline">Location: Nairobi, Kenya</a>
            </li>
          
          </ul>
        </div>
      </div>


      
    </div>
  </div>
  );
}

export default Contact