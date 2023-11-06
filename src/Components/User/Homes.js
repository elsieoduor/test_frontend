import React, { useState } from 'react';

const Homes = () => {
  // Sample home data (replace this with your actual home data)
  const homeData = [
    {
      id: 1,
      name: 'Cozy Cottage',
      image: 'image-link-here',
      description: 'A charming cottage in a peaceful location.',
      visitDate: '', // Property to hold set visit date
      donationMade: false, // Property to track if a donation has been made
    },
    // Add more sample home data as needed
  ];

  const [selectedHome, setSelectedHome] = useState(null);

  const handleCardClick = (home) => {
    setSelectedHome(home);
  };

  const handleSetVisitDate = (homeId) => {
    // Logic to set visit date for the selected home
    console.log(`Set visit date for home ${homeId}`);
  };

  const handleMakeDonation = (homeId) => {
    // Logic to make a donation for the selected home
    console.log(`Make donation for home ${homeId}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {homeData.map((home) => (
        <div
          key={home.id}
          onClick={() => handleCardClick(home)}
          className="bg-white p-4 rounded-md shadow-md cursor-pointer"
        >
          <img src={home.image} alt={home.name} className="w-full mb-4" />
          <p>{home.name}</p>
        </div>
      ))}

      {selectedHome && (
        <div className="col-span-2">
          <h2>{selectedHome.name}</h2>
          <img src={selectedHome.image} alt={selectedHome.name} className="w-full mb-4" />
          <p>{selectedHome.description}</p>
          {!selectedHome.visitDate && (
            <button onClick={() => handleSetVisitDate(selectedHome.id)}>Set Visit Date</button>
          )}
          {!selectedHome.donationMade && (
            <button onClick={() => handleMakeDonation(selectedHome.id)}>Make Donation</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Homes;
