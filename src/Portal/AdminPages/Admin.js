import { Link, Route, Routes } from "react-router-dom";
import Std from "./Std";
import PostCourse from "./PostCourse";

export default function Admin() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Sidebar for large screens */}
            <div className="hidden md:flex md:w-64 bg-gray-800 text-white p-4">
                <div className="space-y-4">
                    <Link to="/Admin/Std" className="flex items-center space-x-2 hover:text-cyan-400">
                        
                        <span>Student</span>
                    </Link>
                    <Link to="/Admin/PostCourse" className="flex items-center space-x-2 hover:text-cyan-400">
                       
                        <span>Post Course</span>
                    </Link>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-6">
                {/* Header for mobile and desktop */}
                <div className="md:hidden flex justify-between items-center mb-4">
                    <Link to="/Admin/Std" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                        
                        <span>User</span>
                    </Link>
                    <Link to="/Admin/PostCourse" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                       
                        <span>PostCourse</span>
                    </Link>
                </div>

                <Routes>
                    <Route path="/Std" element={<Std />} />
                    <Route path="/PostCourse" element={<PostCourse />} />
                </Routes>
            </div>
        </div>
    );
}