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
  const servicesList = [
    {
      name: "Web Application Development",
      excerpt:
        "We specialize in creating robust and scalable web applications tailored to meet your business requirements. From dynamic websites to complex web solutions, our team is committed to delivering high-quality and user-friendly experiences.",
      icon: <MdCode className="text-4xl mb-4" />,
    },
    {
      name: "Mobile Application Development",
      excerpt:
        "Harness the power of mobile technology with our mobile application development services. Whether it&apos;s iOS or Android, we design and develop native and cross-platform mobile applications that provide seamless and engaging user experiences.",
      icon: <MdSmartphone className="text-4xl mb-4" />,
    },
    {
      name: "ERP Solutions",
      excerpt:
        "Elevate your business operations with our enterprise solutions. We offer tailor-made software solutions to streamline processes, enhance collaboration, and improve overall efficiency within your organization.",
      icon: <MdSettings className="text-4xl mb-4" />,
    },
    {
      name: "Artificial Intelligence Solutions",
      excerpt:
        "Embrace the future with our artificial intelligence solutions. From machine learning algorithms to natural language processing, we leverage cutting-edge AI technologies to help businesses gain valuable insights, automate tasks, and make data-driven decisions.",
      icon: <GiArtificialIntelligence className="text-4xl mb-4" />,
    },
    {
      name: "Desktop Applications Development",
      excerpt:
        "Our desktop application development services cater to businesses seeking powerful and efficient solutions for Windows, macOS, or Linux environments. We create desktop applications that align with your specific needs and enhance productivity.",
      icon: <MdOutlineDesktopMac className="text-4xl mb-4" />,
    },

    {
      name: "Ecommerce Solutions",
      excerpt:
        "Establish a strong online presence with our ecommerce solutions. We design and develop ecommerce platforms that provide a seamless shopping experience, from user-friendly interfaces to secure payment gateways, ensuring your online business thrives.",
      icon: <BsCart className="text-4xl mb-4" />,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-4xl font-bold my-2">Our Services</h1>
        <p className="text-gray-600 my-1 text-center">
          Check our services we are expert in
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
          {servicesList.map((service) => {
            return (
              <div
                key={service.name}
                className="bg-gray-50 hover:bg-gray-100 border-secondary border-2 rounded-xl mx-2 my-2 p-4 cursor-pointer transition duration-300 ease-in-out transform sm:hover:scale-105"
              >
                {service.icon}
                <h2 className="text-2xl font-bold mb-4 text-secondary">
                  {service.name}
                </h2>
                <p className="text-gray-700">{service.excerpt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
