// Services.js

import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>

        {/* Web Application Development Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Web Application Development
          </h2>
          <p className="text-gray-700">
            We specialize in creating robust and scalable web applications
            tailored to meet your business requirements. From dynamic websites
            to complex web solutions, our team is committed to delivering
            high-quality and user-friendly experiences.
          </p>
        </section>

        {/* Mobile Application Development Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Mobile Application Development
          </h2>
          <p className="text-gray-700">
            Harness the power of mobile technology with our mobile application
            development services. Whether it&apos;s iOS or Android, we design and
            develop native and cross-platform mobile applications that provide
            seamless and engaging user experiences.
          </p>
        </section>

        {/* Enterprise Solutions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Enterprise Solutions</h2>
          <p className="text-gray-700">
            Elevate your business operations with our enterprise solutions. We
            offer tailor-made software solutions to streamline processes,
            enhance collaboration, and improve overall efficiency within your
            organization.
          </p>
        </section>

        {/* Artificial Intelligence Solutions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Artificial Intelligence Solutions
          </h2>
          <p className="text-gray-700">
            Embrace the future with our artificial intelligence solutions. From
            machine learning algorithms to natural language processing, we
            leverage cutting-edge AI technologies to help businesses gain
            valuable insights, automate tasks, and make data-driven decisions.
          </p>
        </section>

        {/* Desktop Applications Development Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Desktop Applications Development
          </h2>
          <p className="text-gray-700">
            Our desktop application development services cater to businesses
            seeking powerful and efficient solutions for Windows, macOS, or
            Linux environments. We create desktop applications that align with
            your specific needs and enhance productivity.
          </p>
        </section>

        {/* Ecommerce Solutions Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Ecommerce Solutions</h2>
          <p className="text-gray-700">
            Establish a strong online presence with our ecommerce solutions. We
            design and develop ecommerce platforms that provide a seamless
            shopping experience, from user-friendly interfaces to secure payment
            gateways, ensuring your online business thrives.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Services;
