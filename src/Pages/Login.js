import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-200">
      <form onSubmit={handleLogin} className="bg-white p-10 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

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

        <div className="mb-4 text-center">
          <a href="/register" className="text-indigo-500 text-sm">
            Don't have an account? Register
          </a>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
