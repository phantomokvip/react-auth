import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound'; // Import NotFound

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
