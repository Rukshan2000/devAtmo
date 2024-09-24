import React, { useState } from 'react';

function DataForm({ onSubmit }) {
    const [formState, setFormState] = useState({
        fullName: '',
        dateOfBirth: '',
        address: '',
        statusOfResidence: '',
        sex: '',
        nationality: '',
        mobile: '',
        email: '',
        maritalStatus: '',
        children: '',
        bloodType: '',
        comfortableHand: '',
        height: '',
        weight: '',
        smoke: '',
        alcohol: '',
        tattoo: '',
        colorBlindness: '',
        beenToJapan: '',
        education: [{ year: '', month: '', background: '' }],
        workHistory: [{ year: '', month: '', companyName: '', occupation: '', location: '' }],
        qualifications: [{ year: '', month: '', qualification: '' }],
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

    // General change handler for input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    // File input handler
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormState({ ...formState, [name]: files[0] });
    };

    // For dynamic fields like Education, Work History, and Qualifications
    const handleDynamicChange = (index, field, e) => {
        const { name, value } = e.target;
        const updatedList = [...formState[field]];
        updatedList[index] = { ...updatedList[index], [name]: value };
        setFormState({ ...formState, [field]: updatedList });
    };

    // Add new row to dynamic lists
    const addRow = (field) => {
        const newRow = field === 'education' ? { year: '', month: '', background: '' }
                    : field === 'workHistory' ? { year: '', month: '', companyName: '', occupation: '', location: '' }
                    : { year: '', month: '', qualification: '' };

        setFormState({ ...formState, [field]: [...formState[field], newRow] });
    };

    // Remove a row from dynamic lists
    const removeRow = (index, field) => {
        const updatedList = [...formState[field]];
        updatedList.splice(index, 1);
        setFormState({ ...formState, [field]: updatedList });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formState); // Send data to the parent component or API
    };


    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Data Form</h2>

{/* General Info */}
<div className="mb-4">
    <label className="block mb-2 font-bold">Full Name</label>
    <input type="text" name="fullName" value={formState.fullName} onChange={handleChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Date of Birth</label>
    <input type="date" name="dateOfBirth" value={formState.dateOfBirth} onChange={handleChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Address</label>
    <input type="text" name="address" value={formState.address} onChange={handleChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Status of Residence</label>
    <input type="text" name="statusOfResidence" value={formState.statusOfResidence} onChange={handleChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Sex</label>
    <select name="sex" value={formState.sex} onChange={handleChange} className="w-full p-2 border">
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
    </select>
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Nationality</label>
    <input type="text" name="nationality" value={formState.nationality} onChange={handleChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Mobile</label>
    <input type="text" name="mobile" value={formState.mobile} onChange={handleChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Email</label>
    <input type="email" name="email" value={formState.email} onChange={handleChange} className="w-full p-2 border" />
</div>


{/* Education Section */}
<h3 className="mb-2 text-xl font-bold">Education Background / Work History</h3>
{formState.education.map((item, index) => (
    <div key={index} className="flex items-center gap-4 mb-4 sm:flex-col lg:flex-row lg:gap-4">
        <input type="text" name="year" placeholder="Year" value={item.year} onChange={(e) => handleDynamicChange(index, 'education', e)} className="p-2 border flex-1" />
        <input type="text" name="month" placeholder="Month" value={item.month} onChange={(e) => handleDynamicChange(index, 'education', e)} className="p-2 border flex-1" />
        <input type="text" name="background" placeholder="Education/Work History" value={item.background} onChange={(e) => handleDynamicChange(index, 'education', e)} className="p-2 border flex-1" />
        <button type="button" onClick={() => removeRow(index, 'education')} className="px-4 py-2 text-white bg-red-500 rounded">Remove</button>
    </div>
))}
<button type="button" onClick={() => addRow('education')} className="px-4 py-2 mb-4 text-white bg-blue-500 rounded">Add Education/Work History</button>

{/* Work History Section */}
<h3 className="mb-2 text-xl font-bold">Work History</h3>
{formState.workHistory.map((item, index) => (
    <div key={index} className="flex items-center gap-4 mb-4 sm:flex-col lg:flex-row lg:gap-4">
        <input type="text" name="year" placeholder="Year" value={item.year} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="p-2 border flex-1" />
        <input type="text" name="month" placeholder="Month" value={item.month} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="p-2 border flex-1" />
        <input type="text" name="companyName" placeholder="Company Name" value={item.companyName} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="p-2 border flex-1" />
        <input type="text" name="occupation" placeholder="Occupation" value={item.occupation} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="p-2 border flex-1" />
        <input type="text" name="location" placeholder="Location" value={item.location} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="p-2 border flex-1" />
        <button type="button" onClick={() => removeRow(index, 'workHistory')} className="px-4 py-2 text-white bg-red-500 rounded">Remove</button>
    </div>
))}
<button type="button" onClick={() => addRow('workHistory')} className="px-4 py-2 mb-4 text-white bg-blue-500 rounded">Add Work History</button>

{/* Qualifications Section */}
<h3 className="mb-2 text-xl font-bold">Qualifications / Licenses / Certifications / Awards</h3>
{formState.qualifications.map((item, index) => (
    <div key={index} className="flex items-center gap-4 mb-4 sm:flex-col lg:flex-row lg:gap-4">
        <input type="text" name="year" placeholder="Year" value={item.year} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="p-2 border flex-1" />
        <input type="text" name="month" placeholder="Month" value={item.month} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="p-2 border flex-1" />
        <input type="text" name="qualification" placeholder="Qualification/Award" value={item.qualification} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="p-2 border flex-1" />
        <button type="button" onClick={() => removeRow(index, 'qualifications')} className="px-4 py-2 text-white bg-red-500 rounded">Remove</button>
    </div>
))}
<button type="button" onClick={() => addRow('qualifications')} className="px-4 py-2 mb-4 text-white bg-blue-500 rounded">Add Qualification</button>

            <div className="mb-4">
    <label className="block mb-2 font-bold">Married / Single</label>
    <select name="maritalStatus" value={formState.maritalStatus} onChange={handleChange} className="w-full p-2 border">
        <option value="">Select Status</option>
        <option value="Married">Married</option>
        <option value="Single">Single</option>
    </select>
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">How many children</label>
    <input type="number" name="children" value={formState.children} onChange={handleChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Blood Type</label>
    <input type="text" name="bloodType" value={formState.bloodType} onChange={handleChange} className="w-full p-2 border" />
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
    <label className="block mb-2 font-bold">Height</label>
    <input type="number" name="height" value={formState.height} onChange={handleChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Weight</label>
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
    <label className="block mb-2 font-bold">Do you drink alcohol?</label>
    <select name="alcohol" value={formState.alcohol} onChange={handleChange} className="w-full p-2 border">
        <option value="">Select Option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
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
    <label className="block mb-2 font-bold">Do you have color blindness?</label>
    <select name="colorBlindness" value={formState.colorBlindness} onChange={handleChange} className="w-full p-2 border">
        <option value="">Select Option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
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

{/* File Upload Fields */}
<div className="mb-4">
    <label className="block mb-2 font-bold">Personal Photo</label>
    <input type="file" name="personalPhoto" accept="image/*" onChange={handleFileChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">CV</label>
    <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Interview</label>
    <input type="file" name="interview" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">PT Test</label>
    <input type="file" name="ptTest" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">PT Test Certificate</label>
    <input type="file" name="ptTestCertificate" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Passport Copy</label>
    <input type="file" name="passportCopy" accept="image/*,.pdf" onChange={handleFileChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Driver License</label>
    <input type="file" name="driverLicense" accept="image/*,.pdf" onChange={handleFileChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Qualification - Education</label>
    <input type="file" name="qualificationEducation" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
</div>

<div className="mb-4">
    <label className="block mb-2 font-bold">Qualification - Working</label>
    <input type="file" name="qualificationWorking" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border" />
</div>

            {/* Submit button */}
            <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded">Submit Form</button>
        </form>
    );
}

export default DataForm;
