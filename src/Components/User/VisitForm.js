import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const VisitForm = ({ setVisitDate, isLoggedIn }) => {
  const [visitDate, setVisitDateForm] = useState(new Date());
  const [homeDetails, setHomeDetails] = useState(''); // Define homeDetails state
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!isLoggedIn) {
      alert('Please log in to set a visit date.');
      return;
    }

    // Replace 'loggedInUsername' with the actual variable or prop that holds the logged-in user's username
    const loggedInUsername = 'replace-with-actual-username';

    // Replace 'homeDetails' with the actual variable or state that holds home details
    const visitData = {
      visitDate,
      home: homeDetails,
      visitor: loggedInUsername,
    };

    // Make a visit request using the visitData
    try {
      const response = await fetch('http://127.0.0.1:8000/api/make_visit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitData),
      });

      if (response.ok) {
        alert('Visit scheduled successfully!');
        navigate('/donations');
      } else {
        alert('Error scheduling visit');
      }
    } catch (error) {
      console.error('Visit error:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-10 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">VISIT FORM</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Date and Time</label>
          <DatePicker
            selected={visitDate}
            onChange={(date) => setVisitDateForm(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
=======
    <div className="flex h-screen justify-center items-center">
      <form className="bg-white p-10 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Visit</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
          <input
            type="date"
            value={visitDate}
            onChange={(e) => setVisitDateForm(e.target.value)}
>>>>>>> origin/main
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Home</label>
          <input
            type="text"
            placeholder="Enter home details"
<<<<<<< HEAD
            value={homeDetails}
            onChange={(e) => setHomeDetails(e.target.value)} // Set homeDetails state
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
=======
            onChange={(e) => setVisitDateForm(e.target.value)}
>>>>>>> origin/main
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleSave}
            style={{ backgroundColor: '#E57C23', color: '#F8F1F1' }}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Visit
          </button>
          <button
            type="button"
            onClick={handleCancel}
<<<<<<< HEAD
            style={{ backgroundColor: '#E57C23', color: '#F8F1F1' }}
=======
            style={{ backgroundColor: 'red', color: '#F8F1F1' }}
>>>>>>> origin/main
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default VisitForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const VisitForm = ({ setVisitDate, isLoggedIn }) => {
//   const [visitDate, setVisitDateForm] = useState(new Date());
//   const navigate = useNavigate();

//   const handleSave = () => {
//     if (!isLoggedIn) {
//       alert('Please log in to set a visit date.');
//       return;
//     }

//     setVisitDate(visitDate);
//     navigate('/donations');
//   };

//   const handleCancel = () => {
//     navigate('/');
//   };

//   return (
//     <div>
//       <div className="flex h-screen">
//         <form className="bg-white p-10 rounded shadow-md">
//           <h2 className="text-2xl font-bold mb-5 text-center">Visit</h2>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Date and Time</label>
//             <DatePicker
//               selected={visitDate}
//               onChange={(date) => setVisitDateForm(date)}
//               showTimeSelect
//               timeFormat="HH:mm"
//               timeIntervals={15}
//               timeCaption="Time"
//               dateFormat="MMMM d, yyyy h:mm aa"
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Home</label>
//             <input
//               type="text"
//               placeholder="Enter home details"
//               onChange={(e) => setVisitDateForm(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <button
//               type="button"
//               onClick={handleSave}
//               style={{ backgroundColor: '#E57C23', color: '#F8F1F1' }}
//               className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Visit
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               style={{ backgroundColor: 'red', color: '#F8F1F1' }}
//               className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VisitForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';


// const VisitForm = ({ setVisitDate, isLoggedIn }) => {
//   const [visitDate, setVisitDateForm] = useState('');
//   const navigate = useNavigate();

//   const handleSave = () => {
//     if (!isLoggedIn) {
//       alert('Please log in to set a visit date.');
//       return;
//     }

//     setVisitDate(visitDate);
//     navigate('/donations');
//   };

//   const handleCancel = () => {
//     navigate('/');
//   };

//   return (
//     <div>
//       <div className="flex h-screen">
//         <form className="bg-white p-10 rounded shadow-md">
//           <h2 className="text-2xl font-bold mb-5 text-center">Visit</h2>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
//             <input
//               type="date"
//               value={visitDate}
//               onChange={(e) => setVisitDateForm(e.target.value)}
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Home</label>
//             <input
//               type="text"
//               placeholder="Enter home details"
//               onChange={(e) => setVisitDateForm(e.target.value)}
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <button
//               type="button"
//               onClick={handleSave}
//               style={{ backgroundColor: '#E57C23', color: '#F8F1F1' }}
//               className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Visit
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               style={{ backgroundColor: 'red', color: '#F8F1F1' }}
//               className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VisitForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const VisitForm = ({ setVisitDate }) => {
//   const [visitDate, setVisitDateForm] = useState('');
//   const navigate = useNavigate();

//   const handleSave = () => {
//     setVisitDate(visitDate);
//     navigate('/donations');
//   };

//   const handleCancel = () => {
//     navigate('/');
//   };

//   return (
//     <div>
//       <div className="flex h-screen">
//         <form className="bg-white p-10 rounded shadow-md">
//           <h2 className="text-2xl font-bold mb-5 text-center">Visit</h2>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
//             <input
//               type="date"
//               value={visitDate}
//               onChange={(e) => setVisitDateForm(e.target.value)}
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Home</label>
//             <input
//               type="text"
//               placeholder="Enter home details"
//               onChange={(e) => setVisitDateForm(e.target.value)}
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <button
//               type="button"
//               onClick={handleSave}
//               style={{ backgroundColor: '#E57C23', color: '#F8F1F1' }}
//               className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Visit
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               style={{ backgroundColor: 'red', color: '#F8F1F1' }}
//               className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VisitForm;
