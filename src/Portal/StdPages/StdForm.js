import { Button, Input, notification } from 'antd';
import React, { useState } from 'react';
import ApiInstance from '../../config/Apis/ApiInstance';
import loader_img from '../../assets/loader_img.gif';

export default function StdForm() {
  const [model, setModel] = useState({});
  const [loader, setLoader] = useState(false);

  const submit = async () => {
    if (!model.name || !model.email || !model.percentage || !model.phone || !model.address || !model.course || !model.dob) {
      return notification.error({ message: 'Validation Error', description: 'Please fill all the fields.' });
    }

    try {
      setLoader(true);
      await ApiInstance.post('/api/studentData', model);
      notification.success({ message: 'Form Submitted', description: 'Your form has been successfully submitted!' });
      setLoader(false);
    } catch (error) {
      notification.error({ message: 'Error', description: 'Internal server error, please try again later.' });
      setLoader(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-cyan-50 to-cyan-100">
      {loader && (
        <div className="absolute z-50 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50">
          <img src={loader_img} alt="Loading..." className="w-16 h-16" />
        </div>
      )}
      <div className="w-full sm:w-96 bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-cyan-700 mb-6">
          Student Admission Form
        </h2>
        <div className="space-y-4">
          <Input
            placeholder="Full Name"
            value={model.name}
            onChange={(e) => setModel({ ...model, name: e.target.value })}
            className="border-0 border-b-2 border-cyan-400 focus:ring-0 focus:border-cyan-600"
          />
          <Input
            placeholder="Email"
            value={model.email}
            onChange={(e) => setModel({ ...model, email: e.target.value })}
            className="border-0 border-b-2 border-cyan-400 focus:ring-0 focus:border-cyan-600"
          />
          <Input
            type="number"
            placeholder="Percentage"
            value={model.percentage}
            onChange={(e) => setModel({ ...model, percentage: e.target.value })}
            className="border-0 border-b-2 border-cyan-400 focus:ring-0 focus:border-cyan-600"
          />
          <Input
            placeholder="Phone Number"
            value={model.phone}
            onChange={(e) => setModel({ ...model, phone: e.target.value })}
            className="border-0 border-b-2 border-cyan-400 focus:ring-0 focus:border-cyan-600"
          />
          <Input
            placeholder="Address"
            value={model.address}
            onChange={(e) => setModel({ ...model, address: e.target.value })}
            className="border-0 border-b-2 border-cyan-400 focus:ring-0 focus:border-cyan-600"
          />
          <Input
            placeholder="Course"
            value={model.course}
            onChange={(e) => setModel({ ...model, course: e.target.value })}
            className="border-0 border-b-2 border-cyan-400 focus:ring-0 focus:border-cyan-600"
          />
          <Input
            type="date"
            placeholder="Date of Birth"
            value={model.dob}
            onChange={(e) => setModel({ ...model, dob: e.target.value })}
            className="border-0 border-b-2 border-cyan-400 focus:ring-0 focus:border-cyan-600"
          />
          <Input
            placeholder="Additional Comments"
            value={model.comment}
            onChange={(e) => setModel({ ...model, comment: e.target.value })}
            className="border-0 border-b-2 border-cyan-400 focus:ring-0 focus:border-cyan-600"
          />
          <button
            onClick={submit}
            disabled={loader}
            className="w-full py-3 mt-4 text-lg bg-cyan-600 hover:bg-cyan-800 text-white font-semibold rounded-md"
          >
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );
}
