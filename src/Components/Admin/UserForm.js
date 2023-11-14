<<<<<<< HEAD
// import React, { useState } from 'react';
// import { FaPlus } from 'react-icons/fa';

// const UserForm = () => {
//   const [showForm, setShowForm] = useState(false);

//   const handleShowForm = () => {
//     setShowForm(true);
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setShowForm(false);
//   };

//   return (
//     <div>
//       <div className="flex items-center mb-4">
//         <div className="relative w-full">
//           <input
//             type="text"
//             placeholder="Search Users"
//             // ... (existing search functionality)
//           />
//         </div>
//         <div className="ml-2">
//           <FaPlus
//             className="text-green-500 text-xl cursor-pointer"
//             onClick={handleShowForm}
//           />
//         </div>
//       </div>

//       {showForm && (
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Name" required />
//           <input type="email" placeholder="Email" required />
//           <div>
//             <button type="submit">Save</button>
//             <button type="button" onClick={handleCancel}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default UserForm;
=======
>>>>>>> origin/main
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/admin/user_list');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/admin/user_list')
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white p-8 rounded-md shadow-md flex flex-col"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-5 text-center">Add user</h2>
        <input
          type="text"
          placeholder="Name"
          required
          className="border border-gray-300 rounded-md p-2 mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="border border-gray-300 rounded-md p-2 mb-4"
        />
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;