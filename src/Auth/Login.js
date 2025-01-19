import { Button, Input, notification } from 'antd';
import { useState } from 'react';
import ApiInstance from '../config/Apis/ApiInstance';
import { useNavigate } from 'react-router-dom';
import loader_img from '../assets/loader_img.gif';

export default function Login() {
    const [model, setModel] = useState({});
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const login = async (e) => {
        e.preventDefault();

        if (!model.email || !model.password) {
            return notification.error({ message: 'Validation error', description: 'Please provide both fields' });
        }

        try {
            setLoader(true);

            const response = await ApiInstance.post('/Login', model);

            console.log('Full Backend Response:', response);

            if (!response.data || !response.data.user || !response.data.user.role) {
                console.log('Role missing in response');
                return notification.error({
                    message: 'Invalid response from server',
                    description: 'Role information is missing from the server response.',
                });
            }

            const { role } = response.data.user;

            notification.success({ message: 'Login Success', description: 'User logged in successfully' });

            if (role === 'admin') {
                navigate('/Admin');
            } else if (role === 'user') {
                navigate('/Home');
            } else {
                notification.warning({ message: 'Unknown role', description: 'User role not recognized' });
            }
        } catch (err) {
            console.error('Login error:', err.response ? err.response.data : err.message);
            notification.error({
                message: 'Authentication error',
                description: err.response?.data?.message || 'Invalid credentials, please try again',
            });
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            {loader && (
                <div className="absolute flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50">
                    <img src={loader_img} alt="Loading..." className="w-16 h-16" />
                </div>
            )}
            <div className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold text-center text-cyan-700 mb-6">Login</h2>
                <div className="mb-4">
                    <Input
                        onChange={(e) => setModel({ ...model, email: e.target.value })}
                        placeholder="Email"
                        className="border-0 border-b-2 border-cyan-400 focus:ring-0 focus:border-cyan-600"
                    />
                </div>
                <div className="mb-4">
                    <Input.Password
                        onChange={(e) => setModel({ ...model, password: e.target.value })}
                        placeholder="Password"
                        className="border-0 border-b-2 border-cyan-400 focus:ring-0 focus:border-cyan-600"
                    />
                </div>
                <button
                    onClick={login}
                    className="w-full py-2 mt-4 bg-cyan-500 hover:bg-cyan-600 border-none text-white"
                >
                    Login
                </button>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <span
                            onClick={() => navigate('/signup')}
                            className="text-cyan-500 cursor-pointer"
                        >
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
