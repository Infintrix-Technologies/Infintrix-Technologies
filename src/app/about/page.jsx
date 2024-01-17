import CompanyInfo from "@/components/CompanyInfo";
import CompanyInfoAbout from "@/components/CompanyInfoAbout";
import React from "react";
export const metadata = {
  title: "About Infintrix Technologies - Unleashing Innovation with Expertise",
  description: "Discover the story behind Infintrix Technologies, a pioneering force in web development. At Infintrix, we combine passion with expertise to redefine digital solutions. Learn about our journey, values, and the dedicated team that drives our success. From our humble beginnings to becoming a trusted name, explore how Infintrix is committed to delivering unparalleled excellence in every project. Join us on this transformative journey where innovation meets experience, and discover why Infintrix Technologies is more than a service provider – we're your digital partner for success."
};

const paage = () => {
  
  return (
    <>
      {/* <Header
        pageTitle={`About Us`}
        pageDescription={` Welcome to Infintrix Technologies, where innovation meets excellence
        in the world of web and mobile development.`}
      /> */}
      

    <div className="about_img">
      <div className="overlay"></div>
      <div className="mb-8">
    <div className="relative top-48">
      <h1 className="text-center text-5xl font-bold pt-8 text-white">About Us</h1>
      <p className="text-center text-white z-10 my-4">Welcome to Infintrix Technologies, where innovation meets excellence
        in the world of web and mobile development.</p>
    </div>
    </div>
    </div>
    <div className="container mx-auto">
    <h1 className="text-6xl font-bold py-8 text-blue-400">About Us</h1>
    <div className="md:flex justify-evenly">
      <div className="md:w-2/4">
      <h2 className="text-lg font-semibold pb-3
       text-blue-600">Our Mission & Vision</h2>
      <p className=''>At <strong>Infintrix Solution,</strong> our mission is to empower businesses by leveraging the power of technology. We aim to develop cutting-edge software solutions that streamline operations, enhance productivity, and drive growth for our clients. Through our expertise and dedication, we strive to make a positive impact on businesses across various industries.</p>
      </div>
      <div className="my-5">
        <img src="/images/mission.jpg" className='w-full md:max-w-xs' style={{borderRadius: "30px 0px 30px 0px "}} alt="" />
      </div>
    </div>
    <div className="md:flex justify-evenly">
      <div className="md:w-2/4">
      <h2 className="text-lg font-semibold pb-3 text-blue-600">Our Approach</h2>
      <p className=''>At <strong>Infintrix Solution,</strong> our approach is simple yet effective. We believe in collaborating closely with our clients throughout the project lifecycle to deliver successful software solutions. Our process involves thorough discovery, meticulous planning, user-centric design, agile development, and rigorous testing. By combining our expertise with your vision, we create innovative and tailored solutions that drive your business forward.</p>
      </div>
      <div className="my-5">
        <img src="/images/approach.jpg" className='w-full md:max-w-sm' style={{borderRadius: "30px 0px 30px 0px "}} alt="" />
      </div>
    </div>
    </div>
    <div className="my-5">
    <CompanyInfo/>
    </div>
    <div className='bg-blue-400'>
      <div className="container mx-auto">
    <div className="md:flex justify-around items-center py-10">
      <div>
        <img src="/images/timely.jpg" className='w-full md:max-w-sm' style={{borderRadius: "30px 0px 30px 0px "}} alt="" />
      </div>
      <div className="md:w-2/4 ps-5">
        <p className="py-5 text-white">Ensure High Availability of Your Services</p>
        <h1 className="lg:text-6xl text-4xl font-bold pb-4 text-white">Timely Service</h1>
        <p className="text-white">Provide users with appropriate view and access permissions to request, problems, changes, contracts, assets, solutions, and reports with our experienced professionals.</p>
      </div>
    </div>
        </div>
    </div>
      
    </>
  );
};

export default paage;
