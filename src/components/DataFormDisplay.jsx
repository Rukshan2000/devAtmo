import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaGraduationCap, FaBriefcase, FaTrophy, FaPrint, FaPumpMedical, FaFile } from 'react-icons/fa';

function DataFormDisplay() {
    const location = useLocation();
    const { user } = location.state;

    const formRef = useRef();
    const navigate = useNavigate();
    const UPLOADED_URL = process.env.REACT_APP_FILE_UPLOAD_URL;
    console.log("upload url", UPLOADED_URL);

    const handlePrint = useReactToPrint({
        content: () => formRef.current,
    });

    // Function to determine if content exceeds A4 page height
    const isContentExceedingA4Height = (contentHeight) => {
        const A4HeightInPx = 1122; // Approx. height of A4 in pixels (297mm at 96 DPI)
        return contentHeight > A4HeightInPx;
    };

    // Function to create a full link for viewing files
    const getViewLink = (filePath) => {
        return `${UPLOADED_URL}/${filePath.replace(/\\/g, '/')}`;  // Replace backslashes with forward slashes
    };

    // Function to trigger a download for a file
    const handleDownload = (filePath) => {
        const link = document.createElement('a');
        link.href = getViewLink(filePath);
        link.download = true;  // Optional: Trigger download
        link.click();
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <header className="flex items-center justify-between p-4 bg-white shadow">
                <h2 className="text-3xl font-semibold text-gray-800">User Data Display</h2>
                <button
                    onClick={() => navigate('/dashboard')}
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

                            {
                                title: "General Information / 般情報", icon: <FaUser />, content: (
                                    <div>
                                        <div className='grid grid-cols-2'>
                                            <p className="mb-2"><strong>Full Name:</strong> {user.fullName}</p>
                                            <p className="mb-2"><strong>名前:</strong> {user.fullNameJapan}</p>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <p className="mb-2"><strong>Date of Birth:</strong> {new Date(user.dateOfBirth).toLocaleDateString()}</p>
                                            <p className="mb-2"><strong>携帯:</strong> {new Date(user.dateOfBirth).toLocaleDateString()}</p>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <p className="mb-2"><strong>Address:</strong> {user.address}</p>
                                            <p className="mb-2"><strong>住所:</strong> {user.addressJapan}</p>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <p className="mb-2"><strong>Status of Residence:</strong> {user.statusOfResidence}</p>
                                            <p className="mb-2"><strong>在留資格:</strong> {user.statusOfResidenceJapan}</p>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <p className="mb-2"><strong>Sex:</strong> {user.sex}</p>
                                            <p className="mb-2"><strong>性別:</strong> {user.sex === "Male" ? "男" : user.sex === "Female" ? "女性" : "他の"}</p>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <p className="mb-2"><strong>Nationality:</strong> {user.nationality}</p>
                                            <p className="mb-2"><strong>国籍:</strong> {user.nationalityJapan}</p>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <p className="mb-2"><strong>Mobile:</strong> {user.mobile}</p>
                                            <p className="mb-2"><strong>携帯:</strong> {user.mobile}</p>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <p className="mb-2"><strong>Email:</strong> {user.email}</p>
                                            <p className="mb-2"><strong>電子メール:</strong> {user.email}</p>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                title: "Personal Information / 個人情報", icon: <FaUser />, content: (
                                    <div>
                                        <div className="grid grid-cols-2">
                                            <p className="mb-2"><strong>Marital Status:</strong> {user.maritalStatus}</p>
                                            <p className="mb-2"><strong>結婚する / 歌う:</strong> {user.maritalStatus === "Married" ? "既婚" : "シングル"}</p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="mb-2"><strong>Children:</strong> {user.children}</p>
                                            <p className="mb-2"><strong>子供は何人:</strong> {user.children}</p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="mb-2"><strong>Blood Type:</strong> {user.bloodType}</p>
                                            <p className="mb-2"><strong>血液型:</strong> {user.bloodType}</p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="mb-2"><strong>Comfortable Hand:</strong> {user.comfortableHand}</p>
                                            <p className="mb-2"><strong>快適な手:</strong> {user.comfortableHand === "Left" ? "左" : user.comfortableHand === "Right" ? "右" : "両方"}</p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="mb-2"><strong>Height:</strong> {user.height} cm</p>
                                            <p className="mb-2"><strong>身長:</strong> {user.height} cm</p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="mb-2"><strong>Weight:</strong> {user.weight} kg</p>
                                            <p className="mb-2"><strong>体重:</strong> {user.weight} kg</p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="mb-2"><strong>Smoking:</strong> {user.smoke === "Yes" ? "Yes" : "No"}</p>
                                            <p className="mb-2"><strong>タバコは吸​​いますか？:</strong> {user.smoke === "Yes" ? "はい" : "いいえ"}</p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="mb-2"><strong>Alcohol:</strong> {user.alcohol === "Yes" ? "Yes" : "No"}</p>
                                            <p className="mb-2"><strong>お酒を飲みますか？:</strong> {user.alcohol === "Yes" ? "はい" : "いいえ"}</p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="mb-2"><strong>Tattoo:</strong> {user.tattoo === "Yes" ? "Yes" : "No"}</p>
                                            <p className="mb-2"><strong>タトゥーはありますか？:</strong> {user.tattoo === "Yes" ? "はい" : "いいえ"}</p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="mb-2"><strong>Color Blindness:</strong> {user.colorBlindness === "Yes" ? "Yes" : "No"}</p>
                                            <p className="mb-2"><strong>色覚異常はありますか？:</strong> {user.colorBlindness === "Yes" ? "はい" : "いいえ"}</p>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <p className="mb-2"><strong>Been to Japan:</strong> {user.beenToJapan === "Yes" ? "Yes" : "No"}</p>
                                            <p className="mb-2"><strong>以前に日本に行ったことがありますか？:</strong> {user.beenToJapan === "Yes" ? "はい" : "いいえ"}</p>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                title: "Education Background / 学歴", icon: <FaGraduationCap />, content: (
                                    <div className="gap-6 ">
                                        {user.education?.map((item, index) => (
                                            <div key={index} className="flex gap-4 mb-3">
                                                {/* English Card */}
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>Year:</strong> {item.year}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>Month:</strong> {item.month}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>Background:</strong> {item.background}
                                                    </p>
                                                </div>

                                                {/* Japanese Card */}
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>年:</strong> {item.yearJapan} {/* Japanese label for 'Year' */}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>月:</strong> {item.monthJapan} {/* Japanese label for 'Month' */}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>教育  / 職歴:</strong> {item.backgroundJapan} {/* Japanese label for 'Background' */}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>


                                )
                            },
                            {
                                title: "Work History / 職歴",
                                icon: <FaBriefcase />,
                                content: (
                                    <div className="gap-6">
                                        {user.workHistory?.map((item, index) => (
                                            <div key={index} className="flex gap-4 mb-3">
                                                {/* English Card */}
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>Year:</strong> {item.year}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>Month:</strong> {item.month}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>Company Name:</strong> {item.companyName}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>Occupation:</strong> {item.occupation}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>Location:</strong> {item.location}
                                                    </p>
                                                </div>

                                                {/* Japanese Card */}
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>年:</strong> {item.yearJapan} {/* Japanese label for 'Year' */}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>月:</strong> {item.monthJapan} {/* Japanese label for 'Month' */}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>会社名:</strong> {item.companyNameJapan} {/* Japanese label for 'Company Name' */}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>職業:</strong> {item.occupationJapan} {/* Japanese label for 'Occupation' */}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>所在地:</strong> {item.locationJapan} {/* Japanese label for 'Location' */}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )

                            },

                            {
                                title: "Qualifications (資格) Licenses (ライセンス) Certifications (認証) Awards",
                                icon: <FaTrophy />,
                                content: (
                                    <div className="gap-6">
                                        {user.qualifications?.map((item, index) => (
                                            <div key={index} className="flex gap-4 mb-3">
                                                {/* English Card */}
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>Year:</strong> {item.year}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>Month:</strong> {item.month}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>Qualification:</strong> {item.qualification}
                                                    </p>
                                                </div>

                                                {/* Japanese Card */}
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>年:</strong> {item.yearJapan} {/* Japanese label for 'Year' */}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>月:</strong> {item.monthJapan} {/* Japanese label for 'Month' */}
                                                    </p>
                                                    <p className="mb-2">
                                                        <strong>資格:</strong> {item.qualificationJapan} {/* Japanese label for 'Qualification' */}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )

                            },
                            {
                                title: "File Uploads",
                                icon: <FaFile />,
                                content: (
                                    <div className="gap-6 ">
                                        <div className="grid grid-cols-3 gap-4 mb-3">

                                            {user && user.personalPhoto !== "null" && (
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>Personal Photo<br></br> 個人写真</strong>
                                                    </p>
                                                    <div className="mb-2 flex">
                                                        <button
                                                            onClick={() => window.open(getViewLink(user.personalPhoto), '_blank')}
                                                            className="mr-2 px-4 py-2 bg-blue-600 text-white rounded"
                                                        >
                                                            View
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {user && user.cv !== "null" && (
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>CV<br></br> 履歴書</strong>
                                                    </p>
                                                    <div className="mb-2 flex">
                                                        <button
                                                            onClick={() => window.open(getViewLink(user.cv), '_blank')}
                                                            className="mr-2 px-4 py-2 bg-blue-600 text-white rounded"
                                                        >
                                                            View
                                                        </button>

                                                        <button
                                                            onClick={() => handleDownload(user.cv)}
                                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                                        >
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {user && user.interview !== "null" && (
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>Interview<br></br> インタビュー</strong>
                                                    </p>
                                                    <div className="mb-2 flex">
                                                        <button
                                                            onClick={() => handleDownload(user.interview)}
                                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                                        >
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {user && user.ptTest !== "null" && (
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>PT Test<br></br> PTテスト</strong>
                                                    </p>
                                                    <div className="mb-2 flex">
                                                        <button
                                                            onClick={() => handleDownload(user.ptTest)}
                                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                                        >
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {user && user.ptTestCertificate !== "null" && (
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>PT Test Certificate<br></br> Ptテスト証明書</strong>
                                                    </p>
                                                    <div className="mb-2 flex">
                                                        <button
                                                            onClick={() => handleDownload(user.ptTestCertificate)}
                                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                                        >
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {user && user.passportCopy !== "null" && (
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>Passport Copy<br></br> パスポートコピー</strong>
                                                    </p>
                                                    <div className="mb-2 flex">
                                                        <button
                                                            onClick={() => handleDownload(user.passportCopy)}
                                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                                        >
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {user && user.driverLicense !== "null" && (
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>Driver License<br></br> 運転免許証</strong>
                                                    </p>
                                                    <div className="mb-2 flex">
                                                        <button
                                                            onClick={() => handleDownload(user.driverLicense)}
                                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                                        >
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {user && user.qualificationEducation !== "null" && (
                                                <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>Qualification - Education</strong>
                                                    </p>
                                                    <div className="mb-2 flex">
                                                        <button
                                                            onClick={() => handleDownload(user.qualificationEducation)}
                                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                                        >
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {user && user.qualificationWorking !== "null" && user.qualificationWorking.map((file, index) => (
                                                <div key={index} className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow hover:shadow-lg w-full">
                                                    <p className="mb-2">
                                                        <strong>Qualification - Working {index + 1}<br></br> 働く資格</strong>
                                                    </p>
                                                    <div className="mb-2 flex">
                                                        <button
                                                            onClick={() => handleDownload(file)} // Pass the file directly from the map
                                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                                        >
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}




                                        </div>

                                    </div>
                                )
                            },



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
