import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="font-sans bg-gray-100">

            {/* Header */}
            <header className="bg-white text-black p-4">
                <nav className="flex flex-wrap justify-between items-center">
                    <a href="#" className="text-lg">University</a>
                    <div className="space-x-4 mt-2 md:mt-0 flex flex-wrap">
                        <Link to="/StudentPortal" className="hover:bg-green-500 px-3 py-1 rounded">Student Portal</Link>
                        <Link to="/about" className="px-3 py-1">About</Link>
                        <Link to="/courses" className="px-3 py-1">Courses</Link>
                        <Link to="/contact" className="px-3 py-1">Contact</Link>
                    </div>
                </nav>
            </header>

            <section className="flex flex-wrap p-4 lg:p-10">
                <div className="w-full lg:w-1/2">
                    <img src="https://img.freepik.com/premium-photo/large-university-building-with-sign-that-says-university-america_551880-7781.jpg?semt=ais_hybrid" alt="University" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-10">
                    <p className="text-lg lg:text-xl text-gray-700">At our University, we provide world-class education with cutting-edge research and dedicated professors.</p>
                </div>
            </section>

            {/* Logos Section */}
            <section className="flex flex-wrap justify-around p-4 lg:p-10 bg-gray-200 gap-4">
                <img src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg" alt="Logo 1" className="w-14 lg:w-20" />
                <img src="https://images.ctfassets.net/23aumh6u8s0i/5rK62NTJvF2m28zXkvA6cp/476d5befbf876ad8a6583303415f8e27/facebook_login_hero" alt="Logo 2" className="w-14 lg:w-20" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRykP5BcrtdT6beduDpJiHEbhwpsL-myGqBg&s" alt="Logo 3" className="w-14 lg:w-20" />
                <img src="https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png" alt="Logo 4" className="w-14 lg:w-20" />
                <img src="https://w7.pngwing.com/pngs/973/11/png-transparent-phoenix-logo-design-mark-phoenix-fire-thumbnail.png" alt="Logo 5" className="w-14 lg:w-20" />
            </section>

            <section className="p-4 lg:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                        <h3 className="text-lg font-semibold">Web Development Basics</h3>
                        <p className="mt-2 text-gray-600">Learn the fundamentals of creating websites and web applications.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                        <h3 className="text-lg font-semibold">JavaScript Concepts</h3>
                        <p className="mt-2 text-gray-600">Understand dynamic content and real-time updates with JavaScript.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                        <h3 className="text-lg font-semibold">Front-End Frameworks</h3>
                        <p className="mt-2 text-gray-600">Build rich UIs with React, Angular, and Vue.js.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                        <h3 className="text-lg font-semibold">Back-End Technologies</h3>
                        <p className="mt-2 text-gray-600">Dive into server-side programming, databases, and APIs.</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-wrap justify-center items-center p-4 lg:p-10 bg-gray-300 gap-4">
                <img src="https://thumbs.dreamstime.com/b/stack-colorful-books-eyeglasses-top-backlit-vibrant-light-knowledge-education-concept-327720429.jpg" alt="Books" className="w-full lg:w-1/2 rounded-lg" />
                <p className="text-lg text-gray-700 lg:ml-6">Our university is dedicated to providing students with a balanced academic experience and a vibrant campus life.</p>
            </section>

            <section className="p-4 lg:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Event 1</h3>
                        <p className="mt-2 text-gray-600">Join us for an exciting workshop on web development this weekend.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Event 2</h3>
                        <p className="mt-2 text-gray-600">Don't miss our seminar on AI's impact on modern society.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
