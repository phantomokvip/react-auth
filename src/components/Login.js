import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, Typography, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Login = () => {
    const { dispatch } = useAuth();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post('https://api.keovip11.tv/api/user/login', {
                headers: {
                    'authorization': 'ádasdsadasd'
                },
                userName: values.username,
                password: values.password,
            });

            if (response.data.status) {
                dispatch({ type: 'LOGIN', payload: { user: response.data.data.user } });
                localStorage.setItem('isAuthenticated', 'true');
                navigate('/');
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setLoading(false);
            setError('Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.');
        }
    };

    return (
        <div className="login-container">
            <div className="centered-content">
                <Card className="login-card" title={<Title level={2}>Trang đăng nhập</Title>}>
                    <Form name="login-form" onFinish={handleLogin}>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Tên đăng nhập"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Mật khẩu"
                            />
                        </Form.Item>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default Login;
