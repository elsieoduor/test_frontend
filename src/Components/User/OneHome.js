import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import building from '../../assets/images/building_homes.jpg';

const OneHome = () => {
  const { id } = useParams();
  const history = useNavigate();

  const homeData = [
    {
      id: 1,
      name: 'Cozy Cottage',
      image: building,
      description: 'A charming cottage in a peaceful location.',
      visitDate: '', // Property to hold set visit date
      donationMade: false, // Property to track if a donation has been made
    },
    // Add more home data as needed
  ];

  const selectedHome = homeData.find((home) => home.id === parseInt(id));

  const handleSetVisitDate = (homeId) => {
    // Logic to set visit date for the selected home
    console.log(`Set visit date for home ${homeId}`);
    history('/schedule_visit');
  };

  const handleMakeDonation = (homeId) => {
    // Logic to make a donation for the selected home
    console.log(`Make donation for home ${homeId}`);
    history('/donate');
  };

  return (
    <div className="container mx-auto mt-16 p-4 max-w-2xl">
      {selectedHome && (
        <div className="flex gap-8">
          <div className="flex-shrink-0 w-1/2">
            <img src={selectedHome.image} alt={selectedHome.name} className="w-full h-auto" />
          </div>
          <div className="flex-grow">
            <h2 className="text-3xl font-semibold mb-4">{selectedHome.name}</h2>
            <p className="text-gray-700">{selectedHome.description}</p>
            {!selectedHome.visitDate ? (
              <button
                onClick={() => handleSetVisitDate(selectedHome.id)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Set Visit Date
              </button>
            ) : (
              <p className="mt-4">Visit Date: {selectedHome.visitDate}</p>
            )}
            {!selectedHome.donationMade ? (
              <button
                onClick={() => handleMakeDonation(selectedHome.id)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Make Donation
              </button>
            ) : (
              <p className="mt-4">Donation Made</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OneHome;

// import React from 'react';
// import { useParams,  useNavigate } from 'react-router-dom';
// import building from "../../assets/images/building_homes.jpg";

// const OneHome = () => {
//   const { id } = useParams();
//   const history = useNavigate();

//   const homeData = [
//     {
//       id: 1,
//       name: 'Cozy Cottage',
//       image: building,
//       description: 'A charming cottage in a peaceful location.',
//       visitDate: '', // Property to hold set visit date
//       donationMade: false, // Property to track if a donation has been made
//     },

//   ];


//   const selectedHome = homeData.find((home) => home.id === parseInt(id));

//   const handleSetVisitDate = (homeId) => {
//     // Logic to set visit date for the selected home
//     console.log(`Set visit date for home ${homeId}`);
//     history('/schedule_visit')
  
//   };

//   const handleMakeDonation = (homeId) => {
//     // Logic to make a donation for the selected home
//     console.log(`Make donation for home ${homeId}`);
//     history('/donate')
    
//   };

//   return (
//     <div className="flex max-w-sm rounded shadow-lg m-4">
//     {selectedHome && (
//       <>
//         <img src={selectedHome.image} alt={selectedHome.name} className="w-1/3" />
//         <div className="flex flex-col justify-between p-4 w-2/3">
//           <h2>{selectedHome.name}</h2>
//           <p>{selectedHome.description}</p>
//           {!selectedHome.visitDate ? (
//             <button onClick={() => handleSetVisitDate(selectedHome.id)} style={{ backgroundColor: '#E57C23', color:' #F8F1F1' }}>Set Visit Date</button>
//           ) : (
//             <p>Visit Date: {selectedHome.visitDate}</p>
//           )}
//           {!selectedHome.donationMade ? (
//             <button onClick={() => handleMakeDonation(selectedHome.id)} style={{ backgroundColor: '#E57C23', color:' #F8F1F1' }}>Make Donation</button>
//           ) : (
//             <p>Donation Made</p>
//           )}
//         </div>
//       </>
//     )}
//   </div>
//   );
// };

// export default OneHome;
