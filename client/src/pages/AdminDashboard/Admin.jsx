import React, { useState } from 'react'
import Left from './Left'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Maindash from './pages/Maindash'
import Dashproduct from './pages/Dashproduct';
import DashCostumer from './pages/DashCostumer';
import DashPayments from './pages/DashPayments';
import DashReview from './pages/DashReview';
import DashInventery from './pages/DashInventery';



function Admin() {
  const [tab, settab] = useState()
  const location = useLocation();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab');
    console.log(urlParams);
    console.log(tabFromUrl);
    if (tabFromUrl) {
      settab(tabFromUrl)
    }

  }, [location.search])
  return (
    <div className='flex px-6'>
      <div className="left w-1/6">
        <Left />
      </div>
      <div className="right">
        {tab == "main" && <Maindash />}
        {tab == "product" && <Dashproduct />}
        {tab == "invenotry" && <DashInventery />}
        {tab == "costumer" && <DashCostumer />}
        {tab == "review" && <DashReview />}
        {tab == "payments" && <DashPayments />}
      </div>
    </div>
  )
}

export default Admin