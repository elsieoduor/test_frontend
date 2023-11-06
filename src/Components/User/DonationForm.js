import React, { useState } from 'react';

const DonationForm = ({ handleMakeDonation }) => {
  const [showForm, setShowForm] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleDonate = () => {
    handleMakeDonation(donationAmount);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setDonationAmount('');
  };

  return (
    <div>
      <button onClick={handleShowForm}>Make Donation</button>
      {showForm && (
        <div>
          <input
            type="number"
            placeholder="Donation Amount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />
          <button onClick={handleDonate}>Donate</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default DonationForm;
