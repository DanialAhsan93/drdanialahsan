import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OzoneTherapy from '../components/services/Ozonetherapy';
import Prp from '../components/services/Prp';

function Services() {
  const [tab, setTab] = useState('')
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const service = urlParams.get('service')
    if (service) {
      setTab(service)
    }
  }, [location.search])

  console.log(tab)
  return (
    <div>
      {tab === 'ozonetherapy' && <OzoneTherapy/>}
      {tab === 'prptherapy' && <Prp/>}
    </div>
  )
}

export default Services