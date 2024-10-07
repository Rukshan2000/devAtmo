import React from 'react';
import { Navigate } from 'react-router-dom';

// Define the PrivateRoute component
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Check if the user is authenticated

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children; // Render the children (protected component) if authenticated
};

// Export the component as default
export default PrivateRoute;
