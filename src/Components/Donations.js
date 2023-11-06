import React from 'react'
import clothes from "../assets/images/clothes.jpg";
import health from "../assets/images/health.jpg";
// import household from "../assets/images/household.jpg";

const Donations = () => {
  const donations = [
    {
      id: 1,
      image: clothes,
      title: 'Donation Title 1',
      description: 'Description of the donation item 1.',
    },
    {
      id: 2,
      image: health,
      title: 'Donation Title 2',
      description: 'Description of the donation item 2.',
    },
    // {
    //   id: 3,
    //   image: household,
    //   title: 'Donation Title 3',
    //   description: 'Description of the donation item 3.',
    // },
    
  ];

  return (
    <div className="lg:mx-32 mt-8 lg:mt-16">
      <p className="text-center text-3xl font-bold mb-4">Donations</p>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-lg">Below are donations you can make</p>
        <a href="/donations" className="flex items-center text-blue-500 hover:underline">
          View More <span className="ml-1">&#8594;</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {donations.map((donation) => (
          <div key={donation.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={donation.image} alt={donation.title} className="w-full" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{donation.title}</h3>
              <p className="text-sm mb-4">{donation.description}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Donations