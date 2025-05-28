import React from 'react'
import { useSelector } from 'react-redux';
import {bgdotsblack, bgdotswhite,} from '../../data/index.js';

function Secondhalfhome() {
  const {theme} = useSelector((state) => state.theme);

  return (
    <div className='max-w-full min-h-screen flex sm:flex-row flex-col justify-center items-center bg-cover space-x-5'
      style={{
        backgroundImage: `url(${theme === 'light' ? bgdotswhite : bgdotsblack})`
      }}
    >
      


    </div>
  )
}

export default Secondhalfhome