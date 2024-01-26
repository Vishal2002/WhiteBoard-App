import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdUnlock } from "react-icons/io";
import { PiHandPalmBold } from "react-icons/pi";
import { IoMdSquareOutline } from "react-icons/io";
import { FaArrowPointer } from "react-icons/fa6";
import { LuDiamond } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { CiEraser } from "react-icons/ci";
import { RiGalleryFill } from "react-icons/ri";
import { TbTypography } from "react-icons/tb";
import { BsEraserFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className='mt-3 grid grid-cols-1 md:grid-cols-4 gap-8 bg-green-300'>
    <div className="p-4 col-span-1">
      <div className=''>
        <button style={{ border: '1px solid' }} className='rounded-xl h-full p-3'>
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  
    <div className="p-4 col-span-2">
      <div style={{boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} className='h-11 w-full rounded-xl bg-white '>
        <div className='flex justify-around p-4'>
        <div>
        <IoMdUnlock/>
        </div>

        <div>
        <PiHandPalmBold/>
        </div>

        <div>
        <FaArrowPointer/>
        </div>

        <div>
          <IoMdSquareOutline/>
        </div>

        <div>
          <LuDiamond/>
        </div>
        <div>
         <FaRegCircle/>
        </div>
        <div>
         <FaArrowRightLong/>
        </div>
        <div>
        <GoPencil/>
        </div>
        <div>
          <TbTypography/>
        </div>
        <div>
          <RiGalleryFill/>
        </div>
        <div>
          <BsEraserFill/>
        </div>
        </div>
        
      </div>
    </div>
  
    <div className="bg-gray-400 p-4 col-span-1">
      3
    </div>
  </div>
  
  )
}

export default Navbar
