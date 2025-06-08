import { Button } from 'flowbite-react'
import React from 'react';
import { useSelector } from 'react-redux';


function Bookbutton({ text }) {

  const {theme} = useSelector((state) => state.theme)
  return (
    <>
      <Button className={`${theme === 'light' ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800' : 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800'} `} pill>
        {text}
      </Button>
    </>
  )
}

export default Bookbutton