import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (userId) => {
    console.log(`Edit user with ID ${userId}`);
  };

  const handleDelete = (userId) => {
    console.log(`Delete user with ID ${userId}`);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Users"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full border border-gray-300 rounded py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>
        <div className="ml-2">
          <FaPlus className="text-green-500 text-xl cursor-pointer" onClick={() => console.log('Add new user')} />
        </div>
      </div>

      <table className="w-full mt-10">
      
        <tbody>
          {users.map((user, index) => [
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <div className="flex">
                  <FaEdit
                    className="text-blue-500 text-lg mr-2 cursor-pointer"
                    onClick={() => handleEdit(user.id)}
                  />
                  <FaTrash
                    className="text-red-500 text-lg cursor-pointer"
                    onClick={() => handleDelete(user.id)}
                  />
                </div>
              </td>
            </tr>,
            index !== users.length - 1 && (
              <tr key={`line-${index}`}>
                <td colSpan="3" className="border-b border-gray-300" />
              </tr>
            ),
          ])}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
