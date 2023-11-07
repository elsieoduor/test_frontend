import React from 'react';

const Analytics = () => {
  const mostInNeedData = [
    { id: 1, name: 'John Doe', need: 'Food' },
    { id: 2, name: 'Jane Smith', need: 'Shelter' },
  ];

  const mostVisitedData = [
    { id: 1, name: 'Location A', visits: 50 },
    { id: 2, name: 'Location B', visits: 30 },
  ];

  return (
    <div>
      <h2>Most in Need</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Need</th>
          </tr>
        </thead>
        <tbody>
          {mostInNeedData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.need}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Most Visited</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Visits</th>
          </tr>
        </thead>
        <tbody>
          {mostVisitedData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.visits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Analytics;
