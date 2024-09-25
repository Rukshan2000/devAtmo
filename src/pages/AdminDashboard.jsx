import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Users from '../data/users.json'; // Adjust relative path for users data
import { FaEye, FaEdit, FaTrash, FaSignOutAlt } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
    const [userData, setUserData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 4; // Number of users displayed per page

    const navigate = useNavigate();

    useEffect(() => {
        setUserData(Users); // Load user data from the JSON file
    }, []);

    // Handle user actions
    const handleView = (user) => navigate('/display', { state: { user } });
    const handleEdit = (user) => navigate('/editdata', { state: { user } });
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUserData(userData.filter(user => user.userId !== id));
        }
    };

    // Filter search results
    const filteredUserData = userData.filter(user =>
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination Logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUserData.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUserData.length / usersPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    // Summary Data
    const totalUsers = userData.length;
    const totalMaleUsers = userData.filter(user => user.sex === 'Male').length;
    const totalFemaleUsers = userData.filter(user => user.sex === 'Female').length;
    const totalSingleUsers = userData.filter(user => user.maritalStatus === 'Single').length;
    const totalMarriedUsers = userData.filter(user => user.maritalStatus === 'Married').length;
    const beenToJapanYes = userData.filter(user => user.beenToJapan === 'Yes').length;
    const beenToJapanNo = userData.filter(user => user.beenToJapan === 'No').length;

// Data for the Gender Distribution Pie Chart
const genderChartData = {
    labels: ['Male', 'Female'],
    datasets: [
        {
            label: 'Gender Distribution',
            data: [totalMaleUsers, totalFemaleUsers],
            backgroundColor: ['#3b82f6', '#ec4899'], // Colors for Male and Female
            borderColor: ['#2563eb', '#db2777'],
            borderWidth: 1,
        },
    ],
};

// Data for the Marital Status Pie Chart
const maritalStatusChartData = {
    labels: ['Single', 'Married'],
    datasets: [
        {
            label: 'Marital Status Distribution',
            data: [totalSingleUsers, totalMarriedUsers],
            backgroundColor: ['#f59e0b', '#10b981'], // Colors for Single and Married
            borderColor: ['#d97706', '#059669'],
            borderWidth: 1,
        },
    ],
};

// Data for the "Been to Japan" Pie Chart
const beenToJapanChartData = {
    labels: ['Yes', 'No'],
    datasets: [
        {
            label: 'Been to Japan',
            data: [beenToJapanYes, beenToJapanNo],
            backgroundColor: ['#06b6d4', '#f43f5e'], // Colors for Yes and No
            borderColor: ['#0891b2', '#e11d48'],
            borderWidth: 1,
        },
    ],
};

// Options for the Pie Charts
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
    },
};



    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="flex items-center justify-between p-4 bg-white shadow">
                <h2 className="text-3xl font-semibold text-gray-800">Dashboard Overview</h2>
                <button 
                    onClick={() => navigate('/login')}
                    className="flex items-center px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                </button>
            </header>

            <main className="flex-1 p-8">
                <div className="flex justify-between mb-8">
                    <input
                        type="text"
                        placeholder="Search Users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>

                <div className="mb-8">
                    <button 
                        onClick={() => navigate('/form')}
                        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                        Add New User
                    </button>
                </div>

                {/* User List */}
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <table className="w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr className="text-left">
                                <th className="p-4">Name</th>
                                <th className="p-4">Date of Birth</th>
                                <th className="p-4">Sex</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {currentUsers.map(user => (
                                <tr key={user.userId}>
                                    <td className="p-4">{user.fullName}</td>
                                    <td className="p-4">{new Date(user.dateOfBirth).toLocaleDateString()}</td>
                                    <td className="p-4">{user.sex}</td>
                                    <td className="flex justify-center p-4 space-x-4">
                                        <button
                                            onClick={() => handleView(user)}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            <FaEye />
                                        </button>
                                        <button
                                            onClick={() => handleEdit(user)}
                                            className="text-green-500 hover:text-green-700"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user.userId)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 bg-gray-200 rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 bg-gray-200 rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                    >
                        Next
                    </button>
                </div>

                  {/* Graphical Statistical Data */}
                  <div className="p-6 mt-8 bg-white rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-800">User Statistics</h3>
                    <div className="flex justify-between space-x-8">
                        {/* Gender Distribution Pie Chart */}
                        <div style={{ width: '300px', height: '300px' }}>
                            <Pie data={genderChartData} options={chartOptions} />
                        </div>

                        {/* Marital Status Pie Chart */}
                        <div style={{ width: '300px', height: '300px' }}>
                            <Pie data={maritalStatusChartData} options={chartOptions} />
                        </div>

                        {/* Been to Japan Pie Chart */}
                        <div style={{ width: '300px', height: '300px' }}>
                            <Pie data={beenToJapanChartData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;