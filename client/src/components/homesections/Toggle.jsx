import React, { useEffect, useRef, useState } from 'react'

function Toggle({ engPara, urduPara, pe }) {
  const [show, setShow] = useState(false);
    const timeoutRef = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setShow(prev => !prev)
    }, 6000);

    return () => clearInterval(interval);
  }, [])
  console.log(show)
  return (
    <div>
      {show ?
        (
          <p className='py-2 lg:text-[20px] sm:text-[14px]'>
            {engPara}
          </p>
        ) :
        (
          <p className={`py-2 lg:text-[20px] sm:text-[14px] text-center ${pe}`}>
            {urduPara}
          </p>
        )}


    </div>
  )
}

export default Toggle