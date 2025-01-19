import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../../Auth/SignUp";
import Login from "../../Auth/Login";
import Std from "../../Portal/AdminPages/Std";
import Admin from "../../Portal/AdminPages/Admin";
import StdForm from "../../Portal/StdPages/StdForm";
import StudentPortal from "../../Portal/StdPages/StudentPortal";
import Courses from "../../Portal/StdPages/Courses";
import Home from "../../MainScreen/Home";

export default function AppRouter() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Std" element={<Std />} />
                    <Route path="/Admin/*" element={<Admin />} />
                    <Route path="StdForm" element={<StdForm />} />
                    <Route path="StudentPortal" element={<StudentPortal />} />
                    <Route path="Courses" element={<Courses />} />
                    <Route path="Home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}