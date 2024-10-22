import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SecondCard from './SecondCard';
import FourthCard from './FourthCard';

const CardLayout = ({data}) => {
  console.log(data)
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const totalSlides = 8; // Total number of cards
    const slidesToShow = 3; // Number of slides to show at once
    const slideWidth = 292; // Width of a single slide
    

    const nextSlide = () => {
      if (currentIndex < totalSlides - slidesToShow) {
        setCurrentIndex(currentIndex + slidesToShow);
      }
    };

    const prevSlide = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - slidesToShow);
      }
    };
  return (
    <>
      <div
        className="w-full flex justify-center gap-4 transition-transform duration-500 ease-in-out "
        style={{
          transform: `translateX(-${currentIndex * slideWidth}px)`,
        }}
      >
        {/* card */}

        {/* <SecondCard />
        <SecondCard />
        <SecondCard />
        <SecondCard />
        <SecondCard />
        <SecondCard />
        <SecondCard /> */}

        {/* {data && data.cardinfo.map((item, index) => (
          <>{item.cardNumber === 2 ? <SecondCard key={index}/> : <FourthCard key={index}/>}</>
        ))} */}
      </div>

      <div
        className={`absolute  top-1/2 right-0  w-[72px] h-[72px] z-[1] bg-[#fff] rounded-full border border-[#dfdfdf] shadow-lg cursor-pointer flex justify-center items-center ${
          currentIndex >= totalSlides - slidesToShow ? "hidden" : ""
        } transform -translate-y-1/2`}
        onClick={nextSlide}
      >
        <FaArrowRight />
      </div>

      {/* Previous button */}
      <div
        className={`absolute top-1/2 left-0 w-[72px] h-[72px] z-[1] bg-[#fff] rounded-full border border-[#dfdfdf] shadow-lg cursor-pointer flex justify-center items-center ${
          currentIndex === 0 ? "hidden" : ""
        } transform -translate-y-1/2`}
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </div>
    </>
  );
}

export default CardLayout