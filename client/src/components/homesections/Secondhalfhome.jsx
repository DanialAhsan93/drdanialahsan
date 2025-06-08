import React from 'react'
import { useSelector } from 'react-redux';
import { bgdotsblack, bgdotswhite, } from '../../data/index.js';
import { AiOutlineSafety } from "react-icons/ai";
import Bookbutton from '../Bookbutton.jsx';
import { newdoc } from '../../data/index.js';
import { servicesData } from '../../data/Carddata.js';
import Card from '../Card.jsx';
import Toggle from './Toggle.jsx';

function Secondhalfhome() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className='max-w-full min-h-screen bg-cover sm:pb-0 pb-5'
      style={{
        backgroundImage: `url(${theme === 'light' ? bgdotswhite : bgdotsblack})`
      }}
    >
      <div className='flex flex-wrap sm:flex-row flex-col lg:justify-center sm:justify-around justify-center items-center lg:space-x-5 sm:space-x-0 lg:p-0 sm:p-5 p-5 lg:-translate-y-56 md:-translate-y-32 sm:-translate-y-28 '>

        {
          servicesData && servicesData.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.id} item={item} Icon={Icon} />
            )
          }
          )
        }

      </div>

      <div className='w-full lg:min-h-[70vh] min-h-screen flex justify-center items-center sm:pt-0 pt-10 lg:-translate-y-32 md:-translate-y-24 sm:-translate-y-20'>

        <div className='w-full flex flex-wrap justify-center items-center'>

          <div className='sm:w-[50%] w-full flex items-center justify-center '>
            <div className='relative'>
              <img src={newdoc} alt="DoctorImage" className='lg:w-[380px] lg:h-[380px] sm:w-[260px] sm:h-[260px] w-[200px] h-[200px] rounded-full z-10 relative animate-slide-diagonal' />
              <div className={`lg:w-[382px] lg:h-[382px] sm:w-[262px] sm:h-[262px] w-[202px] h-[202px] rounded-full ${theme === 'light' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800' : 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800'}  absolute top-0 left-0 animate-slide-diagonal-2`} ></div>
            </div>

          </div>

          <div className='sm:w-[50%] w-full flex flex-col items-center  '>

            <div className='lg:w-[70%]'>
              <h3 className='text-lg mt-5 sm:text-start text-center'>
                Medical & General Care!
              </h3>
              <h1 className='lg:text-4xl sm:text-2xl mt-2 sm:text-start text-center'>
                Get Amazing Treatment
              </h1>
              <div className='3xl:h-[100px] 2xl:h-[130px] lg:h-[136px] md:h-[90px] sm:h-[100px] h-[130px]'>
                <Toggle
                  engPara={"Our clinic uses regenrative medicines like Ozone, Prp, Biogel and Laser & Physio to treat conditons like OA, Shoulder pain, L3/l4, l5/S1 disc bulge."}
                  urduPara={"ہمارا کلینک آرتھراءٹس، کندھے کے درد،ڈسک سلپ جیسے کنڈیشنز کے لیے اوزون، پی آر پی، بائیوجیل اور لیزر اینڈ فزیو جیسی ریجنریٹو تکنیک استعمال کرتا ہے۔"}
                  pe={"pe-3"}
                />
              </div>

              {/* <p className='mt-4 lg:text-[16px] sm:text-[12px] sm:text-start text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non adipisci a quis numquam consequatur culpa quasi, nostrum quibusdam ipsam nesciunt!
              </p> */}

              <div className='flex flex-wrap items-center justify-between  sm:w-[90%] sm:mt-0 mt-10 sm:space-y-0 space-y-5'>

                <div className='flex items-center sm:justify-start justify-center  sm:w-[45%] w-full space-x-2'>
                  <span>
                    <AiOutlineSafety className='text-[30px]' />
                  </span>
                  <h4 className="text-[14px]">
                    100% Safe & Trusted
                  </h4>
                </div>
                <div className='flex items-center sm:justify-start justify-center  sm:w-[45%] w-full space-x-2'>
                  <span>
                    <AiOutlineSafety className='text-[30px]' />
                  </span>
                  <h4 className="text-[14px]">
                    Regenrative medicine
                  </h4>
                </div>

                <div className='flex items-center sm:justify-start justify-center  sm:w-[45%] w-full space-x-2'>
                  <span>
                    <AiOutlineSafety className='text-[30px]' />
                  </span>
                  <h4 className="text-[14px]">
                    24/7 assistance
                  </h4>
                </div>

                <div className='flex items-center sm:justify-start justify-center  sm:w-[45%] w-full space-x-2 '>
                  <span>
                    <AiOutlineSafety className='text-[30px]' />
                  </span>
                  <h4 className="text-[14px]">
                    Rehabilitation
                  </h4>
                </div>

              </div>

              <div className='my-5 flex sm:justify-start justify-center'>
                <Bookbutton text={'Book Now'} />

              </div>
            </div>


          </div>



        </div>

      </div>

    </div>
  )
}

export default Secondhalfhome