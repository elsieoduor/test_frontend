import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const HomesList = () => {
  const [homes, setHomes] = useState([
    { id: 1, name: 'Cozy Cottage', address: '123 Main St', description: 'A charming cottage.' },
    { id: 2, name: 'Modern Apartment', address: '456 Elm St', description: 'An apartment with city views.' },
    // Add more sample home data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Logic to filter homes based on the search term
    // You might want to filter the 'homes' state here
  };

  const handleEdit = (homeId) => {
    // Logic to handle edit functionality
    console.log(`Edit home with ID ${homeId}`);
  };

  const handleDelete = (homeId) => {
    // Logic to handle delete functionality
    console.log(`Delete home with ID ${homeId}`);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Homes"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full border border-gray-300 rounded py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>
        <div className="ml-2">
          <FaPlus className="text-green-500 text-xl cursor-pointer" onClick={() => console.log('Add new home')} />
        </div>
      </div>

      <table className="w-full mt-10">
        
        <tbody>
          {homes.map((home, index) => (
            <React.Fragment key={home.id}>
              <tr>
                <td>{home.name}</td>
                <td>{home.address}</td>
                <td>{home.description}</td>
                <td>
                  <div className="flex">
                    <FaEdit
                      className="text-blue-500 text-lg mr-2 cursor-pointer"
                      onClick={() => handleEdit(home.id)}
                    />
                    <FaTrash
                      className="text-red-500 text-lg cursor-pointer"
                      onClick={() => handleDelete(home.id)}
                    />
                  </div>
                </td>
              </tr>
              {index !== homes.length - 1 && (
                <tr key={`line-${index}`}>
                  <td colSpan="4" className="border-b border-gray-300" />
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomesList;
