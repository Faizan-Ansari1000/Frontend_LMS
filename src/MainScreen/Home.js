import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="font-sans bg-gray-100">

            {/* Header */}
            <header className="bg-white text-black p-4">
                <nav className="flex justify-between items-center">
                    <a href="#" className="text-lg">University</a>
                    <div className="space-x-6">
                        <Link to="/StudentPortal" className="hover:bg-green-500 px-4 py-2 rounded">Student Portal</Link>
                        <Link to="/about" className="px-4 py-2">About</Link>
                        <Link to="/courses" className="px-4 py-2">Courses</Link>
                        <Link to="/contact" className="px-4 py-2">Contact</Link>
                    </div>
                </nav>
            </header>

            {/* Left side image and text */}
            <section className="flex p-10">
                <div className="w-full lg:w-1/2">
                    <img src="https://img.freepik.com/premium-photo/large-university-building-with-sign-that-says-university-america_551880-7781.jpg?semt=ais_hybrid" alt="University" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-full lg:w-1/2 pl-10">
                    <p className="text-xl text-gray-700">At our University, we provide world-class education with cutting-edge research and dedicated professors.</p>
                </div>
            </section>

            {/* Logos Section */}
            <section className="flex justify-around p-10 bg-gray-200">
                <img src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg" alt="Logo 1" className="w-20" />
                <img src="https://images.ctfassets.net/23aumh6u8s0i/5rK62NTJvF2m28zXkvA6cp/476d5befbf876ad8a6583303415f8e27/facebook_login_hero" alt="Logo 1" className="w-20" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRykP5BcrtdT6beduDpJiHEbhwpsL-myGqBg&s" alt="Logo 1" className="w-20" />
                <img src="https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png" alt="Logo 2" className="w-20" />
                <img src="https://w7.pngwing.com/pngs/973/11/png-transparent-phoenix-logo-design-mark-phoenix-fire-thumbnail.png" alt="Logo 3" className="w-20" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwSGKO1wrCXq2SmTyMqtRZlOtRnqon7f0SoYk1_hfbhTXp8kurn-91gx4snQ3uUXU1Tc&usqp=CAU" alt="Logo 3" className="w-20" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz32JK9hrN6coRedXRfakrefPx3xxNL1H9via65vU3-p-qqZQ4_z0gj_r3-lsosDpMKnU&usqp=CAU" alt="Logo 4" className="w-20" />
            </section>

            <section className="p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <h3 className="text-xl font-semibold">Web Development Basics</h3>
                        <p className="mt-4 text-gray-600">Web development is the process of creating websites and web applications. It involves everything from building simple static pages to complex dynamic websites.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <h3 className="text-xl font-semibold">JavaScript Concepts</h3>
                        <p className="mt-4 text-gray-600">JavaScript is a programming language that allows you to implement complex things on web pages. It is essential for dynamic content, like interactive maps, animations, and real-time updates.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <h3 className="text-xl font-semibold">Front-End Frameworks</h3>
                        <p className="mt-4 text-gray-600">Front-end frameworks like React, Angular, and Vue.js allow developers to build rich, interactive user interfaces for web applications. They help in managing complex states and views.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <h3 className="text-xl font-semibold">Back-End Technologies</h3>
                        <p className="mt-4 text-gray-600">Back-end development involves server-side programming, databases, and APIs. It powers the logic, database interactions, and authentication for your web applications.</p>
                    </div>
                </div>
            </section>


            {/* Heading and Paragraph Section */}
            <section className="text-center p-10">
                <h2 className="text-3xl font-semibold">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-600">We are committed to delivering an exceptional academic experience and empowering students to reach their full potential.</p>
            </section>

            {/* Cards Section */}
            <section className="p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Course 1</h3>
                        <p className="mt-2 text-gray-600">This is a description for Course 1. Learn about the fundamentals of programming.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Course 2</h3>
                        <p className="mt-2 text-gray-600">This is a description for Course 2. Dive deep into advanced web development techniques.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Course 3</h3>
                        <p className="mt-2 text-gray-600">This is a description for Course 3. Learn data science and artificial intelligence concepts.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Course 4</h3>
                        <p className="mt-2 text-gray-600">This is a description for Course 4. Explore mobile application development and UI/UX design.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Course 5</h3>
                        <p className="mt-2 text-gray-600">This is a description for Course 5. Study the concepts of cloud computing and big data.</p>
                    </div>
                </div>
            </section>

            {/* Image and Text Section */}
            <section className="flex justify-center items-center p-10 bg-gray-300">
                <img src="https://thumbs.dreamstime.com/b/stack-colorful-books-eyeglasses-top-backlit-vibrant-light-knowledge-education-concept-327720429.jpg" alt="University" className="w-1/2 h-auto rounded-lg" />
                <p className="ml-6 text-lg">Our university is dedicated to providing students with a balanced academic experience and a vibrant campus life. Join us in building a better future together!</p>
            </section>

            {/* Bottom Cards */}
            <section className="p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Event 1</h3>
                        <p className="mt-2 text-gray-600">Join us for an exciting workshop on web development this weekend.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Event 2</h3>
                        <p className="mt-2 text-gray-600">Don't miss our upcoming seminar on AI and its impact on modern society.</p>
                    </div>
                </div>
            </section>

            {/* Left Image and Text Section */}
            <section className="flex p-10">
                <div className="w-full lg:w-1/2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&s" alt="Campus" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-full lg:w-1/2 pl-10">
                    <h3 className="text-xl font-semibold">Campus Life</h3>
                    <p className="mt-4 text-lg text-gray-600">Experience a vibrant campus life with various clubs, sports, and extracurricular activities.</p>
                </div>
            </section>

            {/* Right Image and Text Section */}
            <section className="flex p-10 bg-gray-200">
                <div className="w-full lg:w-1/2 pl-10">
                    <h3 className="text-xl font-semibold">Our Faculty</h3>
                    <p className="mt-4 text-lg text-gray-600">Our faculty members are experts in their fields and passionate about mentoring the next generation of leaders.</p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&s" alt="Faculty" className="w-full h-auto rounded-lg" />
                </div>
            </section>

        </div>

    );
};

export default Home;
