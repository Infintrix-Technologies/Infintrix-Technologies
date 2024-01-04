"use client"
import React from 'react';
import Slider from 'react-slick';
import { Image } from "@nextui-org/react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
    const PrevArrow = (props) => (
        <button
          {...props}
          className="absolute top-1/2 transform -translate-y-1/2 text-4xl text-blue-400 rounded-full w-10 h-10 flex items-center justify-center z-10"
          style={{left: "-5%"}}
        >
          <FiChevronLeft />
        </button>
      );
    
      const NextArrow = (props) => (
        <button
          {...props}
          className="absolute top-1/2 transform -translate-y-1/2 text-blue-400 text-4xl rounded-full w-10 h-10 flex items-center justify-center z-10"
          style={{right: "-4%"}}
        >
          <FiChevronRight />
        </button>
      );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slides = [
    {
      imageUrl: 'https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg',
      imageUrl1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      caption: 'CEO of Workcation',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo aaaaaaaaaa',
      name: 'Judith Black'
    },
    {
      imageUrl: 'https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg',
      imageUrl1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      caption: 'CEO of Workcation',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo aaaaaaaaaa',
      name: 'Judith Black'
    },
    {
      imageUrl: 'https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg',
      imageUrl1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      caption: 'CEO of Workcation',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo aaaaaaaaaa',
      name: 'Judith Black'
    },
    // Add more image URLs and captions as needed
  ];




  return (
    <>
      
      <div className="container w-full max-w-4xl mx-auto pb-10">
      <div className='relative'>
        <img src="/4.png" className='absolute' style={{top: "45%", left: "53%", zIndex: "-1"}} width={100} alt="" />
      <h1 className="text-center text-5xl font-bold py-8">Our Clients</h1>
        </div>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full">
            <div className='flex justify-center py-8'>
            <img src={slide.imageUrl} alt={`Slide ${index}`} className="w-full" />
            </div>
            <div className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">{slide.detail}</div>
            <div className='flex justify-center pt-4'>
                <img src={slide.imageUrl1}  alt={`Slide ${index}`} className="rounded-full h-10"/>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{slide.name}</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600">{slide.caption}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
    
  );
};

export default Carousel;
