import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formState);
        navigate('/display');
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormState({ ...formState, [name]: files[0] });
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

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">General Info / 一般情報</h2>

            {/* General Info 試料*/}
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                <div>
                    <label className="block mb-1 font-semibold">Full Name</label>
                    <input type="text" name="fullName" value={formState.fullName} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">名前 </label>
                    <input type="text" name="fullNamejapan" value={formState.fullNamejapan} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Date of Birth</label>
                    <input type="date" name="dateOfBirth" value={formState.dateOfBirth} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">携帯</label>
                    <input type="date" name="dateOfBirthjapan" value={formState.dateOfBirth} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Address</label>
                    <input type="text" name="address" value={formState.address} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">住所</label>
                    <input type="text" name="addressjapan" value={formState.addressjapan} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Status of Residence</label>
                    <input type="text" name="statusOfResidence" value={formState.statusOfResidence} onChange={handleChange} className="w-full p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">在留資格</label>
                    <input type="text" name="statusOfResidencejapan" value={formState.statusOfResidencejapan} onChange={handleChange} className="w-full p-3 border rounded-md" />
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
                    <input type="text" name="nationalityjapan" value={formState.nationalityjapan} onChange={handleChange} className="w-full p-3 border rounded-md" />
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

                    <input type="text" name="year" placeholder="年" value={item.yearjapan} onChange={(e) => handleDynamicChange(index, 'education', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="month" placeholder="月" value={item.monthjapan} onChange={(e) => handleDynamicChange(index, 'education', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="background" placeholder="教育  / 職歴" value={item.backgroundjapan} onChange={(e) => handleDynamicChange(index, 'education', e)} className="flex-1 p-3 border rounded-md" />
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

                    <input type="text" name="year" placeholder="年" value={item.yearjapan} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="month" placeholder="月" value={item.monthjapan} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="companyName" placeholder="会社名" value={item.companyNamejapan} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="occupation" placeholder="職業" value={item.occupationjapan} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="location" placeholder="職業" value={item.locationjapan} onChange={(e) => handleDynamicChange(index, 'workHistory', e)} className="flex-1 p-3 border rounded-md" />
                    <button type="button" onClick={() => removeRow(index, 'workHistory')} className="self-center px-4 py-2 text-white bg-red-500 rounded w-72">Remove</button>
                </div>
            ))}
            <button type="button" onClick={() => addRow('workHistory')} className="px-4 py-2 mb-6 text-white bg-blue-600 rounded w-72">Add Work History</button>

            

            {/* Qualifications Section */}
            <h3 className="mt-6 mb-2 text-2xl font-bold text-gray-700">Qualifications(資格) / Licenses(ライセンス) / Certifications(認証)</h3>
            {formState.qualifications.map((item, index) => (
                <div key={index} className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3 lg:grid-cols-3">
                <input type="text" name="year" placeholder="Year" value={item.year} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="month" placeholder="Month" value={item.month} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="qualification" placeholder="Qualification" value={item.qualification} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />

                    <input type="text" name="year" placeholder="年" value={item.yearjapan} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="month" placeholder="月" value={item.monthjapan} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />
                    <input type="text" name="qualification" placeholder="資格" value={item.qualificationjapan} onChange={(e) => handleDynamicChange(index, 'qualifications', e)} className="flex-1 p-3 border rounded-md" />
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
            <button type="submit" className="px-4 py-2 mt-6 text-white bg-green-600 rounded">Submit / </button>
        </form>
    );
}

export default DataForm;
