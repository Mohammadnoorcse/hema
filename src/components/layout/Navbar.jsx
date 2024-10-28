import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { easeInOut, motion } from 'framer-motion';
import { catedata } from '../demo/Data';

const Navbar = () => {
    const [cateHover, setCateHover] = useState(false);
    // const [cardHover, setCardHover] = useState(false);
    const [cardHover, setCardHover] = useState('');
    const [cardContainer, setCardContainer] = useState(false); 
    
   
    const handleMouseLeave = () =>{
        setCardContainer(false);
        // setCateHover(false);
        setCateHover('');
       
    }

 

   
  return (
    <>
      {/* top navbar */}
      <div
        className={`w-full h-[41px] lg:flex justify-center items-center hidden  ${
          cateHover ? "bg-[#929292] ease-linear duration-300" : ""
        }`}
      >
        <div className="custom flex justify-between items-center">
          {/* left side */}
          <div className="flex  items-center text-sm text-[#323232] font-semibold leading-[16px]">
            <Link to="/" className="group relative mr-[24px]">
              <span className="text-[14px] font-[600] leading-[16px] text-[#323232] group-hover:text-black">
                fotoservice
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[0.5s] ease-in"></span>
            </Link>
            <Link to="/" className="group relative mr-[24px]">
              <span className="text-[14px] font-[600] leading-[16px] text-[#323232] group-hover:text-black ">
                tickets & deals
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[0.5s] ease-in"></span>
            </Link>
            <Link to="/" className="group relative mr-[24px]">
              <span className="text-[14px] font-[600] leading-[16px] text-[#323232] group-hover:text-black ">
                verzekeringen
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[0.5s] ease-in"></span>
            </Link>
            <Link to="/" className="group relative">
              <span className="text-[14px] font-[600] leading-[16px] text-[#323232] group-hover:text-black ">
                inspiratie
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[0.5s] ease-in"></span>
            </Link>
          </div>
          {/* right side */}
          <div className="flex  items-center text-sm text-[#323232] font-semibold leading-[16px]">
            <Link to="/" className="group relative mr-[24px]">
              <span className="text-[14px] font-[600] leading-[16px] text-[#323232] group-hover:text-black opacity-[0.9]">
                winkels
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[0.5s] ease-in"></span>
            </Link>
            <Link to="/" className="group relative mr-[24px]">
              <span className="text-[14px] font-[600] leading-[16px] text-[#323232] group-hover:text-black opacity-[0.9]">
                klantenpas
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[0.5s] ease-in"></span>
            </Link>
            <Link to="/" className="group relative">
              <span className="text-[14px] font-[600] leading-[16px] text-[#323232] group-hover:text-black opacity-[0.9]">
                klantenservice
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[0.5s] ease-in"></span>
            </Link>
          </div>
        </div>
      </div>
      {/* main navbar */}
      <div
        className={`w-full  flex justify-center items-center mt-4 lg:mt-0 sticky top-0 z-50 bg-white py-4 ${
          cateHover ? "shadow-md bg-white z-20" : ""
        }`}
      >
        <div className="custom flex justify-between items-center">
          {/* left */}
          <div className="flex gap-[43px] items-center">
            <Link to="/" className="md:w-[56px] md:h-[56px] w-[48px] h-[48px]">
              <img
                src="https://www.hema.nl/on/demandware.static/Sites-HemaNL-Site/-/default/dw6caf9454/images/logo.svg"
                alt=""
                className="w-full h-full rounded-sm "
              />
            </Link>
            <div
              onMouseEnter={() => setCateHover(true)}
              className="lg:flex hidden items-center gap-2 cursor-pointer  min-w-[48px] h-[48px]"
            >
              <span className="text-[25px] font-bold">
                <IoIosMenu />
              </span>
              <span className="text-[15px] font-semibold text-[#323232] opacity-[0.9]">
                categorieën
              </span>
              <span className="text-[12px] text-[#323232] opacity-[0.9]">
                <FaAngleDown />
              </span>
            </div>
          </div>
          {/* middle */}
          <div className="w-full h-[44px]  mx-[33px] bg-[#efefef] rounded-full md:flex hidden items-center gap-4 pr-[24px] hover:bg-[#DFDFDF] duration-300 ease-in-out">
            <input
              type="text"
              placeholder="waar ben je naar op zoek?"
              className="w-full h-full bg-transparent rounded-full border-none py-[12px] pl-[24px] text-[#767676] text-base font-normal outline-none"
            />
            <span className="text-[18px] text-[#323232]">
              <IoSearch />
            </span>
          </div>
          {/* right */}
          <div className="flex items-center">
            <div className="md:w-[116px] md:h-[40px] w-[48px] h-[48px] rounded-lg hover:bg-[#F5F5F5] md:py-[10px] md:px-[12px] md:text-base text-xl font-semibold text-[rgb(50,50,50)] flex gap-1 items-center justify-center opacity-[0.9] cursor-pointer duration-300 ease-in-out leading-[16px]">
              <span className="">
                <FaRegUser />
              </span>
              <span className="md:flex hidden">inloggen</span>
            </div>
            <div className="w-[48px] h-[48px] rounded-lg hover:bg-[#F5F5F5]  text-xl font-semibold text-[rgb(50,50,50)] md:flex hidden gap-1 items-center justify-center opacity-[0.9] cursor-pointer duration-300 ease-in-out">
              <span className="">
                <FaRegHeart />
              </span>
            </div>
            <div className="w-[48px] h-[48px] rounded-lg hover:bg-[#F5F5F5]  text-xl font-semibold text-[rgb(50,50,50)] flex gap-1 items-center justify-center opacity-[0.9] cursor-pointer duration-300 ease-in-out">
              <span className="">
                <MdOutlineShoppingBag />
              </span>
            </div>
            <div className="w-[48px] h-[48px] rounded-lg hover:bg-[#F5F5F5]  text-xl font-semibold text-[rgb(50,50,50)] lg:hidden flex gap-1 items-center justify-center opacity-[0.9] cursor-pointer duration-300 ease-in-out">
              <span className="">
                <IoIosMenu />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* category hover */}
      <motion.div
        className={
          cateHover
            ? "w-full bg-white z-10 absolute lg:flex hidden justify-center p-4 shadow-lg"
            : "hidden"
        }
        initial={{ height: "0%", opacity: 0 }}
        animate={cateHover ? { height: "100%", opacity: 1 } : {}}
        exit={{ height: "0%", opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div
          className="custom border-t flex  "
          onMouseEnter={() => setCardContainer(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* left */}

          <div className="flex flex-col gap-0 border-r">
            <h2 className="leading-[20px] font-semibold text-base pt-[15px] mb-[16px]">
              categorieën
            </h2>
            {/* card */}
            {catedata.map((value, index) => (
              <motion.div
                // onMouseEnter={() => setCardHover(true)}
                // onMouseLeave={() => setCardHover(false)}
                onMouseEnter={() => setCardHover(index)}
                className={
                  "w-[316px]  p-[8px] flex justify-between items-center hover:bg-[#efefef] rounded-md cursor-pointer duration-300 ease-in-out"
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: easeInOut, delay: 1 }}
                key={value._id}
              >
                <div className="flex gap-[16px] items-center">
                  <img
                    src={value.img}
                    alt=""
                    className="w-[40px] rounded-[90%]"
                  />
                  <span className="text-base leading-[20px] font-normal">
                    {value.name}
                  </span>
                </div>
                <div className={cardHover === index ? "flex" : "hidden"}>
                  <MdKeyboardArrowRight />
                </div>
              </motion.div>
            ))}
          </div>
          {/* right */}
          <div
            className={
              cardHover > 0 ? "flex flex-col gap-0 border-r" : "hidden"
            }
          >
            {/* card */}
            {catedata[Number(cardHover)] &&
              catedata[Number(cardHover)].item1.map((value, index) => (
                <motion.div
                  // onMouseEnter={() => setCardHover(true)}
                  // onMouseLeave={() => setCardHover(false)}
                  // onMouseEnter={() => setCardHover(index)}
                  className={
                    "w-[316px] h-[48px] px-[8px] flex justify-between items-center hover:bg-[#efefef] rounded-md cursor-pointer duration-300 ease-in-out"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, ease: easeInOut, delay: 1 }}
                  key={index}
                >
                  {index === 0 ? (
                    <>
                      <h2 className="leading-[20px] font-semibold text-base pt-[15px] mb-[16px]">
                        {value.name}
                      </h2>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-[16px] items-center">
                        <span className="text-base leading-[20px] font-normal">
                          {value.name}
                        </span>
                      </div>
                      <div
                      // className={cardHover === index ? "flex" : "hidden"}
                      >
                        <MdKeyboardArrowRight />
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
      {/* mobaile search bar */}
      <div className="w-full flex justify-center items-center mt-1">
        <div className="custom ">
          <div className="w-full h-[44px]  bg-[#efefef] rounded-full flex md:hidden items-center gap-4 pr-[24px] hover:bg-[#DFDFDF] duration-300 ease-in-out">
            <input
              type="text"
              placeholder="waar ben je naar op zoek?"
              className="w-full h-full bg-transparent rounded-full border-none py-[12px] pl-[24px] text-[#767676] text-base font-normal outline-none"
            />
            <span className="text-[18px] text-[#323232]">
              <IoSearch />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar