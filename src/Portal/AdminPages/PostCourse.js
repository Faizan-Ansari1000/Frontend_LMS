import { Button, Input, Form, notification } from "antd";
import { useState } from "react";
import ApiInstance from "../../config/Apis/ApiInstance";

export default function PostCourse() {
  const [model, setModel] = useState({});

  const post = async (e) => {
    e.preventDefault();
    if (!model.course || !model.lastDate || !model.duration || !model.image || !model.campus) {
      return notification.info({ message: "Validation error", description: "Please provide all fields" });
    }

    await ApiInstance.post("/courseData", model)
      .then((res) => {
        console.log(res.data);
        notification.success({ message: "Success", description: "Course posted successfully" });
      })
      .catch((err) => {
        console.log(err, "error");
        notification.error({ message: "Error", description: "Please try again" });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 m-2">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Post a New Course</h2>
        <Form layout="vertical" onSubmitCapture={post}>
          {/* Course Name */}
          <Form.Item label="Course Name" className="mb-4">
            <Input
              placeholder="Enter course name"
              className="border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 text-lg"
              value={model.course}
              onChange={(e) => setModel({ ...model, course: e.target.value })}
            />
          </Form.Item>

          {/* Last Date */}
          <Form.Item label="Last Date" className="mb-4">
            <Input
              placeholder="Enter last date"
              className="border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 text-lg"
              value={model.lastDate}
              onChange={(e) => setModel({ ...model, lastDate: e.target.value })}
            />
          </Form.Item>

          {/* Duration */}
          <Form.Item label="Duration" className="mb-4">
            <Input
              placeholder="Enter course duration"
              className="border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 text-lg"
              value={model.duration}
              onChange={(e) => setModel({ ...model, duration: e.target.value })}
            />
          </Form.Item>

          {/* Image URL */}
          <Form.Item label="Image URL" className="mb-4">
            <Input
              placeholder="Enter image URL"
              className="border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 text-lg"
              value={model.image}
              onChange={(e) => setModel({ ...model, image: e.target.value })}
            />
          </Form.Item>

          {/* Campus */}
          <Form.Item label="Campus" className="mb-6">
            <Input
              placeholder="Enter campus name"
              className="border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 text-lg"
              value={model.campus}
              onChange={(e) => setModel({ ...model, campus: e.target.value })}
            />
          </Form.Item>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              htmlType="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-md text-lg font-semibold transition duration-300"
            >
              Post Course
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
