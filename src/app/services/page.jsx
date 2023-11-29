import React from "react";
import { BsCart, BsCode, BsCodeSlash } from "react-icons/bs";
import {
  MdCode,
  MdDesk,
  MdOutlineDesktopMac,
  MdSettings,
  MdSmartphone,
} from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

const ServicesPage = async () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="max-w-4xl p-8 bg-white shadow-lg rounded-md flex flex-wrap">
          {/* Web Application Development Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <MdCode className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Web Application Development
            </h2>
            <p className="text-gray-700">
              We specialize in creating robust and scalable web applications
              tailored to meet your business requirements. From dynamic websites
              to complex web solutions, our team is committed to delivering
              high-quality and user-friendly experiences.
            </p>
          </div>

          {/* Mobile Application Development Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <MdSmartphone className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Mobile Application Development
            </h2>
            <p className="text-gray-700">
              Harness the power of mobile technology with our mobile application
              development services. Whether it&apos;s iOS or Android, we design
              and develop native and cross-platform mobile applications that
              provide seamless and engaging user experiences.
            </p>
          </div>

          {/* Enterprise Solutions Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <MdSettings className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-secondary">Enterprise Solutions</h2>
            <p className="text-gray-700">
              Elevate your business operations with our enterprise solutions. We
              offer tailor-made software solutions to streamline processes,
              enhance collaboration, and improve overall efficiency within your
              organization.
            </p>
          </div>

          {/* Artificial Intelligence Solutions Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <GiArtificialIntelligence className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Artificial Intelligence Solutions
            </h2>
            <p className="text-gray-700">
              Embrace the future with our artificial intelligence solutions.
              From machine learning algorithms to natural language processing,
              we leverage cutting-edge AI technologies to help businesses gain
              valuable insights, automate tasks, and make data-driven decisions.
            </p>
          </div>

          {/* Desktop Applications Development Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <MdOutlineDesktopMac className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Desktop Applications Development
            </h2>
            <p className="text-gray-700">
              Our desktop application development services cater to businesses
              seeking powerful and efficient solutions for Windows, macOS, or
              Linux environments. We create desktop applications that align with
              your specific needs and enhance productivity.
            </p>
          </div>

          {/* Ecommerce Solutions Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            <BsCart className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-secondary">Ecommerce Solutions</h2>
            <p className="text-gray-700">
              Establish a strong online presence with our ecommerce solutions.
              We design and develop ecommerce platforms that provide a seamless
              shopping experience, from user-friendly interfaces to secure
              payment gateways, ensuring your online business thrives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
