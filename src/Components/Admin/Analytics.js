import React from 'react';
import { Bar } from 'react-chartjs-2';

const AnalyticsSection = () => {
  const data = {
    labels: ['Home 1', 'Home 2', 'Home 3', 'Home 4', 'Home 5'],
    datasets: [
      {
        label: 'Most Visited Homes',
        data: [10, 20, 30, 15, 25],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Most in Need',
        data: [5, 15, 20, 10, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AnalyticsSection;
