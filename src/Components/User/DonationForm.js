import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const DonationForm = ({ handleMakeDonation }) => {
  const [donationAmount, setDonationAmount] = useState('');
  const navigate = useNavigate();

  
  const handleDonate = () => {
    handleMakeDonation(donationAmount);
    navigate('/donations');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
  <div>
    
     
    <div className="flex h-screen">
      <form className="bg-white p-10 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Donate</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
          <input
            type="number"
            placeholder="Donation Amount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
           />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
          <input
            type="number"
            placeholder="Donation Amount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
           />
        </div>
      

        <div className="flex items-center justify-between">
          <button type="submit"
          onClick={handleDonate}
          style={{ backgroundColor: '#E57C23', color:' #F8F1F1' }}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          > Donate </button>
          <button type="submit"
          onClick={handleCancel}
          style={{ backgroundColor: 'red', color:' #F8F1F1' }}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          > Cancel </button>
        </div>
      </form>

    </div>
     
  </div>
  );
};

export default DonationForm;

