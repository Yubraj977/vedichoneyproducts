import React, { useState } from 'react'
import LeftPannel from './LeftPannel';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Myprofile from './pages/Myprofile';
import Adressbook from './pages/Adressbook';
import MyCancelation from './pages/MyCancelation';
import Myorders from './pages/Myorders';
import Myreturns from './pages/Myreturns';
import PaymentOptions from './pages/PaymentOptions';
import MyWatchList from './pages/MyWatchList';
import ProfileEdit from './pages/ProfileEdit';
import Changepassword from './pages/Changepassword';
function UserDash() {
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
    <div className='flex gap-4 px-2 '>
      <div className="left w-1/6">
        <LeftPannel />
      </div>

      <div className="right w-full ">
        {tab == "myprofile" && < Myprofile />}
        {tab == "adressbook" && < Adressbook />}
        {tab == "paymentoptions" && < PaymentOptions />}
        {tab == "myorders" && < Myorders />}
        {tab == "myreturns" && < Myreturns />}
        {tab == "mycancelations" && < MyCancelation />}
        {tab == "mywatchlist" && < MyWatchList />}
        {tab == "profileedit" && < ProfileEdit />}
        {tab == "changepassword" && < Changepassword />}

      </div>
    </div>
  )
}

export default UserDash