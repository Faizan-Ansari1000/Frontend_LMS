import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="font-sans bg-gray-100">

            {/* Header */}
            <header className="bg-white text-black p-4">
                <nav className="flex flex-wrap justify-between items-center">
                    <Link to={""} className="text-lg">University</Link>
                    <div className="space-x- mt-2 md:mt-0 flex flex-wrap">
                        <Link to="/StudentPortal" className="hover:bg-green-500 px-3 py-1 rounded">Student Portal</Link>
                        <Link to="/about" className="px-3 py-1">About</Link>
                        <Link to="/courses" className="px-3 py-1">Courses</Link>
                        <Link to="/contact" className="px-3 py-1">Contact</Link>
                    </div>
                </nav>
            </header>

            {/* University Section */}
            <section className="flex flex-wrap p-4 lg:p-10">
                <div className="w-full lg:w-1/2">
                    <img src="https://img.freepik.com/premium-photo/large-university-building-with-sign-that-says-university-america_551880-7781.jpg?semt=ais_hybrid" alt="University" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-28 lg:pl-10">
                    <p className="text-lg lg:text-xl text-gray-700">At our University, we provide world-class education with cutting-edge research and dedicated professors.</p>
                </div>
            </section>

            {/* Cards Section */}
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

            {/* New Section Below Cards */}
            <section className="flex flex-wrap p-4 lg:p-10 items-center bg-gray-200 gap-4">
                <div className="w-full lg:w-1/2">
                    <img src="https://thumbs.dreamstime.com/b/stack-colorful-books-eyeglasses-top-backlit-vibrant-light-knowledge-education-concept-327720429.jpg" alt="Books" className="w-full rounded-lg" />
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-10">
                    <p className="text-lg lg:text-xl text-gray-700">Our university is dedicated to providing students with a balanced academic experience and a vibrant campus life.</p>
                </div>
            </section>

            {/* Another Section */}
            <section className="flex flex-wrap p-4 lg:p-10 items-center">
                <div className="w-full lg:w-1/2">
                    <p className="text-lg lg:text-xl text-gray-700">Join us for an exciting workshop on web development this weekend and explore the possibilities of modern technology.</p>
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-10">
                    <img src="https://reporter.rit.edu:8443/sites/pubDir/slideShow/08-16/212-1474-47783801.jpg" alt="Workshop" className="w-full rounded-lg" />
                </div>
            </section>
            {/* flex section */}
            <section className="flex flex-wrap p-4 lg:p-10 items-center">
                <div className="w-full lg:w-1/2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOC1cFKXhtng2WYYJ4eBRvQWKlzmVnnw4L4g&s" alt="Workshop" className="w-full rounded-lg" />
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-10">

                    <p className="text-lg lg:text-xl text-gray-700">Join us for an exciting workshop on web development this weekend and explore the possibilities of modern technology.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
