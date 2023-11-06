import React from 'react';

const VisitComponent = () => {
  // Sample visit data (replace this with your actual visit data)
  const visits = [
    { id: 1, date: '2023-11-05', home: 'Home A', visitor: 'John Doe' },
    { id: 2, date: '2023-11-06', home: 'Home B', visitor: 'Jane Smith' },
    // Add more sample visit data as needed
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {visits.map((visit) => (
        <div key={visit.id} className="bg-white p-4 rounded-md shadow-md">
          <p>Date: {visit.date}</p>
          <p>Home: {visit.home}</p>
          <p>Visitor: {visit.visitor}</p>
        </div>
      ))}
    </div>
  );
};

export default VisitComponent;
