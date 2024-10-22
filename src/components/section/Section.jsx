import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CardLayout from '../card/CardLayout';

const Section = ({value}) => {
     const [thirdHover, setThirdHover] = useState(false);
    //  console.log(value)
    
  return (
    <div
      className={`w-full flex justify-center mt-2 overflow-hidden ${
        Number(value._id) === 1 ? "mt-2" : "mt-[5rem]"
      }`}
    >
      <div className="custom  flex flex-col gap-4 ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] leading-[30px] font-bold text-[#323232]">
              {value.leftHeader}
            </h2>
            <h3 className={value.leftSpan ? "text-base font-normal" : "hidden"}>
              {value.leftSpan}
            </h3>
          </div>
          <div
            className={value.rightButton ? "sm:flex items-center gap-2 hidden" : "hidden"}
          >
            <span className="font-semibold text-base ">bekijk alles</span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>

        {/* start cart */}
        <div
          className={`w-full flex  relative mt-[2rem] ${
            thirdHover ? "" : "overflow-hidden"
          }`}
          onMouseEnter={() => setThirdHover(true)}
          onMouseLeave={() => setThirdHover(false)}
        >
          <CardLayout data={value} />
       
        </div>
      </div>
    </div>
  );
}

export default Section