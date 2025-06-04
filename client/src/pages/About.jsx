import React from 'react';
import { cityhospital, logoDark } from '../data';
import './about.css';

function About() {
  return (
    <div className='max-w-full min-h-screen flex flex-wrap sm:flex-row flex-col'>

      <div className='sm:w-[50%] w-full flex justify-center'>

        <div className='sm:w-[85%] w-full flex flex-wrap items-center p-5 '>
          <p className='text-sm sm:py-0 py-5'>
            Welcome to Pain Care Clinic, a dedicated center for advanced pain management and physical rehabilitation, led by Dr. Danyal Ahsan (DPT, NMPT, Pain Specialist). Located within City Hospital on Hospital Road, Rahim Yar Khan.
          </p>
          <p className='text-sm sm:py-0 py-5'>Our clinic offers comprehensive, non-surgical treatments for a wide range of musculoskeletal and neurological conditions. We specialize in the care of shoulder, knee, and spine disorders, including shoulder osteoarthritis, frozen shoulder, post-surgical shoulder rehabilitation, and range of motion (ROM) issues, as well as knee osteoarthritis, ACL/PCL tear recovery, gout, and meniscus rehabilitation. For spinal conditions, we treat disc bulges (L4-L5, S1-S2), lumbar straightening, and sciatica.

          </p>

          <p className='text-sm sm:py-0 py-5'>
            Beyond orthopedic care, we also support patients with neurological and chronic pain conditions such as cerebral palsy, stroke, Bell's palsy, muscle atrophy, fibromyalgia, peripheral neuropathy, and trigger finger (stenosing tenosynovitis). Our multidisciplinary approach includes cutting-edge procedures like Ozone Therapy, PRP (Platelet-Rich Plasma) Therapy, Biogel Therapy, Acupuncture, Laser Therapy, and expert Physiotherapy, all tailored to restore function, reduce pain, and improve quality of life.

          </p>
          {/* 
          <p>
            At Pain Care Clinic, our mission is to provide personalized, evidence-based treatment in a compassionate environment—helping every patient move better, feel stronger, and live pain-free.
          </p> */}

        </div>


      </div>

      <div className='sm:w-[50%] w-full flex justify-center'>
        <div className='sm:w-[85%] w-full flex flex-wrap items-center '>

          {/* <div className='flex w-[200px] h-[200px] object-cover  rounded-full'>
            <img src={cityhospital} alt="city hospital" className='w-full rounded-full' />
          </div>

          <div className='flex w-[200px] h-[200px] object-cover  rounded-full'>
            <img src={logoDark} alt="city hospital" className='w-full rounded-full' />
          </div> */}
          <div className="relative sm:w-[600px] sm:h-[600px] w-[200px] h-[200px] mx-auto">
            {/* Static center image (logoDark) */}
            <img
              src={cityhospital}
              alt="City Hospital"
              className="absolute sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] rounded-full object-cover z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />

            {/* Animated image (cityhospital) */}
            <img
              src={logoDark}
              alt="Logo Dark"
              className="absolute sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] rounded-full object-cover animate-rise-and-hold z-20 top-1/2 left-1/2 transform -translate-x-1/2"
            />
          </div>

        </div>

      </div>

    </div>
  )
}

export default About