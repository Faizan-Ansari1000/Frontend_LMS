import React from "react";
import { Link } from "react-router-dom";

export default function StudentPortal() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Welcome Section */}
      <div className="bg-blue-800 text-white w-full max-w-4xl rounded-lg shadow-md p-8 mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to the Student Portal</h1>
        <p className="text-lg">Manage your courses, profile, and more with ease.</p>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <Link to={'/StdForm'} className="text-2xl font-semibold mb-2 text-blue-800">Student Form</Link>
          <p className="text-gray-600">
            View your stats, progress, and recent activities.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <Link to={'/Courses'} className="text-2xl font-semibold mb-2 text-blue-800">Courses</Link>
          <p className="text-gray-600">
            Update your personal information and settings.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">Profile</h2>
          <p className="text-gray-600">
            Explore and manage your enrolled courses.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">Notifications</h2>
          <p className="text-gray-600">
            Stay updated with the latest announcements.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">Resources</h2>
          <p className="text-gray-600">
            Access learning materials and other resources.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">Support</h2>
          <p className="text-gray-600">
            Contact support for assistance with any issues.
          </p>
        </div>
      </div>
    </div>
  );
}
