import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering with:', email, password);
    // Your registration logic using email and password values
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-200">
      {/* Register Form */}
      <form onSubmit={handleRegister} className="bg-white p-10 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-center mb-4">
          <a href="/login" className="text-indigo-500 text-sm">
            Have an account? Login
          </a>
        </div>
        
        <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
