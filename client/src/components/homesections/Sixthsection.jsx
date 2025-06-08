import { Button, TextInput } from 'flowbite-react';
import React from 'react'
import { AiOutlineSafety } from 'react-icons/ai';
import { FaPhone } from "react-icons/fa";
import Bookbutton from '../Bookbutton';


function Sixthsection() {
  return (
    <div className='max-w-full min-h-screen flex flex-wrap justify-center items-center'>


      <div className='sm:w-[50%] w-full  flex justify-end sm:pr-5 sm:py-0 py-5 '>
        <div className='lg:w-[70%] w-full sm:ps-5'>
          <h3 className='sm:text-2xl sm:text-start text-center text-lg text-[#06CCEC]'>
            Pain Care Clinic
          </h3>
          <h1 className='sm:text-3xl text-lg sm:text-start text-center text-[#27477D] font-bold my-2'>
            We're Here For You
          </h1>
          <p className='text-gray-400 text-[14px] sm:text-start text-center'>
            Expert Pain Relief by Dr. Danial Ahsan. Specialized Care for Knee, Shoulder & Spine.
            Book Your Appointment Today – Feel Better Tomorrow
          </p>

          <div className='flex flex-wrap items-center justify-between  sm:w-[90%] mt-10 sm:space-y-0 space-y-5'>

            <div className='flex items-center sm:justify-start justify-center  sm:w-[50%] w-full space-x-2'>
              <span>
                <AiOutlineSafety className='text-[30px] text-[#06CCEC]' />
              </span>
              <h4 className="text-[12px] text-[#27477D] font-semibold">
                100% Safe & Trusted
              </h4>
            </div>
            <div className='flex items-center sm:justify-start justify-center  sm:w-[50%] w-full space-x-2'>
              <span>
                <AiOutlineSafety className='text-[30px] text-[#06CCEC]' />
              </span>
              <h4 className="text-[12px] text-[#27477D] font-semibold">
                Expert Treatment
              </h4>
            </div>

            <div className='flex items-center sm:justify-start justify-center  sm:w-[50%] w-full space-x-2'>
              <span>
                <AiOutlineSafety className='text-[30px] text-[#06CCEC]' />
              </span>
              <h4 className="text-[12px] text-[#27477D] font-semibold">
                Affordable Fees
              </h4>
            </div>

            <div className='flex items-center sm:justify-start justify-center  sm:w-[50%] w-full space-x-2 '>
              <span>
                <AiOutlineSafety className='text-[30px] text-[#06CCEC]' />
              </span>
              <h4 className="text-[12px] text-[#27477D] font-semibold">
                Rehabilitation
              </h4>
            </div>

          </div>

        </div>


      </div>

      <div className='sm:w-[50%] w-full  sm:pl-5'>
        <div className='lg:w-[75%] w-full border-gray-300 shadow-2xl bg-white p-4 rounded-lg'>

          <div className='w-full h-[150px] bg-[#27477D] flex flex-wrap justify-center items-center'>

            <div className='w-[60%] '>
              <h1 className='lg:text-2xl text-[14px] text-white font-bold mb-2'>
                Book An Appointment
              </h1>
              <p className='text-[14px] text-white'>
                Please call us to ensure
              </p>
            </div>

            <div className='w-[25%]  flex justify-end'>
              <div className='w-[60px] h-[60px] bg-[#12779B] rounded-full border border-1 flex flex-wrap items-center justify-center'>
                <div className='w-[50px] h-[50px] bg-[#06CCEC] rounded-full border border-1 flex flex-wrap items-center justify-center'>
                  <FaPhone className='text-white text-[16px]' />
                </div>
              </div>
            </div>


          </div>
          <form className='w-full border border-1 flex flex-wrap justify-center items-center my-10 sm:space-y-0 space-y-8 sm:p-0 p-2'>
            <div className='sm:w-[40%] w-full sm:mx-1 sm:my-3'>
              <TextInput
                placeholder="Patient's name"
                className='text-gray-400 '
                type='name'
                required
                style={{
                  borderRadius: "25px",
                  paddingLeft: '20px'
                }}

              />


            </div>
            <div className='sm:w-[40%] w-full sm:mx-1 sm:my-3'>
              <TextInput
                placeholder="Patient's age"
                className='text-gray-400 '
                type='number'
                required
                style={{
                  borderRadius: "25px",
                  paddingLeft: '20px'
                }}

              />
            </div>
            <div className='sm:w-[40%] w-full sm:mx-1 sm:my-3'>
              <TextInput
                placeholder="City name"
                className='text-gray-400 '
                type='name'
                required
                style={{
                  borderRadius: "25px",
                  paddingLeft: '20px'
                }}

              />
            </div>
            <div className='sm:w-[40%] w-full sm:mx-1 sm:my-3'>
              <TextInput
                placeholder="Patient's Problem"
                className='text-gray-400 '
                type='text'
                required
                style={{
                  borderRadius: "25px",
                  paddingLeft: '20px'
                }}

              />
            </div>
            <div className='sm:w-[40%] w-full sm:mx-1 sm:my-3'>
              <TextInput
                placeholder="What'sapp Number"
                className='text-gray-400'
                type='number'
                required
                style={{
                  borderRadius: "25px",
                  paddingLeft: '20px',
                  marginTop: '12px',

                }}

              />
            </div>
            <div className='sm:w-[40%] w-full sm:mx-1 sm:my-3'>
              <TextInput
                placeholder="email (optional)"
                className='text-gray-400'
                type='email'
                style={{
                  borderRadius: "25px",
                  paddingLeft: '20px',
                  marginTop: '12px',

                }}

              />
            </div>

            <div className='w-full flex justify-center pt-4'>
              <Bookbutton text={'Make an appointment'} />
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default Sixthsection