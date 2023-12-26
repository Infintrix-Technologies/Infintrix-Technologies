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
// import { pb } from "@/lib/pb_conn";
import Header from "@/components/Header";



const ServicesPage = async () => {
  // const records = await pb.collection("services").getFullList({
  //   sort: "-created",
  // });
  // console.log(records)
  const servicesList = [
    {
      name: "Web Application Development",
      excerpt:
        "We specialize in creating robust and scalable web applications tailored to meet your business requirements. From dynamic websites to complex web solutions, our team is committed to delivering high-quality and user-friendly experiences.",
      icon: ("https://systemplus.wpengine.com/wp-content/uploads/2020/12/Web-Applications.svg"),
    },
    {
      name: "Mobile Application Development",
      excerpt:
        "Harness the power of mobile technology with our mobile application development services. Whether it&apos;s iOS or Android, we design and develop native and cross-platform mobile applications that provide seamless and engaging user experiences.",
      icon: ("https://systemplus.wpengine.com/wp-content/uploads/2020/12/Web-Applications.svg"),
    },
    {
      name: "ERP Solutions",
      excerpt:
        "Elevate your business operations with our enterprise solutions. We offer tailor-made software solutions to streamline processes, enhance collaboration, and improve overall efficiency within your organization.",
      icon: ("https://systemplus.wpengine.com/wp-content/uploads/2020/12/Web-Applications.svg"),
    },
    {
      name: "Artificial Intelligence Solutions",
      excerpt:
        "Embrace the future with our artificial intelligence solutions. From machine learning algorithms to natural language processing, we leverage cutting-edge AI technologies to help businesses gain valuable insights, automate tasks, and make data-driven decisions.",
      icon: ("https://systemplus.wpengine.com/wp-content/uploads/2020/12/Web-Applications.svg"),
    },
    {
      name: "Desktop Applications Development",
      excerpt:
        "Our desktop application development services cater to businesses seeking powerful and efficient solutions for Windows, macOS, or Linux environments. We create desktop applications that align with your specific needs and enhance productivity.",
      icon: ("https://systemplus.wpengine.com/wp-content/uploads/2020/12/Web-Applications.svg"),
    },

    {
      name: "Ecommerce Solutions",
      excerpt:
        "Establish a strong online presence with our ecommerce solutions. We design and develop ecommerce platforms that provide a seamless shopping experience, from user-friendly interfaces to secure payment gateways, ensuring your online business thrives.",
      icon: ("https://systemplus.wpengine.com/wp-content/uploads/2020/12/Web-Applications.svg"),
    },
  ];
  return (
    <>
      <Header
        pageTitle={`Our Services`}
        pageDescription={`Check our services we are expert in`}
      />
      <div className="container mx-auto">
        <div className="sm:flex flex-wrap gap-5">
      {servicesList.map((service) => {
            return (
              <div className="md:w-1/3 sm:w-full rounded-lg my-4">

                <div className="py-6 px-7 rounded-lg shadow-lg hover:shadow-green-500">
                  <div className="flex justify-center mb-5">
                    <img src={service.icon} />
                  </div>
                  <h1 className="text-center font-bold mb-4">{service.name}</h1>
                  <p className="text-center">{service.excerpt}</p>
                </div>

              </div>
            );
          })}
          </div>
      </div>
      
      {/* <div className="container mx-auto">
        <div className="sm:flex flex-wrap gap-5">
          {
            Array(6).fill(
              <div className="md:w-1/3 sm:w-full rounded-lg my-4">

                <div className="py-6 px-7 rounded-lg shadow-lg hover:shadow-red-700">
                  <div className="flex justify-center mb-5">
                    <img src="https://systemplus.wpengine.com/wp-content/uploads/2020/12/Web-Applications.svg" alt="Web Development" />
                  </div>
                  <h1 className="text-center mb-4">Web Development</h1>
                  <p className="text-center">Transform your business digitally & ensure a competitive edge by leveraging our low-risk CSD approach.</p>
                </div>

              </div>

            )
          }

        </div>
      </div> */}
    </>
  );
};

export default ServicesPage;
