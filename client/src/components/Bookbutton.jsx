import { Button } from 'flowbite-react'
import React from 'react'

function Bookbutton({text}) {
  return (
    <>
      <Button className='bg-[#06CCEC] text-white' pill>
        {text}
      </Button>
    </>
  )
}

export default Bookbutton