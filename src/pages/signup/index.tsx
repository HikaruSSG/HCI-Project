import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (typeof window === 'undefined' || !window.localStorage) {
      setError('Local Storage is not supported by your browser');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find((user: any) => user.username === username);

    if (existingUser) {
      setError('Username already exists');
      return;
    }

    users.push({ username, firstName, lastName, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Successfully signed up!');
    window.location.href = '/login';
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-background border border-primary shadow-lg rounded-lg m-4 text-gray-800 p-8 w-96">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Sign Up</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-primary text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-primary text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-primary text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-primary text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-primary text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-primary-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
              <Link href="/login" className="inline-block align-baseline font-bold text-sm text-primary hover:text-primary-darker">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
