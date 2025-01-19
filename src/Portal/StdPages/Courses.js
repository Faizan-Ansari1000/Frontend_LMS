import React, { useEffect, useState } from 'react';
import ApiInstance from '../../config/Apis/ApiInstance';

export default function Courses() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = () => {
        setLoading(true);
        ApiInstance.get('/courseData')
            .then((res) => {
                setPostData([...res.data.data]);
            })
            .catch((err) => {
                console.log(err, 'error');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
                Courses
            </h1>
            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {postData.map((course, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={course.image}
                                alt={course.course}
                                className="h-40 w-full object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">
                                    {course.course}
                                </h2>
                                <p className="text-gray-600 mb-2">
                                    <span className="font-semibold">Campus:</span> {course.campus}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    <span className="font-semibold">Duration:</span> {course.duration}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    <span className="font-semibold">Last Date:</span> {new Date(course.lastDate).toDateString()}
                                </p>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
