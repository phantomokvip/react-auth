import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        </Routes>
    );
};

export default AppRoutes;
