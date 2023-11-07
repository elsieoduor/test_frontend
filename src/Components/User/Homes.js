import React from 'react';
import building from "../../assets/images/building_homes.jpg";

const Homes = () => {
 
  const homeData = [
    {
      id: 1,
      name: 'Cozy Cottage',
      image: building,
      description: 'A charming cottage in a peaceful location.',
      visitDate: '', // Property to hold set visit date
      donationMade: false, // Property to track if a donation has been made
    },
   
  ];

 
  return (
    <div className="grid grid-cols-3 gap-4">
      {homeData.map((home) => (
        <div
          key={home.id}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer"
        >
          <img src={home.image} alt={home.name} className="w-full lg:w-80 h-90 object-cover" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{home.name}</div>
            <p className="text-gray-700 text-base">Mission:{home.description}</p>
            <p>Location: {home.location}</p>
            <p><a href={`/home/${home.id}`}>View More </a></p>
          </div>
        </div>
      ))}
  
    </div>
  );
};

export default Homes;
