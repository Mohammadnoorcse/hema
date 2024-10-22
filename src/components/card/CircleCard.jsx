import { motion } from 'framer-motion';
import React from 'react'

const CircleCard = ({value}) => {
    
  return (
    <div className="min-w-[147px]  h-[180px] px-[8px] flex flex-col gap-4 justify-center items-center">
      <div className="rounded-full aspect-auto bg-[#f5f5f5]">
        <motion.img
          src={value.img}
          alt=""
          className="w-full h-full rounded-full mix-blend-multiply"
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <span className="font-semibold text-[14px] leading-[16px] text-[#323232]">
        {value.titile}
      </span>
    </div>
  );
}

export default CircleCard