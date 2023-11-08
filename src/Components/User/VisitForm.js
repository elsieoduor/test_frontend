import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VisitForm = ({ setVisitDate }) => {
  const [visitDate, setVisitDateForm] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    setVisitDate(visitDate);
    navigate('/donations');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="flex h-screen">
        <form className="bg-white p-10 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-5 text-center">Visit</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input
              type="date"
              value={visitDate}
              onChange={(e) => setVisitDateForm(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Home</label>
            <input
              type="text"
              placeholder="Enter home details"
              onChange={(e) => setVisitDateForm(e.target.value)}
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
              style={{ backgroundColor: 'red', color: '#F8F1F1' }}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VisitForm;
