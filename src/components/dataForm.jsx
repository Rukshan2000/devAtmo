import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DataForm({ onSubmit }) {
    const location = useLocation();
    const { user } = location.state ? location.state : {};
    console.log("user", user);


    const [formState, setFormState] = useState({

        fullName: user ? user.fullName : '',
        fullNameJapan: user ? user.fullNameJapan : '',
        dateOfBirth: user ? user.dateOfBirth : '',
        address: user ? user.address : '',
        addressJapan: user ? user.addressJapan : '',
        statusOfResidence: user ? user.statusOfResidence : '',
        statusOfResidenceJapan: user ? user.statusOfResidenceJapan : '',
        sex: user ? user.sex : '',
        nationality: user ? user.nationality : '',
        nationalityJapan: user ? user.nationalityJapan : '',
        mobile: user ? user.mobile : '',
        email: user ? user.email : '',
        maritalStatus: user ? user.maritalStatus : '',
        children: user ? user.children : '',
        bloodType: user ? user.bloodType : '',
        comfortableHand: user ? user.comfortableHand : '',
        height: user ? user.height : '',
        weight: user ? user.weight : '',
        smoke: user ? user.smoke : '',
        alcohol: user ? user.alcohol : '',
        tattoo: user ? user.tattoo : '',
        colorBlindness: user ? user.colorBlindness : '',
        beenToJapan: user ? user.beenToJapan : '',

        education: user ? user.education : [{ year: '', month: '', background: '', yearJapan: '', monthJapan: '', backgroundJapan: '' }],
        workHistory: user ? user.workHistory : [{ year: '', month: '', companyName: '', occupation: '', location: '', yearJapan: '', monthJapan: '', companyNameJapan: '', occupationJapan: '', locationJapan: '' }],
        qualifications: user ? user.qualifications : [{ year: '', month: '', qualification: '', yearJapan: '', monthJapan: '', qualificationJapan: '' }],

        personalPhoto: null,
        cv: null,
        interview: null,
        ptTest: null,
        ptTestCertificate: null,
        passportCopy: null,
        driverLicense: null,
        qualificationEducation: null,
        qualificationWorking: null

    });
    // const [files, setFiles] = useState({
    //     personalPhoto: null,
    //     cv: null,
    //     interview: null,
    //     ptTest: null,
    //     ptTestCertificate: null,
    //     passportCopy: null,
    //     driverLicense: null,
    //     qualificationEducation: null,
    //     qualificationWorking: null
    //   });


    //     const [education, setEducation] = useState(user ? user.education : [{ year: '', month: '', background: '', yearJapan: '', monthJapan: '', backgroundJapan: '' }]);
    //     const [workHistory, setWorkhistory] = useState(user ? user.workHistory : [{ year: '', month: '', companyName: '', occupation: '', location: '', yearJapan: '', monthJapan: '', companyNameJapan: '', occupationJapan: '', locationJapan: '' }]);
    //     const [qualifications, setQualifications] = useState(user ? user.qualifications : [{ year: '', month: '', qualification: '', yearJapan: '', monthJapan: '', qualificationJapan: '' }]);

    //     console.log("formState", formState);


    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSave = (e) => {
        e.preventDefault();

        const formData = new FormData();
        // Append single fields
        formData.append('fullName', formState.fullName);
        formData.append('fullNameJapan', formState.fullNameJapan);
        formData.append('dateOfBirth', formState.dateOfBirth);
        formData.append('address', formState.address);
        formData.append('addressJapan', formState.addressJapan);
        formData.append('statusOfResidence', formState.statusOfResidence);
        formData.append('statusOfResidenceJapan', formState.statusOfResidenceJapan);
        formData.append('sex', formState.sex);
        formData.append('nationality', formState.nationality);
        formData.append('nationalityJapan', formState.nationalityJapan);
        formData.append('mobile', formState.mobile);
        formData.append('email', formState.email);
        formData.append('maritalStatus', formState.maritalStatus);
        formData.append('children', formState.children);
        formData.append('bloodType', formState.bloodType);
        formData.append('comfortableHand', formState.comfortableHand);
        formData.append('height', formState.height);
        formData.append('weight', formState.weight);
        formData.append('smoke', formState.smoke);
        formData.append('alcohol', formState.alcohol);
        formData.append('tattoo', formState.tattoo);
        formData.append('colorBlindness', formState.colorBlindness);
        formData.append('beenToJapan', formState.beenToJapan);

        // Append arrays (education, workHistory, qualifications)
        formState.education.forEach((edu, index) => {
            formData.append(`education[${index}][year]`, edu.year);
            formData.append(`education[${index}][month]`, edu.month);
            formData.append(`education[${index}][background]`, edu.background);
            formData.append(`education[${index}][yearJapan]`, edu.yearJapan);
            formData.append(`education[${index}][monthJapan]`, edu.monthJapan);
            formData.append(`education[${index}][backgroundJapan]`, edu.backgroundJapan);
        });

        formState.workHistory.forEach((work, index) => {
            formData.append(`workHistory[${index}][year]`, work.year);
            formData.append(`workHistory[${index}][month]`, work.month);
            formData.append(`workHistory[${index}][companyName]`, work.companyName);
            formData.append(`workHistory[${index}][occupation]`, work.occupation);
            formData.append(`workHistory[${index}][location]`, work.location);
            formData.append(`workHistory[${index}][yearJapan]`, work.yearJapan);
            formData.append(`workHistory[${index}][monthJapan]`, work.monthJapan);
            formData.append(`workHistory[${index}][companyNameJapan]`, work.companyNameJapan);
            formData.append(`workHistory[${index}][occupationJapan]`, work.occupationJapan);
            formData.append(`workHistory[${index}][locationJapan]`, work.locationJapan);
        });

        formState.qualifications.forEach((qual, index) => {
            formData.append(`qualifications[${index}][year]`, qual.year);
            formData.append(`qualifications[${index}][month]`, qual.month);
            formData.append(`qualifications[${index}][qualification]`, qual.qualification);
            formData.append(`qualifications[${index}][yearJapan]`, qual.yearJapan);
            formData.append(`qualifications[${index}][monthJapan]`, qual.monthJapan);
            formData.append(`qualifications[${index}][qualificationJapan]`, qual.qualificationJapan);
        });

        // Append file fields
        if (formState.personalPhoto) {
            formData.append('personalPhoto', formState.personalPhoto);
        }
        if (formState.cv) {
            formData.append('cv', formState.cv);
        }
        if (formState.interview) {
            formData.append('interview', formState.interview);
        }
        if (formState.ptTest) {
            formData.append('ptTest', formState.ptTest);
        }
        if (formState.ptTestCertificate) {
            formData.append('ptTestCertificate', formState.ptTestCertificate);
        }
        if (formState.passportCopy) {
            formData.append('passportCopy', formState.passportCopy);
        }
        if (formState.driverLicense) {
            formData.append('driverLicense', formState.driverLicense);
        }
        if (formState.qualificationEducation) {
            formData.append('qualificationEducation', formState.qualificationEducation);
        }
        if (formState.qualificationWorking) {
            formData.append('qualificationWorking', formState.qualificationWorking);
        }


        console.log("formState", formState);
        console.log("formData", formData);
        axios.post('http://localhost:8081/api/applicant/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        // window.location.reload();
    };



    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormState({ ...formState, [name]: files[0] }); // Save the first file
    };

    const handleDynamicChange = (index, field, e) => {
        const { name, value } = e.target;
        const updatedList = [...formState[field]];
        updatedList[index] = { ...updatedList[index], [name]: value };
        setFormState({ ...formState, [field]: updatedList });
    };

    const addRow = (field) => {
        const newRow = field === 'education' ? { year: '', month: '', background: '' }
            : field === 'workHistory' ? { year: '', month: '', companyName: '', occupation: '', location: '' }
                : { year: '', month: '', qualification: '' };

        setFormState({ ...formState, [field]: [...formState[field], newRow] });
    };

    const removeRow = (index, field) => {
        const updatedList = [...formState[field]];
        updatedList.splice(index, 1);
        setFormState({ ...formState, [field]: updatedList });
    };

    const handleUpdate = () => {
        const formData = new FormData();
        // Append single fields
        formData.append('fullName', formState.fullName);
        formData.append('fullNameJapan', formState.fullNameJapan);
        formData.append('dateOfBirth', formState.dateOfBirth);
        formData.append('address', formState.address);
        formData.append('addressJapan', formState.addressJapan);
        formData.append('statusOfResidence', formState.statusOfResidence);
        formData.append('statusOfResidenceJapan', formState.statusOfResidenceJapan);
        formData.append('sex', formState.sex);
        formData.append('nationality', formState.nationality);
        formData.append('nationalityJapan', formState.nationalityJapan);
        formData.append('mobile', formState.mobile);
        formData.append('email', formState.email);
        formData.append('maritalStatus', formState.maritalStatus);
        formData.append('children', formState.children);
        formData.append('bloodType', formState.bloodType);
        formData.append('comfortableHand', formState.comfortableHand);
        formData.append('height', formState.height);
        formData.append('weight', formState.weight);
        formData.append('smoke', formState.smoke);
        formData.append('alcohol', formState.alcohol);
        formData.append('tattoo', formState.tattoo);
        formData.append('colorBlindness', formState.colorBlindness);
        formData.append('beenToJapan', formState.beenToJapan);

        // Append arrays (education, workHistory, qualifications)
        formState.education.forEach((edu, index) => {
            formData.append(`education[${index}][year]`, edu.year);
            formData.append(`education[${index}][month]`, edu.month);
            formData.append(`education[${index}][background]`, edu.background);
            formData.append(`education[${index}][yearJapan]`, edu.yearJapan);
            formData.append(`education[${index}][monthJapan]`, edu.monthJapan);
            formData.append(`education[${index}][backgroundJapan]`, edu.backgroundJapan);
        });

        formState.workHistory.forEach((work, index) => {
            formData.append(`workHistory[${index}][year]`, work.year);
            formData.append(`workHistory[${index}][month]`, work.month);
            formData.append(`workHistory[${index}][companyName]`, work.companyName);
            formData.append(`workHistory[${index}][occupation]`, work.occupation);
            formData.append(`workHistory[${index}][location]`, work.location);
            formData.append(`workHistory[${index}][yearJapan]`, work.yearJapan);
            formData.append(`workHistory[${index}][monthJapan]`, work.monthJapan);
            formData.append(`workHistory[${index}][companyNameJapan]`, work.companyNameJapan);
            formData.append(`workHistory[${index}][occupationJapan]`, work.occupationJapan);
            formData.append(`workHistory[${index}][locationJapan]`, work.locationJapan);
        });

        formState.qualifications.forEach((qual, index) => {
            formData.append(`qualifications[${index}][year]`, qual.year);
            formData.append(`qualifications[${index}][month]`, qual.month);
            formData.append(`qualifications[${index}][qualification]`, qual.qualification);
            formData.append(`qualifications[${index}][yearJapan]`, qual.yearJapan);
            formData.append(`qualifications[${index}][monthJapan]`, qual.monthJapan);
            formData.append(`qualifications[${index}][qualificationJapan]`, qual.qualificationJapan);
        });

        // Append file fields
        if (formState.personalPhoto) {
            formData.append('personalPhoto', formState.personalPhoto);
        }
        if (formState.cv) {
            formData.append('cv', formState.cv);
        }
        if (formState.interview) {
            formData.append('interview', formState.interview);
        }
        if (formState.ptTest) {
            formData.append('ptTest', formState.ptTest);
        }
        if (formState.ptTestCertificate) {
            formData.append('ptTestCertificate', formState.ptTestCertificate);
        }
        if (formState.passportCopy) {
            formData.append('passportCopy', formState.passportCopy);
        }
        if (formState.driverLicense) {
            formData.append('driverLicense', formState.driverLicense);
        }
        if (formState.qualificationEducation) {
            formData.append('qualificationEducation', formState.qualificationEducation);
        }
        if (formState.qualificationWorking) {
            formData.append('qualificationWorking', formState.qualificationWorking);
        }


        axios.put(`http://localhost:8081/api/applicant/${user.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload();
    };

    return (
        <form className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className='flex justify-between mb-5'>
                <h2 className="mb-6 text-3xl font-bold text-gray-800">General Info / 一般情報</h2>
                <button
                        onClick={() => navigate('/dashboard')}
                        className="flex items-center px-4 py-2 text-white transition duration-200 ease-in-out bg-gray-600 rounded-md hover:bg-gray-700"
                    >
                        Back to Dashboard
                    </button>
            </div>
            {/* General Info 試料*/}
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                <div>
                    <label className="block mb-1 font-semibold">Full Name</label>
                    <input type="text" name="fullName" value={formState.fullName} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">名前 </label>
                    <input type="text" name="fullNameJapan" value={formState.fullNameJapan} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Date of Birth</label>
                    <input type="date" name="dateOfBirth" value={formState.dateOfBirth} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">携帯</label>
                    <input type="date" name="dateOfBirth" value={formState.dateOfBirth} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Address</label>
                    <input type="text" name="address" value={formState.address} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">住所</label>
                    <input type="text" name="addressJapan" value={formState.addressJapan} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Status of Residence</label>
                    <input type="text" name="statusOfResidence" value={formState.statusOfResidence} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">在留資格</label>
                    <input type="text" name="statusOfResidenceJapan" value={formState.statusOfResidenceJapan} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Sex</label>
                    <select name="sex" value={formState.sex} onChange={handleChange} className="w-full p-3 border rounded-md">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 font-semibold">性別 </label>
                    <select name="sex" value={formState.sex} onChange={handleChange} className="w-full p-3 border rounded-md">
                        <option value="">性別を選択</option>
                        <option value="Male">男</option>
                        <option value="Female">女性</option>
                        <option value="Other"> 他の</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Nationality</label>
                    <input type="text" name="nationality" value={formState.nationality} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">国籍</label>
                    <input type="text" name="nationalityJapan" value={formState.nationalityJapan} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Mobile</label>
                    <input type="text" name="mobile" value={formState.mobile} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">携帯</label>
                    <input type="text" name="mobile" value={formState.mobile} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Email</label>
                    <input type="email" name="email" value={formState.email} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">電子メール</label>
                    <input type="email" name="email" value={formState.email} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-gray-800">Personel Info / 個人情報</h2>


            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">

                <div className="mb-4">
                    <label className="block mb-2 font-bold">Married / Single</label>
                    <select name="maritalStatus" value={formState.maritalStatus} onChange={handleChange} className="w-full p-2 border">
                        <option value="">Select Status</option>
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">結婚する / 歌う</label>
                    <select name="maritalStatus" value={formState.maritalStatus} onChange={handleChange} className="w-full p-2 border">
                        <option value="">ステータスを選択</option>
                        <option value="Married">既婚</option>
                        <option value="Single">シングル</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">How many children</label>
                    <input type="number" name="children" value={formState.children} onChange={handleChange} className="w-full p-2 border" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">子供は何人</label>
                    <input type="number" name="children" value={formState.children} onChange={handleChange} className="w-full p-2 border" />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">Blood Type</label>
                    <select
                        name="bloodType"
                        value={formState.bloodType}
                        onChange={handleChange}
                        className="w-full p-2 border"
                    >
                        <option value="">Select Blood Type</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">血液型</label>
                    <select
                        name="bloodType"
                        value={formState.bloodType}
                        onChange={handleChange}
                        className="w-full p-2 border"
                    >
                        <option value="">血液型を選択</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>


                <div className="mb-4">
                    <label className="block mb-2 font-bold">Comfortable Hand</label>
                    <select name="comfortableHand" value={formState.comfortableHand} onChange={handleChange} className="w-full p-2 border">
                        <option value="">Select Hand</option>
                        <option value="Left">Left</option>
                        <option value="Right">Right</option>
                        <option value="Both">Both</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">快適な手</label>
                    <select name="comfortableHand" value={formState.comfortableHand} onChange={handleChange} className="w-full p-2 border">
                        <option value="">手を選択</option>
                        <option value="Left">左</option>
                        <option value="Right">右</option>
                        <option value="Both">両方</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">Height</label>
                    <input type="number" name="height" value={formState.height} onChange={handleChange} className="w-full p-2 border" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">身長</label>
                    <input type="number" name="height" value={formState.height} onChange={handleChange} className="w-full p-2 border" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Weight</label>
                    <input type="number" name="weight" value={formState.weight} onChange={handleChange} className="w-full p-2 border" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">重さ</label>
                    <input type="number" name="weight" value={formState.weight} onChange={handleChange} className="w-full p-2 border" />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">Do you Smoke?</label>
                    <select name="smoke" value={formState.smoke} onChange={handleChange} className="w-full p-2 border">
                        <option value="">Select Option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">タバコは吸​​いますか？</label>
                    <select name="smoke" value={formState.smoke} onChange={handleChange} className="w-full p-2 border">
                        <option value="">オプションを選択</option>
                        <option value="Yes">はい</option>
                        <option value="No">いいえ</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">Do you drink alcohol?</label>
                    <select name="alcohol" value={formState.alcohol} onChange={handleChange} className="w-full p-2 border">
                        <option value="">Select Option</option>
                        <option value="Yes">Yes</option>
                        <option value="Nos">No</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">お酒を飲みますか？</label>
                    <select name="alcohol" value={formState.alcohol} onChange={handleChange} className="w-full p-2 border">
                        <option value="">オプションを選択</option>
                        <option value="Yes">はい</option>
                        <option value="No">いいえ</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">Do you have a tattoo?</label>
                    <select name="tattoo" value={formState.tattoo} onChange={handleChange} className="w-full p-2 border">
                        <option value="">Select Option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">タトゥーはありますか？</label>
                    <select name="tattoo" value={formState.tattoo} onChange={handleChange} className="w-full p-2 border">
                        <option value="">オプションを選択</option>
                        <option value="Yes">はい</option>
                        <option value="No">いいえ</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">Do you have color blindness?</label>
                    <select name="colorBlindness" value={formState.colorBlindness} onChange={handleChange} className="w-full p-2 border">
                        <option value="">Select Option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">色覚異常はありますか?</label>
                    <select name="colorBlindness" value={formState.colorBlindness} onChange={handleChange} className="w-full p-2 border">
                        <option value="">オプションを選択</option>
                        <option value="Yes">はい</option>
                        <option value="No">いいえ</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">Have you been to Japan before?</label>
                    <select name="beenToJapan" value={formState.beenToJapan} onChange={handleChange} className="w-full p-2 border">
                        <option value="">Select Option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">以前に日本に行ったことがありますか?</label>
                    <select name="beenToJapan" value={formState.beenToJapan} onChange={handleChange} className="w-full p-2 border">
                        <option value="">オプションを選択</option>
                        <option value="Yes">はい</option>
                        <option value="No">いいえ</option>
                    </select>
                </div>
            </div>



            {/* Section Headers */}

            <h3 className="mt-6 mb-2 text-2xl font-bold text-gray-700">Education Background / 学歴</h3>
            {formState.education.map((item, index) => (
                <div key={index} className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3 lg:grid-cols-3">
                    <input type="text" name="year" placeholder="Year" value={item.year} onChange={(e) => handleDynamicChange(index, 'education', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="month" placeholder="Month" value={item.month} onChange={(e) => handleDynamicChange(index, 'education', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="background" placeholder="Education/Work History" value={item.background} onChange={(e) => handleDynamicChange(index, 'education', e)} className="flex-1 p-3 border rounded-md" />

                    <input type="text" name="yearJapan" placeholder="年" value={item.yearJapan} onChange={(e) => handleDynamicChange(index, 'education', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="monthJapan" placeholder="月" value={item.monthJapan} onChange={(e) => handleDynamicChange(index, 'education', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="backgroundJapan" placeholder="教育  / 職歴" value={item.backgroundJapan} onChange={(e) => handleDynamicChange(index, 'education', e)} className="flex-1 p-3 border rounded-md" />
                    <button type="button" onClick={() => removeRow(index, 'education')} className="self-center px-4 py-2 text-white bg-red-500 rounded w-72">Remove</button>
                </div>
            ))}

            <button type="button" onClick={() => addRow('education')} className="px-4 py-2 mb-6 text-white bg-blue-600 rounded w-72">Add Education/Work History</button>




            <h3 className="mt-6 mb-2 text-2xl font-bold text-gray-700">Work History / 職歴</h3>
            {formState.workHistory.map((item, index) => (
                <div key={index} className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-5 lg:grid-cols-5">
                    <input type="text" name="year" placeholder="Year" value={item.year} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="month" placeholder="Month" value={item.month} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="companyName" placeholder="Company Name" value={item.companyName} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="occupation" placeholder="Occupation" value={item.occupation} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="location" placeholder="Location" value={item.location} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />

                    <input type="text" name="yearJapan" placeholder="年" value={item.yearjapan} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="monthJapan" placeholder="月" value={item.monthjapan} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="companyNameJapan" placeholder="会社名" value={item.companyNamejapan} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="occupationJapan" placeholder="職業" value={item.occupationjapan} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="locationJapan" placeholder="職業" value={item.locationjapan} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <button type="button" onClick={() => removeRow(index, 'workHistory')} className="self-center px-4 py-2 text-white bg-red-500 rounded w-72">Remove</button>
                </div>
            ))}
            <button type="button" onClick={() => addRow('workHistory')} className="px-4 py-2 mb-6 text-white bg-blue-600 rounded w-72">Add Work History</button>



            {/* Qualifications Section */}
            <h3 className="mt-6 mb-2 text-2xl font-bold text-gray-700">Qualifications(資格) Licenses(ライセンス) Certifications(認証)</h3>
            {formState.qualifications.map((item, index) => (
                <div key={index} className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3 lg:grid-cols-3">
                    <input type="text" name="year" placeholder="Year" value={item.year} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="month" placeholder="Month" value={item.month} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="qualification" placeholder="Qualification" value={item.qualification} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />

                    <input type="text" name="yearJapan" placeholder="年" value={item.yearJapan} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="monthJapan" placeholder="月" value={item.monthJapan} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="qualificationJapan" placeholder="資格" value={item.qualificationJapan} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />
                    <button type="button" onClick={() => removeRow(index, 'qualifications')} className="self-center px-4 py-2 text-white bg-red-500 rounded w-72">Remove</button>
                </div>
            ))}
            <button type="button" onClick={() => addRow('qualifications')} className="px-4 py-2 mb-6 text-white bg-blue-600 rounded w-72">Add Qualification</button>



            <h2 className="mb-6 text-3xl font-bold text-gray-800">File Uploads / File Uploads</h2>

            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">

                <div className="mb-4">
                    <label className="block mb-2 font-bold">Personal Photo / 個人写真</label>
                    <input type="file" name="personalPhoto" accept="image/*" onChange={handleFileChange} className="w-full p-2 border" />
                </div>



                <div className="mb-4">
                    <label className="block mb-2 font-bold">CV /履歴書</label>
                    <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
                </div>



                <div className="mb-4">
                    <label className="block mb-2 font-bold">Interview / インタビュー</label>
                    <input type="file" name="interview" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
                </div>


                <div className="mb-4">
                    <label className="block mb-2 font-bold">PT Test / PTテスト</label>
                    <input type="file" name="ptTest" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
                </div>



                <div className="mb-4">
                    <label className="block mb-2 font-bold">PT Test Certificate / Ptテスト証明書</label>
                    <input type="file" name="ptTestCertificate" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
                </div>




                <div className="mb-4">
                    <label className="block mb-2 font-bold">Passport Copy / パスポートのコピー</label>
                    <input type="file" name="passportCopy" accept="image/*,.pdf" onChange={handleFileChange} className="w-full p-2 border" />
                </div>



                <div className="mb-4">
                    <label className="block mb-2 font-bold">Driver License / 運転免許証</label>
                    <input type="file" name="driverLicense" accept="image/*,.pdf" onChange={handleFileChange} className="w-full p-2 border" />
                </div>




                <div className="mb-4">
                    <label className="block mb-2 font-bold">Qualification - Education /</label>
                    <input type="file" name="qualificationEducation" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
                </div>




                <div className="mb-4">
                    <label className="block mb-2 font-bold">Qualification - Working / 働く資格</label>
                    <input type="file" name="qualificationWorking" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
                </div>


            </div>

            {/* Submit Button */}
            {
                user ? (
                    <button onClick={handleUpdate} className="px-4 py-2 mt-6 text-white bg-green-600 rounded">
                        Update
                    </button>
                ) : (
                    <button onClick={handleSave} className="px-4 py-2 mt-6 text-white bg-green-600 rounded">
                        Submit
                    </button>
                )
            }

        </form>
    );
}

export default DataForm;
