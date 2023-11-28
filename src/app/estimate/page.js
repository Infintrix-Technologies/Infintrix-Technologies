// EstimateForm.js
"use client";
import React, { useState } from "react";

const EstimateForm = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    email: "",
    phone: "",
    projectDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-6">Estimate Project</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="projectName"
                className="block text-gray-700 font-bold mb-2"
              >
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="w-full p-2 border rounded-md"
                placeholder="Enter Project Name"
                value={formData.projectName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="clientName"
                className="block text-gray-700 font-bold mb-2"
              >
                Client Name
              </label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                className="w-full p-2 border rounded-md"
                placeholder="Enter Your Name"
                value={formData.clientName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-2 border rounded-md"
                placeholder="Enter Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="projectDescription"
              className="block text-gray-700 font-bold mb-2"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows="4"
              className="w-full p-2 border rounded-md"
              placeholder="Briefly describe your project"
              value={formData.projectDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit Estimate
          </button>
        </form>
      </div>
    </div>
  );
};

export default EstimateForm;
