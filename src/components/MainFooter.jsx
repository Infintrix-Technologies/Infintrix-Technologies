import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { SiUpwork } from "react-icons/si";
import HireUs from "./HireUs";





const MainFooter = () => {
  return (
    <>
    
    {/* <HireUs/> */}
    
    <footer className="bg-secondary text-white p-4">
      <div className="container mx-auto">
       
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div>
          <div className="flex pt-40 md:pt-28 lg:pt-32">
            <Link href='/'>
          <img alt="kindly" src="/infintrix-logo-lanscapeview.png" width={200} />
          </Link>
          </div>
          <div className="py-5">
          <p className="pb-5">We are a software development and engineering solutions agency that is your bridge to the digital pinnacle.</p>
          <p><span>We merge ambition with innovation, turning the impossible into your next big achievement.</span></p>
          
          </div>
          </div>

          <div>
            <div className="lg:ps-14 md:pt-28 lg:pt-32">
            <h1 className="text-3xl pb-5">Contact Us</h1>
            <div className="flex">
            <MdEmail className="text-2xl pr-1" />
            <p className="pb-4"><a href="">info@infintrix.com</a></p>
            </div>
            <div className="flex">
            <span><CiLocationOn className="pr-1 text-2xl" /></span>
            <p>Super Town, Lahore, Punjab Pakistan</p>
            </div>
            <h1 className="text-3xl font-bold pt-7">Socials</h1>
            <div className="flex gap-5 py-4">
              <Link href="https://www.facebook.com/infintrixtech?mibextid=zLoPMf">
            <FaFacebook className="text-2xl" />
              </Link>
              <Link href={"https://pk.linkedin.com/company/infintrix"}>
            <FaLinkedin className="text-2xl" />
              </Link>
              <Link href={"https://www.instagram.com/infintrix.tech/?igsh=ZmtlbTZ1b3dqNXNr"}>
            <AiFillInstagram className="text-2xl" />
            </Link>
            <Link href={"https://www.upwork.com/agencies/1694374709939769344/"}>
            <SiUpwork className="text-2xl" />

            </Link>
            

            </div>

           

            </div>
          </div>
        </div>
        <hr className="border-t border-white-600 my-8" />
        <div className="flex flex-col sm:flex-row sm:justify-center">
          <small>
            &copy; 2023{" "}
            <Link className="font-bold" href={"https://infintrixtech.com"}>
              Infintrix.
            </Link>{" "}
            All rights reserved.
          </small>
        </div>
      </div>
    </footer>
    </>
  );
};

export default MainFooter;
