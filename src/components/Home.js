import React from 'react';
import { useAuth } from '../auth/AuthContext';

const Home = () => {
    const { dispatch, state } = useAuth();
    console.log(state)

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <div className="home-container">
            <h2>Xin chào!</h2>
            {state.isAuthenticated && (
                <div className="user-info">
                    <p>Tên người dùng: {state.user.userName}</p>
                    <p>Họ và tên: {state.user.fullName}</p>
                    <p>Vai trò: {state.user.role || 'Không xác định'}</p>
                </div>
            )}
            <button className="logout-button" onClick={handleLogout}>
                Đăng xuất
            </button>
        </div>
    );
};

export default Home;
