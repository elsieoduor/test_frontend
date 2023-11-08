import React from 'react';
import hands from "../assets/images/helpinghand.jpg";

const About = () => {
  return (
    <>
      <div className="text-center mt-10">
        <p className="text-3xl font-bold mb-4">About Us</p>
        <p className="text-xl mb-4">Some text description here, still centered.</p>
        <a href="/about" className="text-blue-500 hover:underline block mb-8">Go to About Page</a>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Three cards - Example */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img src={hands} alt="About" className="w-full lg:w-80 h-90" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 1</div>
            <p className="text-gray-700 text-base">
              Description for Card 1.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img src={hands} alt="About" className="w-full lg:w-80 h-90" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 2</div>
            <p className="text-gray-700 text-base">
              Description for Card 2.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img src={hands} alt="About" className="w-full lg:w-80 h-90" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 3</div>
            <p className="text-gray-700 text-base">
              Description for Card 3.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
