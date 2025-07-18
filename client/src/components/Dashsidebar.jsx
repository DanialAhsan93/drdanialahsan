import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { signOutSuccess } from '../redux/user/userSlice';

function Dashsidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tab, settab] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme)

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    const tabValue = searchParam.get('tab');
    settab(tabValue);
  }, [location]);

  const handleSignout = async () => {

    try {
      const res = await fetch(`/api/user/signout`, {
        method: 'POST',
      });
      const data = await res.json();

      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSuccess());
        navigate('/signin')
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='px-2'>

      {
        currentUser && (
          <Link to={'/dashboard?tab=profile'} className={`flex justify-between items-center space-x-3 px-2 py-2 mt-2 rounded-lg ${tab === 'profile' ? 'bg-slate-100 dark:bg-[rgba(44,61,114,0.22)]' : 'bg-slate-50 dark:bg-[rgba(27,38,70,0.22)]'} hover:dark:bg-[rgba(49,68,126,0.22)] hover:bg-blue-50`} >

            <div className='flex items-center space-x-3'>
              <span>
                <CgProfile />

              </span>
              <h2 className='text-lg bg'>
                Profile
              </h2>

            </div>

            {
              currentUser.isAdmin ?
                (
                  <div className='bg-slate-600 px-2 rounded-md text-gray-300'>
                    admin
                  </div>
                ) :
                (
                  <div className='bg-slate-600 px-2 rounded-md text-gray-300'>
                    user
                  </div>
                )

            }

          </Link>
        )
      }


      {
        currentUser && currentUser.isAdmin && (
          <Link to={'/dashboard?tab=patient'} className={`flex justify-between items-center space-x-3 px-2 py-2 mt-2 rounded-lg ${tab === 'patient' ? 'bg-slate-100 dark:bg-[rgba(44,61,114,0.22)]' : 'bg-slate-50 dark:bg-[rgba(27,38,70,0.22)]'}   hover:dark:bg-[rgba(49,68,126,0.22)] hover:bg-blue-50`} >
            <div className='flex items-center space-x-3'>
              <span>
                <CgProfile />

              </span>
              <h2 className='text-lg bg'>
                Patients
              </h2>

            </div>


          </Link>
        )
      }


      <div className={`flex justify-between items-center space-x-3 px-2 py-2 mt-2 rounded-lg ${theme === 'dark' ? 'dark:bg-[rgba(27,38,70,0.22)]' : 'bg-slate-50 !important'} hover:dark:bg-[rgba(44,61,112,0.22)] hover:bg-blue-50`} onClick={handleSignout} >
        <div className='flex items-center space-x-3'>
          <span>
            <CgProfile />

          </span>
          <h2 className='text-lg bg'>
            Signout
          </h2>

        </div>

      </div>

    </div>
  )
}

export default Dashsidebar