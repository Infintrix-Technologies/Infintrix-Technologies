// Portfolio.js
import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-4xl font-bold my-2">
            Our Featured Work
          </h1>
          <p className="text-gray-600 my-1 text-center">
            View the full case study of our recent featured and awesome works
            that we created for our clients.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Project 1</h2>
            <p className="text-gray-600 mb-4">Description of Project 1.</p>
            <a href="#" className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Project 2</h2>
            <p className="text-gray-600 mb-4">Description of Project 2.</p>
            <a href="#" className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Portfolio;
