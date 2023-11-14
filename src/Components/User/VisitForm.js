import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const VisitForm = ({ setVisitDate, isLoggedIn }) => {
  const [visitDate, setVisitDateForm] = useState(new Date());
  const [homeDetails, setHomeDetails] = useState('');
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!isLoggedIn) {
      alert('Please log in to set a visit date.');
      return;
    }

    const loggedInUsername = 'replace-with-actual-username';

    const visitData = {
      visitDate,
      home: homeDetails,
      visitor: loggedInUsername,
    };

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
    <div className="flex h-screen justify-center items-center">
      <form className="bg-white p-10 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Visit</h2>
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
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Home</label>
          <input
            type="text"
            placeholder="Enter home details"
            value={homeDetails}
            onChange={(e) => setHomeDetails(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleSave}
            style={{ backgroundColor: '#E57C23', color: '#F8F1F1' }}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Schedule Visit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            style={{ backgroundColor: 'red', color: '#F8F1F1' }}
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
