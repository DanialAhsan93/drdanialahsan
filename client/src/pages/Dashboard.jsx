import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Dashsidebar from '../components/Dashsidebar';
import Dashprofile from '../components/Dashprofile';

function Dashboard() {
  const location = useLocation();
  const [tab, settab] = useState(null)
  console.log(location.search);

  useEffect(() => {
    const searchParam =new URLSearchParams(location.search);
    const tabValue = searchParam.get('tab');
    settab(tabValue);
  } , [location]);


  
  return (
    <div className='flex flex-wrap min-h-screen'>
      <div className='w-[20%] border border-gray-400'>
        <Dashsidebar />
      </div>

      <div className='w-[80%]'>
        {tab === 'profile' && <Dashprofile />}
      </div>
      
    </div>
  )
}

export default Dashboard