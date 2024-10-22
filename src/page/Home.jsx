

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import img1 from "../assets/img1.jpg"
import CardLayout from "../components/card/CardLayout";
import FourthCard from "../components/card/FourthCard";
import Section from "../components/section/Section";
import { circleCardData, secondSectionData, sectionLayoutData } from "../components/demo/Data";
import CircleCard from "../components/card/CircleCard";


const Home = () => {
  const [isHover, setIsHover] = useState(false);
  const [scondHover, setSecondHover] = useState(false);
  const [thirdHover, setThirdHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [slidesToShow, setSlidesToShow] = useState(7);
  const totalSlides = 21; // Total number of cards
  const slidesToShow = 7; // Number of slides to show at once
  const slideWidth = 162; // Width of a single slide

  

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
      {/* section-1 */}
      <div className="w-full flex justify-center mt-4 overflow-hidden">
        <div
          className={`custom  pt-4  flex gap-4 relative  ${
            isHover ? "" : "overflow-hidden"
          }`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div
            className="w-full flex gap-4 transition-transform duration-500 ease-in-out  "
            style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
          >
            {/* Card rendering */}
            {circleCardData.map((value,index) => (
              <CircleCard key={index} value={value} />
            ))}
            
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
        </div>
      </div>
      {/* section-2 */}
      <div className="w-full flex justify-center mt-4 overflow-hidden">
        <div className="custom relative pt-4 flex flex-col items-center">
          <div className="w-full lg:h-[620px] h-[800px] rounded-2xl bg-[#CE8DFF] mt-[6rem] relative">
            <div className="absolute lg:top-[5rem] sm:top-[27rem] sm:left-[4rem] top-[24rem] left-2 flex flex-col gap-4">
              <h2 className="sm:text-[44px] text-[30px] sm:leading-[54px] leading-none font-bold text-[#323232] lg:w-[20rem]">
                alles om van je huis een vrolijk thuis te maken
              </h2>
              <h3 className="text-base leading-[20px] font-normal text-wrap ">
                van kleurrijke kaarsen tot beddengoed om in weg te dromen
              </h3>
              <button className="sm:w-[20rem] w-[10rem] text-[#323232] border-2 border-[#323232] rounded-[8px] py-[8px] text-base font-bold">
                ontdek wonen & slapen
              </button>
            </div>
            <div className=" absolute top-[-4rem] lg:right-[4rem]  px-[1rem] ">
              <img
                src={img1}
                alt=""
                className="xl:w-[40rem] lg:w-[35rem] lg:h-[35rem] rounded-md w-full sm:h-[30rem] h-[25rem] "
              />
            </div>
          </div>

          <div
            className={`w-[95%] flex justify-center relative -top-16   ${
              scondHover ? "" : "overflow-hidden"
            }`}
            onMouseEnter={() => setSecondHover(true)}
            onMouseLeave={() => setSecondHover(false)}
          >
            {/* <CardLayout  data={secondSectionData}/> */}
            {secondSectionData.map((value, index) => (
              <CardLayout key={index} data={value} />
            ))}
          </div>
        </div>
      </div>
      {/* other section */}
      {sectionLayoutData.map((value) => (
        <Section key={value._id} value={value} />
      ))}
    </>
  );
};

export default Home;












