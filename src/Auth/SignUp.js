import { Button, Input, notification, Typography } from 'antd';
import { useState } from 'react';
import ApiInstance from '../config/Apis/ApiInstance';
import { useNavigate,Link } from 'react-router-dom';
import loader_img from '../assets/loader_img.gif';

const { Text } = Typography;

export default function SignUp() {
    const [model, setModel] = useState({});
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const signUp = async (e) => {
        e.preventDefault();
        if (!model.name || !model.email || !model.password) {
            return notification.error({ message: 'Validation error', description: 'Please provide all fields' });
        }

        try {
            setLoader(true);
            await ApiInstance.post('/signUp', model)
                .then((res) => {
                    console.log(res.data);
                    notification.success({ message: 'SignUp Success', description: 'User signed up successfully' });
                    navigate('/Home');
                })
                .catch((err) => {
                    console.log(err);
                    notification.error({ message: 'SignUp error', description: 'Error occurred during sign up' });
                });
            setLoader(false);
        } catch (error) {
            console.log(error);
            notification.error({ message: 'Error', description: 'Internal server error' });
            setLoader(false);
        }
    };

    return (
        <div className="relative">
            {/* Sir ke liye special message */}
            <div className="absolute top-0 left-0 right-0 bg-cyan-400 text-black text-center py-4">
                <Text className="text-lg font-semibol">
                    This project wouldn't have been possible without the guidance of my mentor, Sir Abdul Basit Ahmed (Sr. MERN Stack & React Native Developer).
                </Text>
            </div>
            
            <div className="flex justify-center items-center h-screen bg-gray-100 ">
                {loader && (
                    <div className="absolute flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50">
                        <img src={loader_img} alt="Loading..." className="w-16 h-16" />
                    </div>
                )}
                <div className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-2xl m-2">
                    <h2 className="text-2xl font-semibold text-center text-cyan-700 mb-6">Sign Up</h2>
                    <Link to={"/Admin"} className={"text-start me-5"}>Admin</Link>
                    <Link to={"/Home"} className={"text-end ms-5"}>Student</Link>
                    <div className="mb-4">
                        <Input
                            onChange={(e) => setModel({ ...model, name: e.target.value })}
                            placeholder="Full Name"
                            className="border-0 border-b-2 border-cyan-400 focus:ring-0 focus:border-cyan-600"
                        />
                    </div>
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
                        onClick={signUp}
                        className="w-full py-2 mt-4 bg-cyan-500 hover:bg-cyan-600 text-white border-none"
                    >
                        Sign Up
                    </button>
                    <div className="mt-6 text-center">
                        <Text className="text-gray-600">
                            Already have an account?
                            <span
                                onClick={() => navigate('/login')}
                                className="text-cyan-500 cursor-pointer ml-1"
                            >
                                Login here
                            </span>
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
