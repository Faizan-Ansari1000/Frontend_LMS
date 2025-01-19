import React, { useEffect, useState } from 'react';
import ApiInstance from '../../config/Apis/ApiInstance';
import { Link } from 'react-router-dom';

export default function Std() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await ApiInstance.get('/api/studentData');
      setData(response.data.data || []);
      setLoading(false);
    } catch (err) {
      console.error(err, 'error');
      setError('Failed to fetch data. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-2 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Student Messages</h1>
      </div>

      {loading ? (
        <p className="text-blue-500 font-semibold text-lg">Loading data...</p>
      ) : error ? (
        <p className="text-red-500 font-semibold text-lg">{error}</p>
      ) : data.length > 0 ? (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-6 py-3 text-sm font-medium">Name</th>
                <th className="px-6 py-3 text-sm font-medium">Email</th>
                <th className="px-6 py-3 text-sm font-medium">Percentage</th>
                <th className="px-6 py-3 text-sm font-medium">Phone</th>
                <th className="px-6 py-3 text-sm font-medium">Address</th>
                <th className="px-6 py-3 text-sm font-medium">Course</th>
                <th className="px-6 py-3 text-sm font-medium">DOB</th>
                <th className="px-6 py-3 text-sm font-medium">Comments</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, index) => (
                <tr key={index} className="odd:bg-blue-50 even:bg-white hover:bg-blue-100">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{student.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.percentage}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.phone}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.address}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.course}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.dob}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.comment || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 font-semibold text-lg">No data available.</p>
      )}
    </div>
  );
}
