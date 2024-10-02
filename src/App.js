import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Form from './components/dataForm.jsx';
import EditForm from './components/EditForm.jsx';
import Login from './pages/LoginPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import DataFormDisplay from './components/DataFormDisplay'; 
import DataForm from './components/dataForm.jsx';
const App = () => {
  const [formData, setFormData] = useState(null);

  // Function to handle form submission
  const handleFormSubmit = (data) => {
    setFormData(data); // Store form data
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the form */}
        <Route path="/" element={<Form onSubmit={handleFormSubmit} />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/editdata" element={<DataForm />} /> 
        <Route path="/display" element={<DataFormDisplay />} /> 
        <Route path="/dashboard" element={<AdminDashboard />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
