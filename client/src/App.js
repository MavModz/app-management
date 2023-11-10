import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Restricted from './Components/Error/Restricted/Restricted';
import Billing from './pages/Billing/Billing';
import Profile from './pages/Profile/Profile';
import Management from './pages/Management/Management';
import Dashboard from './pages/Dashboard/Dashboard';
import Courses from './pages/Courses/Courses';

function App() {
  const authToken = sessionStorage.getItem('auth_token');
  const location = useLocation();

  // Redirect to dashboard if authenticated and accessing '/'
  if (authToken && location.pathname === '/') {
    return <Navigate to="/dashboard" />;
  }

  // Redirect to login if not authenticated
  if (!authToken && location.pathname !== '/') {
    return <Navigate to="/" />;
  }
  return (
    <div className="App">
      <Routes>
        {/* Redirect from /login to /dashboard if authenticated */}
        {authToken && location.pathname === '/' && (
          <Route path="/dashboard" element={<Dashboard />} />
        )}



        {/* Protected Routes */}
        {authToken ? (
          <>
            <Route path='/register' element={<Register />} />
            <Route path='/billing' element={<Billing />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/management' element={<Management />} />
          </>
        ) : <Route path='/' element={<Login />} />}

        {/* Fallback Route */}
        <Route path="*" element={<Restricted />} />
      </Routes>
    </div>
  );
}

export default App;
