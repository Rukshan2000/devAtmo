import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Form from './components/dataForm.jsx';
import EditForm from './components/EditForm.jsx';
import Login from './pages/LoginPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import DataFormDisplay from './components/DataFormDisplay'; 
import DataForm from './components/dataForm.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
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
        <Route path="/login" element={<Login />} /> 

        <Route path="/" element={<Form onSubmit={handleFormSubmit} />} />
        <Route path="/editdata" element={ <PrivateRoute><DataForm /></PrivateRoute>} /> 
        <Route path="/display" element={<PrivateRoute><DataFormDisplay /></PrivateRoute>} /> 
        <Route path="/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
