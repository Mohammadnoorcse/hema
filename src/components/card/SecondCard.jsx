import { motion } from 'framer-motion';
import React from 'react'

const SecondCard = ({value}) => {
    
  return (
    <div className="min-w-[292px] h-[449px]  flex flex-col gap-3 relative">
      <div className="w-full h-[400px] aspect-auto bg-[#f5f5f5]">
        <motion.img
          src={value.img}
          alt=""
          className="w-full h-full  mix-blend-multiply rounded-md"
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
      <h2
        className={
          value.tittle
            ? "text-[16px] font-[700] leading-[20px] text-[#323232] "
            : "hidden"
        }
      >
        {value.tittle}
      </h2>
      <h3
        className={
          value.subTitle
            ? "text-base font-[400] leading-[20px] text-[#323232]"
            : "hidden"
        }
      >
        {value.subTitle}
      </h3>
      <div
        className={
          value.subImg
            ? "absolute top-3 left-3 w-[5rem] h-[5rem]  rounded-md flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <img src={value.subImg} alt="" />
      </div>
    </div>
  );
}

export default SecondCard