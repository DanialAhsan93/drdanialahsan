import React from 'react';
import { backgroundoperation } from '../../data';
import { conditionsData, servicesData } from '../../data/Carddata';
import Card from '../Card';

function Fifthsection() {
  return (
    <div className='max-w-full min-h-screen overflow-hidden'>
      <div
        className="min-h-[35vh] bg-cover bg-center  flex items-end justify-center "
        style={{
          backgroundImage: `linear-gradient(to top, rgba(214, 221, 230, 0.9), rgba(214, 221, 230, 0.2)), url(${backgroundoperation})`
        }}
      >
        <div className='lg:w-[322px] sm:w-[220px] w-[142px] relative flex justify-center'>
          <div
            className="lg:w-[320px] lg:h-[190px] sm:w-[230px] sm:h-[110px] w-[140px] h-[70px] sm:opacity-40 bg-white rounded-full "
            style={{
              WebkitMaskImage: `radial-gradient(circle 70px at 48% 100%, transparent 20px, black 121px)`,
              maskImage: `radial-gradient(circle 70px at 48% 100%, transparent 20px, black 120px)`,
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
            }}
          >
            <div className='w-full flex flex-wrap justify-center sm:mt-5 mt-2'>
              <h3 className='w-full text-center sm:text-[16px] text-[12px]  text-gray-900'>
                Medical & General Care!
              </h3>

              <h1 className='w-full text-center lg:text-2xl sm:text-lg text-[14px] pt-2 text-gray-900'>
                Move Without Limits
              </h1>

              <p className='px-2 text-center text-[14px] text-gray-900 lg:block hidden lg:mt-2'>
                Effective relief for knee, shoulder, and spine pain using PRP, Biogel, and ozone injections.
              </p>

            </div>

          </div>

          <div
            className="lg:w-[320px] lg:h-[180px] sm:w-[200px] sm:h-[110px] w-[140px] h-[70px] absolute top-10 -left-[100%] inset-0 opacity-40 bg-white rounded-full overflow-hidden -rotate-12 animate-slide-tilted-rl "
            style={{
              WebkitMaskImage: `radial-gradient(circle at 48% 100%, transparent 34%, black 72%)`,
              maskImage: `radial-gradient(circle at 48% 100%, transparent 34%, black 72%)`,
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
            }}
          ></div>

          <div
            className="lg:w-[320px] lg:h-[180px] sm:w-[200px] sm:h-[110px] w-[140px] h-[70px] opacity-40 bg-white rounded-full overflow-hidden absolute top-10 left-[84%] rotate-12 animate-slide-tilted "
            style={{
              WebkitMaskImage: `radial-gradient(circle at 48% 100%, transparent 34%, black 72%)`,
              maskImage: `radial-gradient(circle at 48% 100%, transparent 34%, black 72%)`,
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
            }}
          ></div>



        </div>




      </div>

      <div className='w-full text-center my-2'>
        <h3 className='sm:text-2xl text-lg'>
          Our clinic is speacilised in treating conditions causing pain to knee, spine & shoulder
        </h3>

      </div>

      <div className='flex flex-wrap sm:flex-row flex-col lg:justify-center sm:justify-around justify-center items-center lg:space-x-5 sm:space-x-0 m-5'>

        {
          conditionsData && conditionsData.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.id} item={item} Icon={Icon} />
            )
          }
          )
        }

      </div>


    </div>
  )
}

export default Fifthsection