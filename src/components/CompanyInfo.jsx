"use client"
import React from 'react'
import CountUp from 'react-countup';
export default function CompanyInfo() {
  return (
    <div>
       <div className="bg-secondary">
          <div className="md:flex justify-evenly">
            <div className="py-8">
              <h1 className="text-white text-6xl text-center font-sans"><CountUp delay={2} start={1} duration={3} end={10} />+</h1>
              <h6 className="text-white text-lg pt-2 text-center font-semibold font-sans">Our Team</h6>
            </div>
            <div className="py-8">
              <h1 className="text-white text-6xl text-center font-sans"><CountUp delay={2} start={1} duration={4} end={50} />+</h1>
              <h6 className="text-white text-lg pt-2 text-center font-semibold font-sans">Project Delivered</h6>
            </div>
            <div className="py-8">
              <h1 className="text-white text-6xl text-center font-sans">5+</h1>
              <h6 className="text-white text-lg pt-2 text-center font-semibold font-sans">Ongoing Projects
              </h6>
            </div>
            <div className="py-8">
              <h1 className="text-white text-6xl text-center font-sans"><CountUp delay={2} start={1} duration={5} end={98} />%</h1>
              <h6 className="text-white text-lg pt-2 text-center font-semibold font-sans">On-Time Delivered</h6>
            </div>
          </div>
          </div> 
    </div>
  )
}
