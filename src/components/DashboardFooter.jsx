import React from "react";
import { Image } from "@nextui-org/react";
import { MdOutlineFacebook } from "react-icons/md";
import {
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
const DashboardFooter = () => {
  return (
    <>
      <div className="bg-secondary flex flex-col sm:flex-row sm:justify-around p-5 mt-8">
        <div className="flex flex-col left text-primary items-center">
          <div className="logo-footer bg-primary p-2 rounded-xl w-36">
            <Image alt="kindly" src="/logo.png" width={140} />
          </div>
          <div className="social-icons flex text-white text-2xl my-8 space-x-3">
            <BsFacebook />
            <BsTwitterX />
            <BsInstagram />
            <BsYoutube />
          </div>
        </div>

        <div className="flex flex-col text-white my-1 sm:items-start items-center">
          <div className="flex items-center">
            <span className="mr-2 text-lg">
              <BsEnvelope />
            </span>
            abc@gmail.com
          </div>
          <p className="w-56 my-2 sm:text-start text-center">
            Lorem Ipsum, Lorem Ipsum and others are simply wrappers around your
            ns dufiy doshfl
          </p>
        </div>
      </div>
    </>
  );
};

export default DashboardFooter;
