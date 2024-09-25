import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Users from '../data/users.json'; // Adjusted relative path

const AdminDashboard = () => {
    const [userData, setUserData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setUserData(Users); // Load all user data from the JSON file
    }, []);

    // Function to handle search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Function to handle view
    const handleView = (user) => {
        // Pass the entire user object to the display page
        navigate('/display', { state: { user } });
    };

    // Function to handle edit
    const handleEdit = (user) => {
        navigate('/editdata', { state: { user } });
    };

    // Function to handle delete
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUserData(userData.filter(user => user.id !== id));
        }
    };

    // Filtered user data based on search term
    const filteredUserData = userData.filter(user =>
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-white rounded shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Admin Dashboard</h2>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by full name..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-2 mb-4 border"
            />

            {/* User Data Table */}
            <table className="min-w-full border border-collapse border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-4 border border-gray-300">Full Name</th>
                        <th className="p-4 border border-gray-300">Email</th>
                        <th className="p-4 border border-gray-300">Mobile</th>
                        <th className="p-4 border border-gray-300">Status</th>
                        <th className="p-4 border border-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUserData.map(user => (
                        <tr key={user.id}>
                            <td className="p-4 border border-gray-300">{user.fullName}</td>
                            <td className="p-4 border border-gray-300">{user.email}</td>
                            <td className="p-4 border border-gray-300">{user.mobile}</td>
                            <td className="p-4 border border-gray-300">{user.statusOfResidence}</td>
                            <td className="p-4 border border-gray-300">
                                <button
                                    onClick={() => handleView(user)} // Pass entire user data
                                    className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
                                >
                                    View
                                </button>
                                <button
                                    onClick={() => handleEdit(user)}
                                    className="px-4 py-2 mr-2 text-white bg-blue-500 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="px-4 py-2 text-white bg-red-500 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
