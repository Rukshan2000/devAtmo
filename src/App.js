import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Form from './components/dataForm.jsx';
import DataFormDisplay from './components/DataFormDisplay'; // Assuming DataFormDisplay is created to display the submitted data

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

        {/* Route to display submitted form data */}
        {formData && <Route path="/display" element={<DataFormDisplay data={formData} />} />}
        
        {/* Redirect to the form if no data */}
        <Route path="/display" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
