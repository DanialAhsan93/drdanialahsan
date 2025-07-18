import React, { useState } from 'react';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { logoDark, logo } from '../data';
import Herotitle from '../components/animation/Herotitle';
import OAuth from '../components/OAuth';


function Signup() {
  const [loading, setloading] = useState(false)
  const { theme } = useSelector(state => state.theme);
  const [form, setForm] = useState({})
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleInput = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password || form.username === '' || form.email === '' || form.password === '') {
      return  setErrorMessage('Please fill out all fields')
    };

    try {
      setloading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success === false) {
        setloading(false);
        return setErrorMessage(data.message);

      };

      if (res.ok) {
        setloading(false);
        navigate('/signin')
      }

      console.log(data);

    } catch (error) {
      console.log(error)
    }

  };



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

            <div className='w-full mt-6'>
              <Herotitle
                color={"bg-gradient-to-r from-indigo-500 first-letter: via-purple-500 to-pink-500"}
                size={'text-3xl'}
                sizePara={'text-[18px]'}
                sizeUrdu={'lg:text-3xl sm:text-2xl'}

              />
            </div>

          </Link>


          {/* <p className='text-sm mt-5'>
            DPT, Nmpt & pain speacialist
          </p> */}
        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className=''>
              <Label value="Your username" />

              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleInput}

              />
            </div>

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
                ) : 'Sign Up'
              }

            </Button>
            <OAuth />
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to={'/signin'} className='text-blue-500'>
              Sign In
            </Link>
          </div>

          {
            errorMessage && (
              <Alert className='mt-5' color={'failure'}>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Signup;