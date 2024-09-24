import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function DataFormDisplay({ data }) {
    const formRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => formRef.current,
    });

    return (
        <div>
            <div ref={formRef} className="max-w-4xl p-6 mx-auto bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Submitted Data</h2>
                
                {/* General Info Section */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold">General Information</h3>
                    <p><strong>Full Name:</strong> {data.fullName}</p>
                    <p><strong>Date of Birth:</strong> {data.dateOfBirth}</p>
                    <p><strong>Address:</strong> {data.address}</p>
                    <p><strong>Status of Residence:</strong> {data.statusOfResidence}</p>
                    <p><strong>Sex:</strong> {data.sex}</p>
                    <p><strong>Nationality:</strong> {data.nationality}</p>
                    <p><strong>Mobile:</strong> {data.mobile}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                </div>

                {/* Personal Info */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Personal Information</h3>
                    <p><strong>Marital Status:</strong> {data.maritalStatus}</p>
                    <p><strong>Children:</strong> {data.children}</p>
                    <p><strong>Blood Type:</strong> {data.bloodType}</p>
                    <p><strong>Comfortable Hand:</strong> {data.comfortableHand}</p>
                    <p><strong>Height:</strong> {data.height} cm</p>
                    <p><strong>Weight:</strong> {data.weight} kg</p>
                    <p><strong>Smoking:</strong> {data.smoke}</p>
                    <p><strong>Alcohol:</strong> {data.alcohol}</p>
                    <p><strong>Tattoo:</strong> {data.tattoo}</p>
                    <p><strong>Color Blindness:</strong> {data.colorBlindness}</p>
                    <p><strong>Been to Japan:</strong> {data.beenToJapan}</p>
                </div>

                {/* Education Section */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Education Background</h3>
                    {data.education.map((item, index) => (
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
                    {data.workHistory.map((item, index) => (
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
                    {data.qualifications.map((item, index) => (
                        <div key={index} className="mb-2">
                            <p><strong>Year:</strong> {item.year}</p>
                            <p><strong>Month:</strong> {item.month}</p>
                            <p><strong>Qualification:</strong> {item.qualification}</p>
                        </div>
                    ))}
                </div>

                {/* File Uploads */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Uploaded Documents</h3>
                    <p><strong>Personal Photo:</strong> {data.personalPhoto ? "Uploaded" : "Not Uploaded"}</p>
                    <p><strong>CV:</strong> {data.cv ? "Uploaded" : "Not Uploaded"}</p>
                    <p><strong>Interview:</strong> {data.interview ? "Uploaded" : "Not Uploaded"}</p>
                    <p><strong>PT Test:</strong> {data.ptTest ? "Uploaded" : "Not Uploaded"}</p>
                    <p><strong>PT Test Certificate:</strong> {data.ptTestCertificate ? "Uploaded" : "Not Uploaded"}</p>
                    <p><strong>Passport Copy:</strong> {data.passportCopy ? "Uploaded" : "Not Uploaded"}</p>
                    <p><strong>Driver License:</strong> {data.driverLicense ? "Uploaded" : "Not Uploaded"}</p>
                    <p><strong>Qualification - Education:</strong> {data.qualificationEducation ? "Uploaded" : "Not Uploaded"}</p>
                    <p><strong>Qualification - Working:</strong> {data.qualificationWorking ? "Uploaded" : "Not Uploaded"}</p>
                </div>
            </div>

            <button onClick={handlePrint} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">Print Data</button>
        </div>
    );
}

export default DataFormDisplay;
