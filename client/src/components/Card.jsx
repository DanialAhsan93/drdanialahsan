import React from 'react';
import Bookbutton from './Bookbutton';

function Card({item, Icon}) {

  return (
    <div key={item.id} className='lg:w-[20%] sm:w-[40%] w-full h-[100%] lg:p-4 sm:p-2 p-3 border border-1 bg-white rounded-xl sm:my-3 my-3'>

      <div className="relative flex flex-wrap w-[100%] 2xl:h-[380px] lg:h-[220px] sm:h-[120px] h-[220px]">
        <img src={item.img} alt="backImage" className="rounded-xl w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-[linear-gradient(rgba(75,103,145,0.5),rgba(75,103,145,0.5))]"></div>
      </div>

      <div className='flex flex-wrap justify-center items-center lg:-translate-y-10 sm:-translate-y-6 -translate-y-10 '>
        <div className='flex justify-center items-center lg:w-[85px] lg:h-[85px] sm:w-[55px] sm:h-[55px] w-[85px] h-[85px] bg-white  rounded-full '>
          <div className='flex justify-center items-center lg:w-[70px] lg:h-[70px] sm:w-[40px] sm:h-[40px] w-[70px] h-[70px]  rounded-full bg-[#27477D]'>
            <Icon className='lg:text-[30px] sm:text-[20px] text-[20px] text-white' />
          </div>
        </div>

        <h3 className='w-full text-center lg:text-xl sm:text-[16px] text-xl text-[#27477D] lg:pt-2 sm:py-0 pt-2'>
          {item.title.length > 14 ? `${item.title.slice(0, 14)}...` : item.title}
        </h3>

        <p className='text-gray-500 text-center pt-2 lg:text-[14px] sm:text-[12px] text-xl'>
          {item.description}
        </p>

        <div className='w-full flex justify-center lg:mt-2 mt-0'>
          <Bookbutton text={'Book Now'} />
        </div>

      </div>


    </div>
  )
}

export default Card