import React, { useState } from 'react';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { logoDark, logo } from '../data';


function Signin() {
  const [loading, setloading] = useState(false)
  const { theme } = useSelector(state => state.theme);

  const handleSubmit = () => {

  };

  const handleInput = () => { };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl flex-col md:flex-row md:items-center mx-auto gap-5'>
        {/* left */}
        <div className=' flex-1'>
          <Link to={'/'} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold flex flex-wrap items-center'>
            <div className='w-full flex items-center space-x-2'>
              <img src={theme === 'light' ? logo : logoDark} alt="logo" className='w-[40px] h-[40px]' />
              <div className='text-[#27477D] dark:text-gray-200'>
                Pain <span className='text-[#06CCEC]'>Care</span> Clinic
              </div>

            </div>

            <div className='w-full'>
              <div to={'/'} className='text-4xl font-bold 
             dark:text-white mt-2'>

                Dr
                <span className='px-2 bg-gradient-to-r from-indigo-500
             first-letter: via-purple-500 to-pink-500 rounded-lg text-white ml-1'>
                  Danyal Ahsan
                </span>

              </div>
            </div>

          </Link>


          <p className='text-sm mt-5'>
            DPT, Nmpt & pain speacialist
          </p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

            <div className=''>
              <Label value="Your email" />

              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleInput}
              />
            </div>
            <div className=''>
              <Label value="Your password" />

              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleInput}
              />
            </div>

            <Button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800" type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size={'sm'} />
                    <span className='pl-3'>loading...</span>
                  </>
                ) : 'Sign In'
              }

            </Button>
            {/* <OAuth /> */}
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to={'/signup'} className='text-blue-500'>
              Sign Up
            </Link>
          </div>

          {/* {
            errorMessage && (
              <Alert className='mt-5' color={'failure'}>
                {errorMessage}
              </Alert>
            )
          } */}
        </div>
      </div>
    </div>
  )
}

export default Signin