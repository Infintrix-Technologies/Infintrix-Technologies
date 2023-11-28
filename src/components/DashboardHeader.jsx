import React from "react";

const DashboardHeader = (props) => {
  return (
    <>
      <div className="container mx-auto my-8 p-8 bg-blue-50 text-primary shadow-md rounded-xl">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <h1 className="font-bold text-2xl">{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <div className="flex flex-col-reverse items-center">
            <h2 className="font-extrabold sm:font-bold sm:text-2xl mt-4 sm:mt-0">
              {props.business_name}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
