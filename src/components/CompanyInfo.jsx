"use client"
import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function CompanyInfo() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it triggers only once
    rootMargin: '-50px 0px', // Adjust rootMargin as needed for the trigger point
  });
  return (
    <div>
      <div className="bg-secondary">
        <div className="md:flex justify-evenly">
          <div className="py-8">
            <h1 className="text-white text-6xl text-center font-sans"><div ref={ref}>
              {inView && <CountUp delay={1} start={1} duration={2} end={10} />}+
            </div></h1>
            <h6 className="text-white text-lg pt-2 text-center font-semibold font-sans">Our Team</h6>
          </div>
          <div className="py-8">
            <h1 className="text-white text-6xl text-center font-sans"><div ref={ref}>
              {inView && <CountUp delay={1} start={1} duration={3} end={50} />}+
            </div></h1>
            <h6 className="text-white text-lg pt-2 text-center font-semibold font-sans">Project Delivered</h6>
          </div>
          <div className="py-8">
            <h1 className="text-white text-6xl text-center font-sans">5+</h1>
            <h6 className="text-white text-lg pt-2 text-center font-semibold font-sans">Ongoing Projects
            </h6>
          </div>
          <div className="py-8">
            <h1 className="text-white text-6xl text-center font-sans"><div ref={ref}>
              {inView && <CountUp delay={1} start={1} duration={3} end={98} />}%
            </div></h1>
            <h6 className="text-white text-lg pt-2 text-center font-semibold font-sans">On-Time Delivered</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
