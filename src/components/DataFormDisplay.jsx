import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useLocation } from 'react-router-dom';

function DataFormDisplay() {
    const location = useLocation();
    const { user } = location.state; // Access user data passed via navigate
    const formRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => formRef.current,
    });

    return (
        <div>
            <div ref={formRef} className="max-w-4xl p-6 mx-auto bg-gray-100 rounded-lg shadow-md">
                <h2 className="mb-4 text-2xl font-bold">Submitted Data</h2>
                
                {/* General Info Section */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold">General Information</h3>
                    <p><strong>Full Name:</strong> {user.fullName}</p>
                    <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Status of Residence:</strong> {user.statusOfResidence}</p>
                    <p><strong>Sex:</strong> {user.sex}</p>
                    <p><strong>Nationality:</strong> {user.nationality}</p>
                    <p><strong>Mobile:</strong> {user.mobile}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>

                {/* Personal Info Section */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Personal Information</h3>
                    <p><strong>Marital Status:</strong> {user.maritalStatus}</p>
                    <p><strong>Children:</strong> {user.children}</p>
                    <p><strong>Blood Type:</strong> {user.bloodType}</p>
                    <p><strong>Comfortable Hand:</strong> {user.comfortableHand}</p>
                    <p><strong>Height:</strong> {user.height} cm</p>
                    <p><strong>Weight:</strong> {user.weight} kg</p>
                    <p><strong>Smoking:</strong> {user.smoke}</p>
                    <p><strong>Alcohol:</strong> {user.alcohol}</p>
                    <p><strong>Tattoo:</strong> {user.tattoo}</p>
                    <p><strong>Color Blindness:</strong> {user.colorBlindness}</p>
                    <p><strong>Been to Japan:</strong> {user.beenToJapan}</p>
                </div>

                {/* Education Section */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Education Background</h3>
                    {user.education?.map((item, index) => (
                        <div key={index} className="mb-2">
                            <p><strong>Year:</strong> {item.year}</p>
                            <p><strong>Month:</strong> {item.month}</p>
                            <p><strong>Background:</strong> {item.background}</p>
                        </div>
                    ))}
                </div>

                {/* Work History Section */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Work History</h3>
                    {user.workHistory?.map((item, index) => (
                        <div key={index} className="mb-2">
                            <p><strong>Year:</strong> {item.year}</p>
                            <p><strong>Month:</strong> {item.month}</p>
                            <p><strong>Company Name:</strong> {item.companyName}</p>
                            <p><strong>Occupation:</strong> {item.occupation}</p>
                            <p><strong>Location:</strong> {item.location}</p>
                        </div>
                    ))}
                </div>

                {/* Qualifications Section */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Qualifications / Licenses / Certifications / Awards</h3>
                    {user.qualifications?.map((item, index) => (
                        <div key={index} className="mb-2">
                            <p><strong>Year:</strong> {item.year}</p>
                            <p><strong>Month:</strong> {item.month}</p>
                            <p><strong>Qualification:</strong> {item.qualification}</p>
                        </div>
                    ))}
                </div>

                <button onClick={handlePrint} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
                    Print this data
                </button>
            </div>
        </div>
    );
}

export default DataFormDisplay;
