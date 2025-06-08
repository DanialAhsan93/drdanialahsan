import React, { useEffect, useState } from 'react';
import './herotitle.css';

function Herotitle({color,size, sizePara, sizeUrdu}) {
   const [flipped, setFlipped] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFlipped(prev => !prev);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  return (
    <div>
      <div className={`flipper ${flipped ? "flipped" : ""}`}>

          <div className='front'>
          <div className={`${size} font-bold `}>
              Dr <span className={`px-2 ${color} rounded-lg ml-1 text-white`}>
                Danyal Ahsan
              </span>
            </div>
            <div className={`${sizePara} font-bold text-[#06CCEC] w-[75%] sm:mt-2 mt-4`}>
              Dpt, Nmpt & Pain Speacialist
            </div>
          </div>


          <div className="back sm:block flex flex-col items-end sm:pr-0 pr-5 sm:mt-0 ">
            <div className={`${sizeUrdu} text-2xl font-bold`}>
              ڈاکٹر <span className={`px-2 ${color} rounded-lg ml-1 text-white`}>
                د ا نیال ا حسن
              </span>
            </div>
            <div className='lg:text-[20px] text-[16px] font-bold text-[#06CCEC] md:w-[70%] sm:mt-10 mt-7'>
              ڈ ی پی ٹی ، این ایم پی ٹی ، پین اسپیشلسٹ
            </div>
          </div>

        </div>
        
    </div>
  )
}

export default Herotitle