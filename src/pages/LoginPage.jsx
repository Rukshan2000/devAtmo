// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons for username and password
import { GrMultiple } from "react-icons/gr";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for error message
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check username and password
        if (username === 'sradmin' && password === 'clear123') {
            alert('Login Successful!');
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard'); // Redirect to the dashboard
        } else {
            setError('Invalid username or password'); // Set error message
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
            <div className="p-8 bg-white rounded-lg shadow-md w-96">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
                {error && <p className="mb-4 text-center text-red-500">{error}</p>} {/* Error message */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-700">Username</label>
                        <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                            <FaUser className="p-2 text-gray-500" />
                            <input
                                type="text"
                                className="w-full px-4 py-2 focus:outline-none"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 font-medium text-gray-700">Password</label>
                        <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                            <FaLock className="p-2 text-gray-500" />
                            <input
                                type="password"
                                className="w-full px-4 py-2 focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
