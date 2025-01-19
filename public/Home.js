import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Home = () => {
  return (
    <Router>
      <div className="font-sans bg-white">

        {/* Header */}
        <header className="bg-white text-black p-4">
          <nav className="flex justify-center text-center">
            <div className="space-x-6">
              <Link to="StudentPortal" className="hover:bg-green-500 px-4 py-2 rounded">Student Dashboard</Link>
              <Link to="/about" className="px-4 py-2">About</Link>
              <Link to="/courses" className="px-4 py-2">Courses</Link>
              <Link to="/contact" className="px-4 py-2 bg-green-400 border rounded-full">Contact</Link>
            </div>
          </nav>
        </header>

        {/* Left side image and text */}
        <section className="flex p-10">
          <div className="w-full lg:w-1/2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&s" alt="University" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full lg:w-1/2 pl-10">
            <p className="text-xl text-gray-700">At our University, we provide world-class education with cutting-edge research and dedicated professors.</p>
          </div>
        </section>

        {/* Logos Section */}
        <section className="flex justify-around p-10 bg-gray-200">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&s" alt="Logo 1" className="w-20" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&s" alt="Logo 2" className="w-20" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&s" alt="Logo 3" className="w-20" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&s" alt="Logo 4" className="w-20" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&s" alt="Logo 5" className="w-20" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&s" alt="Logo 6" className="w-20" />
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7W4AqNTInSLY5MaRv-CfqsvJeebgjbbko4g&s" alt="University" className="w-1/2 h-auto rounded-lg" />
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
    </Router>
  );
};

export default Home;
