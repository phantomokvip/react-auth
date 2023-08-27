import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: {}, // Add this empty object for user data
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('isAuthenticated', 'true');
            return {
                ...state, isAuthenticated: true, user: action.payload.user
            };
        case 'LOGOUT':
            localStorage.removeItem('isAuthenticated');
            return { ...state, isAuthenticated: false, user: {} };
        default:
            return state;
    }
};


export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
