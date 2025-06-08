import React, { useEffect, useState } from 'react';
import '../../pages/home.css';
import Bookbutton from '../Bookbutton.jsx';
import { useSelector } from 'react-redux';
import {
  back,
  shoulder,
  knee,
  backblue,
  shoulderblue,
  kneeblue,
  backgroundoperation,
  bgdotsblack,
  bgdotswhite,
  logo,
  logoDark,
  doctor,
  newdoc,
} from '../../data/index.js';
import Herotitle from '../animation/Herotitle.jsx';

function Herosectionhome() {

  const { theme } = useSelector(state => state.theme);


  return (
    <div className='flex justify-center sm:flex-row flex-col overflow-hidden sm:min-h-[80vh] relative'>

      <div className='flex flex-col justify-center sm:w-[50%]  sm:p-0 pl-5 min-h-[40vh]'>

        <div className='relative'>
          <Herotitle
            color={`${theme === 'light' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800' :'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800'} `}
            size={'lg:text-5xl sm:text-2xl text-3xl'}
            sizePara={'lg:text-[28px] text-[16px]'}
            sizeUrdu={'lg:text-4xl sm:text-2xl'}
          />
          <div className=' absolute lg:bottom-8 lg:left-0 md:bottom-2 md:left-0 sm:bottom-3 sm:left-0 bottom-6 sleft-0'>
            <Bookbutton text={'Book Now'} />
          </div>
        </div>

        <div className={`w-[350px] h-[350px] ${theme === 'light' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800' : 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800'}  rounded-full absolute lg:-left-[200px] lg:-bottom-[225px] sm:-left-[200px] sm:-bottom-[280px]  animate-slide-diagonal hidden sm:block`}></div>
        <div className={`w-[350px] h-[350px] ${theme === 'light' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800' : 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800'} rounded-full absolute lg:-left-[50px] lg:-bottom-[270px] sm:-left-[50px] sm:-bottom-[300px] animate-slide-diagonal-2 hidden sm:block`}></div>

        <div className='sm:block hidden'>
          <div className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold flex items-center space-x-2 absolute bottom-4 left-[10px] '>
            <img src={theme === 'light' ? logoDark : logo} alt="logo" className='w-[40px] h-[40px] rounded-full' />
            <div className='text-gray-200 dark:text-gray-200'>
              Pain <span className={`${theme === 'light' ? 'text-[#06CCEC]' : 'text-[#27477D]'}`}>Care</span> Clinic
            </div>
          </div>
        </div>


      </div>

      <div className='sm:w-[40%] flex flex-col justify-center items-center relative sm:mt-0  min-h-[40vh]'>
        <div className={`lg:w-[600px] lg:h-[620px] sm:w-[400px] sm:h-[420px] w-[120px] h-[120px] ${theme === 'light' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800' : 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800'} rounded-full absolute lg:-right-[120px] lg:-top-[270px] 
            sm:-right-[100px] sm:-top-[170px]  hidden sm:block `}></div>

        <div className={`w-[200px] h-[200px] ${theme === 'light' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800' : 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800'}  rounded-full absolute left-[-25%] bottom-[-45%] animate-slide-diagonal sm:hidden`}></div>
        <div className={`w-[200px] h-[200px] ${theme === 'light' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800' : 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800'} rounded-full absolute left-[-7%] bottom-[-55%] animate-slide-diagonal-2 sm:hidden`}></div>

        <div className='sm:hidden '>
          <div className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold flex items-center space-x-2 absolute bottom-4 left-[10px] '>
            <img src={theme === 'light' ? logoDark : logo} alt="logo" className='w-[20px] h-[20px] rounded-full' />
            <div className='text-gray-200 dark:text-gray-200'>
              Pain <span className={`${theme === 'light' ? 'text-[#06CCEC]' : 'text-[#27477D]'}`}>Care</span> Clinic
            </div>
          </div>
        </div>

        <div className='w-full'>
          <div className='w-full flex justify-center'>
            <div className='pr-5'>
              <img src={back} alt="logo" className='lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] lg:rounded-tl-[7.5rem] rounded-tl-[5.5rem]  animate-move-bottom-right' />
            </div>

            <div className='pl-5'>
              <img src={knee} alt="logo" className='lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] lg:rounded-tr-[7.5rem] rounded-tr-[5.5rem] animate-move-bottom-left' />
            </div>
          </div>

          <div className='w-full flex justify-center pt-6'>
            <div className='w-[50%]'></div>

            <div className='pl-5 w-[50%]'>
              <img src={shoulder} alt="logo" className='lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] lg:rounded-br-[7.5rem] animate-move-top-left rounded-br-[5.5rem]' />
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Herosectionhome