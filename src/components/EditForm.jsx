import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditData = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state.user;

    // Set the initial state to the user data
    const [formData, setFormData] = useState({
        ...user,
        personalPhoto: null,
        cv: null,
        interview: null,
        ptTest: null,
        ptTestCertificate: null,
        passportCopy: null,
        driverLicense: null,
        qualificationEducation: null,
        qualificationWorking: null,
    });

    // Handle input changes for simple fields
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files[0], // Store the file in the form data
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    // Handle changes for nested fields like education, work history, and qualifications
    const handleNestedChange = (e, index, fieldName, section) => {
        const { name, value } = e.target;
        const updatedSection = [...formData[section]];
        updatedSection[index][name] = value;

        setFormData({
            ...formData,
            [section]: updatedSection,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Typically, you'd send this to your backend (e.g., using FormData if you're uploading files)
        console.log('Updated User Data:', formData);

        // Navigate back to the admin dashboard after updating
        navigate('/admin-dashboard'); // Adjust the route as needed
    };

    return (
        <div className="p-6 bg-white rounded shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Edit User Data</h2>
            <form onSubmit={handleSubmit}>
                {/* Basic Information */}
                <div className="mb-4">
                    <label className="block mb-1">Full Name:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Date of Birth:</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border"
                    />
                </div>
                {/* File Uploads */}
                <h3 className="mt-6 mb-2 text-lg font-bold">File Uploads</h3>
                <div className="mb-4">
                    <label className="block mb-1">Personal Photo:</label>
                    <input
                        type="file"
                        name="personalPhoto"
                        onChange={handleChange}
                        className="w-full p-2 border"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">CV:</label>
                    <input
                        type="file"
                        name="cv"
                        onChange={handleChange}
                        className="w-full p-2 border"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Interview:</label>
                    <input
                        type="file"
                        name="interview"
                        onChange={handleChange}
                        className="w-full p-2 border"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">PT Test:</label>
                    <input
                        type="file"
                        name="ptTest"
                        onChange={handleChange}
                        className="w-full p-2 border"
                    />
                </div>
                {/* Education Section */}
                <h3 className="mt-6 mb-2 text-lg font-bold">Education</h3>
                {formData.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                        <label className="block mb-1">Year:</label>
                        <input
                            type="text"
                            name="year"
                            value={edu.year}
                            onChange={(e) =>
                                handleNestedChange(e, index, 'year', 'education')
                            }
                            className="w-full p-2 border"
                        />
                        <label className="block mb-1">Month:</label>
                        <input
                            type="text"
                            name="month"
                            value={edu.month}
                            onChange={(e) =>
                                handleNestedChange(e, index, 'month', 'education')
                            }
                            className="w-full p-2 border"
                        />
                        <label className="block mb-1">Background:</label>
                        <input
                            type="text"
                            name="background"
                            value={edu.background}
                            onChange={(e) =>
                                handleNestedChange(e, index, 'background', 'education')
                            }
                            className="w-full p-2 border"
                        />
                    </div>
                ))}
                {/* Work History Section */}
                <h3 className="mt-6 mb-2 text-lg font-bold">Work History</h3>
                {formData.workHistory.map((work, index) => (
                    <div key={index} className="mb-4">
                        <label className="block mb-1">Company Name:</label>
                        <input
                            type="text"
                            name="companyName"
                            value={work.companyName}
                            onChange={(e) =>
                                handleNestedChange(e, index, 'companyName', 'workHistory')
                            }
                            className="w-full p-2 border"
                        />
                        <label className="block mb-1">Occupation:</label>
                        <input
                            type="text"
                            name="occupation"
                            value={work.occupation}
                            onChange={(e) =>
                                handleNestedChange(e, index, 'occupation', 'workHistory')
                            }
                            className="w-full p-2 border"
                        />
                        <label className="block mb-1">Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={work.location}
                            onChange={(e) =>
                                handleNestedChange(e, index, 'location', 'workHistory')
                            }
                            className="w-full p-2 border"
                        />
                    </div>
                ))}
                {/* Qualifications Section */}
                <h3 className="mt-6 mb-2 text-lg font-bold">Qualifications</h3>
                {formData.qualifications.map((qual, index) => (
                    <div key={index} className="mb-4">
                        <label className="block mb-1">Qualification:</label>
                        <input
                            type="text"
                            name="qualification"
                            value={qual.qualification}
                            onChange={(e) =>
                                handleNestedChange(e, index, 'qualification', 'qualifications')
                            }
                            className="w-full p-2 border"
                        />
                        <label className="block mb-1">Year:</label>
                        <input
                            type="text"
                            name="year"
                            value={qual.year}
                            onChange={(e) =>
                                handleNestedChange(e, index, 'year', 'qualifications')
                            }
                            className="w-full p-2 border"
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded"
                >
                    Update User
                </button>
            </form>
        </div>
    );
};

export default EditData;
