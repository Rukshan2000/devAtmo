import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaGraduationCap, FaBriefcase, FaTrophy, FaPrint } from 'react-icons/fa';

function DataFormDisplay() {
    const location = useLocation();
    const { user } = location.state;
    const formRef = useRef();
    const navigate = useNavigate();

    const handlePrint = useReactToPrint({
        content: () => formRef.current,
    });

    // Function to determine if content exceeds A4 page height
    const isContentExceedingA4Height = (contentHeight) => {
        const A4HeightInPx = 1122; // Approx. height of A4 in pixels (297mm at 96 DPI)
        return contentHeight > A4HeightInPx;
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <header className="flex items-center justify-between p-4 bg-white shadow">
                <h2 className="text-3xl font-semibold text-gray-800">User Data Display</h2>
                <button 
                    onClick={() => navigate('/admin')}
                    className="flex items-center px-4 py-2 text-white transition duration-200 ease-in-out bg-gray-600 rounded-md hover:bg-gray-700"
                >
                    Back to Dashboard
                </button>
            </header>

            <main className="flex-1 p-8">
                <div 
                    ref={formRef} 
                    className="max-w-5xl p-6 mx-auto bg-white rounded-lg shadow-lg print:mx-5 print:my-5"
                >
                    <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Submitted Data</h2>

                    {/* Create an array to hold components for A4 pages */}
                    {(() => {
                        const pages = [];
                        let currentContent = [];
                        let totalHeight = 0;

                        const sections = [
                            { title: "General Information", icon: <FaUser />, content: (
                                <div>
                                    <p className="mb-2"><strong>Full Name:</strong> {user.fullName}</p>
                                    <p className="mb-2"><strong>Date of Birth:</strong> {new Date(user.dateOfBirth).toLocaleDateString()}</p>
                                    <p className="mb-2"><strong>Address:</strong> {user.address}</p>
                                    <p className="mb-2"><strong>Status of Residence:</strong> {user.statusOfResidence}</p>
                                    <p className="mb-2"><strong>Sex:</strong> {user.sex}</p>
                                    <p className="mb-2"><strong>Nationality:</strong> {user.nationality}</p>
                                    <p className="mb-2"><strong>Mobile:</strong> {user.mobile}</p>
                                    <p className="mb-2"><strong>Email:</strong> {user.email}</p>
                                </div>
                            )},
                            { title: "Personal Information", icon: <FaUser />, content: (
                                <div>
                                    <p className="mb-2"><strong>Marital Status:</strong> {user.maritalStatus}</p>
                                    <p className="mb-2"><strong>Children:</strong> {user.children}</p>
                                    <p className="mb-2"><strong>Blood Type:</strong> {user.bloodType}</p>
                                    <p className="mb-2"><strong>Comfortable Hand:</strong> {user.comfortableHand}</p>
                                    <p className="mb-2"><strong>Height:</strong> {user.height} cm</p>
                                    <p className="mb-2"><strong>Weight:</strong> {user.weight} kg</p>
                                    <p className="mb-2"><strong>Smoking:</strong> {user.smoke}</p>
                                    <p className="mb-2"><strong>Alcohol:</strong> {user.alcohol}</p>
                                    <p className="mb-2"><strong>Tattoo:</strong> {user.tattoo}</p>
                                    <p className="mb-2"><strong>Color Blindness:</strong> {user.colorBlindness}</p>
                                    <p className="mb-2"><strong>Been to Japan:</strong> {user.beenToJapan}</p>
                                </div>
                            )},
                            { title: "Education Background", icon: <FaGraduationCap />, content: (
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {user.education?.map((item, index) => (
                                        <div key={index} className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg">
                                            <p className="mb-2"><strong>Year:</strong> {item.year}</p>
                                            <p className="mb-2"><strong>Month:</strong> {item.month}</p>
                                            <p className="mb-2"><strong>Background:</strong> {item.background}</p>
                                        </div>
                                    ))}
                                </div>
                            )},
                            { title: "Work History", icon: <FaBriefcase />, content: (
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {user.workHistory?.map((item, index) => (
                                        <div key={index} className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg">
                                            <p className="mb-2"><strong>Year:</strong> {item.year}</p>
                                            <p className="mb-2"><strong>Month:</strong> {item.month}</p>
                                            <p className="mb-2"><strong>Company Name:</strong> {item.companyName}</p>
                                            <p className="mb-2"><strong>Occupation:</strong> {item.occupation}</p>
                                            <p className="mb-2"><strong>Location:</strong> {item.location}</p>
                                        </div>
                                    ))}
                                </div>
                            )},
                            { title: "Qualifications / Licenses / Certifications / Awards", icon: <FaTrophy />, content: (
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {user.qualifications?.map((item, index) => (
                                        <div key={index} className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg">
                                            <p className="mb-2"><strong>Year:</strong> {item.year}</p>
                                            <p className="mb-2"><strong>Month:</strong> {item.month}</p>
                                            <p className="mb-2"><strong>Qualification:</strong> {item.qualification}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        ];

                        sections.forEach((section) => {
                            const sectionHeight = 200; // Approximate height for each section card
                            totalHeight += sectionHeight;

                            if (isContentExceedingA4Height(totalHeight)) {
                                // Start a new page
                                pages.push(
                                    <div className="page" key={pages.length}>
                                        <h3 className="flex items-center mb-4 text-lg font-bold text-gray-700">
                                            {section.icon} {section.title}
                                        </h3>
                                        <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg">
                                            {section.content}
                                        </div>
                                    </div>
                                );
                                totalHeight = sectionHeight; // Reset height for new page
                            } else {
                                // Add to current page
                                currentContent.push(
                                    <div className="mb-6" key={section.title}>
                                        <h3 className="flex items-center mb-4 text-lg font-bold text-gray-700">
                                            {section.icon} {section.title}
                                        </h3>
                                        <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg">
                                            {section.content}
                                        </div>
                                    </div>
                                );
                            }
                        });

                        // Add remaining content if it fits
                        if (currentContent.length > 0) {
                            pages.push(
                                <div className="page" key={pages.length}>
                                    {currentContent}
                                </div>
                            );
                        }

                        return pages;
                    })()}

                    <button 
                        onClick={handlePrint} 
                        className="flex items-center justify-center px-4 py-2 mt-4 text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-600 print:hidden" // Hide on print
                    >
                        <FaPrint className="mr-2" /> Print this data
                    </button>
                </div>
            </main>
        </div>
    );
}

export default DataFormDisplay;
