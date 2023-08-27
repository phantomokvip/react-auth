import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element }) => {
    const { state } = useAuth();

    if (!state.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return element;
};

export default PrivateRoute;
