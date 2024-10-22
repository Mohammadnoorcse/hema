import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const FourthCard = ({value}) => {
  return (
    <div className="min-w-[320px] h-[520px] flex flex-col gap-3">
      <div className=" h-[320px]">
        <img src={value.img} alt="" className="w-full h-full" />
      </div>
      <div
        className={`flex flex-col gap-2 p-[16px] text-[white] rounded-bl-md rounded-br-md 
        }`}
        style={{ backgroundColor: value.bg }}
      >
        <h3
          className={
            value.tittle ? "text-[23px] font-bold leading-[32px]" : "hidden"
          }
        >
          {value.tittle}
        </h3>
        <p
          className={
            value.subTitle ? "text-base font-normal text-justify" : "hidden"
          }
        >
          {value.subTitle}
        </p>
        <span
          className={`w-[56px] h-[56px] border-2 border-[white] rounded-full mt-[24px] flex justify-center items-center hover:bg-[white] hover:text-[black] cursor-pointer duration-300 ease-in-out`}
        >
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
}

export default FourthCard