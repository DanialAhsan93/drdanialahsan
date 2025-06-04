import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { logo, logoDark } from '../../data';
import { FaMoon, FaSun } from "react-icons/fa";
import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/theme/themeSlice';
import TitleWave from '../animation/TitleWave';


function NavbarComponent() {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const {theme} = useSelector(state => state.theme);
  console.log(theme);


  return (
    <div className={` border-b border-gray-200 relative z-50 ${theme === 'light' ? 'bg-white' : 'dark:bg-[rgb(16,23,42)]'}`}>
      <Navbar className={`max-w-7xl mx-auto flex justify-between py-5 ${theme === 'light' ? 'bg-white' : 'dark:bg-[rgb(16,23,42)]'}`}>
        {/* <Link to={'/'} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold flex items-center space-x-2'>
          <img src={theme === 'light' ? logo : logoDark} alt="logo" className='w-[40px] h-[40px]' />
          <div className='text-[#27477D] dark:text-gray-200'>
            Pain <span className='text-[#06CCEC]'>Care</span> Clinic
          </div>
        </Link> */}
        <TitleWave theme={theme} logo={logo} logoDark={logoDark} />



        <div className='flex gap-2 md:order-2'>
          <Button className="text-[#27477D] border" onClick={() => {dispatch(toggleTheme())}}>
            {theme === 'light' ? <FaMoon className='sm:w-5 sm:h-3 w-2 h-2' /> : <FaSun className='sm:w-5 sm:h-3 w-2 h-2 dark:text-gray-200' />}
            
          </Button>

          <Link to={'/signin'}>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800 text-[12px] sm:text-[16px] py-1 px-1 sm:py-2 sm:px-3">
              Sign in
            </Button>
          </Link>

        </div>

        <NavbarToggle className='text-[#27477D]' />

        <NavbarCollapse >
          <Link to={'/'} className={`${path === '/' ? 'text-[#06CCEC]' : 'text-[#27477D] dark:text-gray-200'} sm:border-b-0 border-b-2 pb-0 font-semibold`}>
            Home
          </Link>
          <Link to={'/about'} className={`${path === '/about' ? 'text-[#06CCEC]' : 'text-[#27477D] dark:text-gray-200'} sm:border-b-0 border-b-2 sm:mt-0 mt-2 pb-0 font-semibold`}>
            About
          </Link>

          <Link to={'/services'} className={`${path === '/services' ? 'text-[#06CCEC]' : 'text-[#27477D]dark:text-gray-200'} sm:border-b-0 border-b-2 pb-0 mt-2 font-semibold sm:mt-0`}>Services</Link>
          <Link to={'/contact'} className={`${path === '/contact' ? 'text-[#06CCEC]' : 'text-[#27477D] dark:text-gray-200'} sm:border-b-0 border-b-2 pb-0 mt-2 font-semibold sm:mt-0`}>Contact</Link>
        </NavbarCollapse>
      </Navbar>
    </div>

  )
}

export default NavbarComponent;