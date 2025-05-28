import { Button } from 'flowbite-react'
import React from 'react'
import { useSelector } from 'react-redux';
import './home.css';
import { FaPhoneVolume } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import Bookbutton from '../components/Bookbutton';
import { servicesData } from '../data/Carddata';
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
} from '../data/index.js';
import Secondhalfhome from '../components/homesections/Secondhalfhome';
import Card from '../components/Card.jsx';
import Herosectionhome from '../components/homesections/Herosectionhome.jsx';



function Home() {

  const { theme } = useSelector(state => state.theme);
  console.log(theme)

  return (
    <div className='main'>
      <div className='sub-main'>

        <Herosectionhome />

        {/* Second section */}

        <div className='min-h-screen flex sm:flex-row items-center justify-center flex-col lg:space-x-12'>

          <div className='sm:w-[50%] sm:h-0 h-[38vh] w-full  order-2 sm:order-1 sm:py-0 py-12'>

            <div className='flex justify-center items-center '>

              <div className='relative border border-1 '>

                <div className='lg:w-[100px] lg:h-[110px] sm:w-[70px] sm:h-[80px] w-[60px] h-[60px] flex flex-wrap border border-1 sm:rounded-tr-[2rem] sm:rounded-bl-[2rem] rounded-tr-[1rem] rounded-bl-[1rem] absolute lg:translate-x-28 lg:-translate-y-36 sm:translate-x-12 sm:-translate-y-32 translate-x-8 -translate-y-20'>
                  <img src={kneeblue} alt="backImage" className='sm:rounded-tr-[2rem] sm:rounded-bl-[2rem] rounded-tr-[1rem] rounded-bl-[1rem]' />
                </div>
                <div className='lg:w-[200px] lg:h-[210px] sm:w-[120px] sm:h-[130px] w-[100px] h-[110px] flex flex-wrap border border-1 rounded-tr-[3rem] rounded-bl-[3rem] absolute sm:top-0 sm:left-[50%] lg:-translate-x-28 lg:-translate-y-40 sm:-translate-x-20 sm:-translate-y-32 -translate-x-20 -translate-y-20'>
                  <img src={backblue} alt="backImage" className='rounded-tr-[3rem] rounded-bl-[3rem]' />
                </div>

                <div className='lg:w-[100px] lg:h-[100px] sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] flex justify-center items-center z-10 absolute sm:top-0 sm:left-[50%] bg-[#06CCEC]/30 rounded-full lg:-translate-x-0 lg:-translate-y-0 sm:-translate-x-4 sm:-translate-y-9 -translate-x-5 -translate-y-2 '>

                  <div className='lg:w-[80px] lg:h-[80px] sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] flex justify-center items-center  bg-[#06CCEC] rounded-full '>
                    <FaPlay className='lg:text-[30px] sm:text-[20px] text-[18px] text-white' />
                  </div>

                </div>

                <div className='lg:w-[200px] lg:h-[210px] sm:w-[120px] sm:h-[130px] w-[100px] h-[110px] flex flex-wrap border border-1 rounded-tr-[3rem] rounded-bl-[3rem] absolute sm:-top-8 sm:left-[50%] lg:translate-x-14 lg:translate-y-4 sm:translate-x-6 sm:translate-y-2 translate-x-2 -translate-y-3'>
                  <img src={shoulderblue} alt="backImage" className='rounded-tr-[3rem] rounded-bl-[3rem]' />
                </div>

              </div>

            </div>

          </div>

          <div className='sm:w-[50%] flex items-center sm:justify-start justify-center order-1 sm:order-2 sm:my-0 my-20'>

            <div className='3xl:w-[30%] 2xl:w-[40%] lg:w-[60%] sm:w-[75%] w-[65%] sm:pb-0 pb-7 lg:pl-7 sm:pl-7 sm:text-start text-center'>
              <div className='lg:text-3xl sm:text-2xl text-[20px] lg:py-1'>
                Surprise your body with
                <span className='text-[#06CCEC] sm:mr-1'>
                  extra care
                </span>
              </div>
              <p className='py-2 lg:text-[20px] sm:text-[14px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, similique distinctio quasi consequuntur quos Dignissimos, cupiditate sapiente.
              </p>

              <div className='flex items-center sm:justify-start justify-center py-2'>

                <div className='px-2 py-2 rounded-full border border-1 text-[#06CCEC]'>
                  <FaPhoneVolume className='w-[28px] h-[28px]' />
                </div>

                <div >
                  <p>
                    Call us anytime
                  </p>
                  <p>
                    +92 313 6107654
                  </p>
                </div>

              </div>

              <div className='mt-2 sm:block flex justify-center'>
                <Bookbutton text={'Book Now'} />
              </div>

            </div>




          </div>

        </div>

        {/* Thrid section */}


        <div className='max-w-full 3xl:sm:min-h-[50vh] sm:min-h-[70vh]' style={{
          backgroundImage: `linear-gradient(rgba(75, 103, 145, 0.8), rgba(75, 103, 145, 0.8)), url(${backgroundoperation})`
        }}>
          <div className='relative'>

            <div className='flex justify-center'>
              <div className='max-w-full '>
                <h2 className='lg:text-2xl sm:text-lg text-lg text-center text-[#06CCEC] lg:pt-12 sm:pt-5 pt-8'>
                  Medical & General Care!
                </h2>
                <h1 className='lg:text-4xl sm:text-2xl text-2xl text-center lg:pt-2 sm:pt-1 text-white'>
                  Our Services
                </h1>

                <p className='text-center pt-3 text-white'>
                  Regenerate naturally with Biogel PRP and Ozone injections.
                </p>

              </div>

            </div>

            <div className='flex flex-wrap sm:flex-row flex-col lg:justify-center sm:justify-around justify-center items-center lg:space-x-5 sm:space-x-0 lg:absolute  lg:top-48 lg:p-0 sm:p-5 p-5'>

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


          </div>



        </div>

        {/* Fourth section */}


        <Secondhalfhome />


      </div>


    </div>



  )
}

export default Home