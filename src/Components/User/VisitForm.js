import React, { useState } from 'react';

const VisitForm = ({ setVisitDate }) => {
  const [showForm, setShowForm] = useState(false);
  const [visitDate, setVisitDateForm] = useState('');

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleSave = () => {
    setVisitDate(visitDate);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setVisitDate('');
  };

  return (
    <div>
      <button onClick={handleShowForm}>Set Visit Date</button>
      {showForm && (
        <div>
          <input
            type="date"
            value={visitDate}
            onChange={(e) => setVisitDateForm(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default VisitForm;
