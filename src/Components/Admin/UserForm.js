import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const UserForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    // Additional logic for initializing form fields if needed
  };

  const handleCancel = () => {
    setShowForm(false);
    // Additional logic for resetting form fields if needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission (add or edit user)
    // You might want to update the users state or perform API calls here
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Users"
            // ... (existing search functionality)
          />
        </div>
        <div className="ml-2">
          <FaPlus
            className="text-green-500 text-xl cursor-pointer"
            onClick={handleShowForm}
          />
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <div>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserForm;
