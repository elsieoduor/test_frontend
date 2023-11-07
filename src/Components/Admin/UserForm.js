import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const UserForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
