// ContactUs.js

import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        {/* Contact Form */}
        <form className="mb-8" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-md"
                placeholder="Your Name"
              />
            </div>
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
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2">
            Address: FF-119 Main Boulevard DHA Lahore, Pakistan
          </p>
          <p className="text-gray-700 mb-2">Phone: +92 (332) 6699016</p>
          <p className="text-gray-700 mb-2">Email: info@infintrixtech.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
