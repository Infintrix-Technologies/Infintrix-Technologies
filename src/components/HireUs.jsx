import React from 'react'
import { Button } from "@nextui-org/react";
import { IoMailSharp } from "react-icons/io5";

const HireUs = () => {
  return (
    <>
    <div className='mt-52 mb-80 sm:mb-64 lg:mb-2'>

      <div className='md:container mx-auto'>
        <div className='relative'>
        <div className='absolute' style={{backgroundColor: "#6e8ec9", borderRadius: "50px 0px 50px 0px", top: "-7rem"}}>
      <div className="py-16">
          <p className="pb-3 pl-4 text-white">Hire Us Now!</p>
          <div className="md:flex justify-between items-center px-4">
          <h1 className="text-white font-bold text-xl md:text-3xl md:w-3/4">Get project estimates and reach out to us via email to kick-start your journey !</h1>
      <div className="flex justify-center mt-5 md:mt-0">
          <Button className="px-28 md:px-3" color="success">Mail Us <span><IoMailSharp className="text-white"/></span>
</Button>
</div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default HireUs
