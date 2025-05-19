import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";


function Header() {
  return (
    <div className='bg-[#27477D]'>
      <div className='border-b-black py-2'>
        <div className='lg:flex sm:max-w-7xl mx-auto justify-between text-[12px] lg:text-[14px] text-white space-y-1 lg:space-y-0'>

          <div className='flex items-center lg:ml-0 ml-2'>
            <span className='rounded-2xl p-[6px]  bg-[#06CCEC] mr-2 '>
              <MdOutlineMailOutline />
            </span>
            paincareclinic@gmail.com
          </div>
          <div className='flex items-center lg:ml-0 ml-2'>
            <span className='rounded-2xl p-[6px]  bg-[#06CCEC] mr-2 '>
              <IoLocationOutline />
            </span>
            City hospital, Hospital road, Rahim Yar Khan
          </div>
          <div className='flex items-center lg:ml-0 ml-2'>
            <span className='rounded-2xl p-[6px] bg-[#06CCEC] mr-2 '>
              <GoClock />
            </span>
            Every week Monday, 3:00 - 7:00pm
          </div>

        </div>

      </div>

    </div>

  )
}

export default Header