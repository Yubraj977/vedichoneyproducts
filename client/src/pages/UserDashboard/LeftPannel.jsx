import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";


function LeftPannel() {
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

    const tabActive = ' text-secondary '
    return (
        <div className=' flex flex-col h-screen  mt-top relative'>
            <h1 className='text-lg font-inter'>Manage Account</h1>
            <div className=' ml-10 flex flex-col gap-4 mt-2'>
                <Link to={'/dashboard?tab=myprofile'}> <div className={` ${tab == 'myprofile' ? tabActive : ''} text-sm font-inter font-semibold mt-2`}>  My Profile</div></Link>
                <Link to={'/dashboard?tab=adressbook'}> <div className={` ${tab == 'adressbook' ? tabActive : ''} text-sm font-inter font-semibold`}>  Adress Book</div></Link>
                <Link to={'/dashboard?tab=paymentoptions'}> <div className={` ${tab == 'paymentoptions' ? tabActive : ''} text-sm font-inter font-semibold`}>  My payment Options</div></Link>
            </div>
            <div className=' ml-6 flex flex-col gap-4 '>
                <Link to={'/dashboard?tab=myorders'}> <div className={` ${tab == 'myorders' ? tabActive : ''} text-md font-inter font-semibold mt-8 `}>  My Orders</div></Link>
                <Link to={'/dashboard?tab=myreturns'}> <div className={` ${tab == 'myreturns' ? tabActive : ''} text-sm font-inter font-semibold ml-4`}>  My Returns</div></Link>
                <Link to={'/dashboard?tab=mycancelations'}> <div className={` ${tab == 'mycancelations' ? tabActive : ''} text-sm font-inter font-semibold ml-4`}> My cancelations</div></Link>
            </div>
            <Link to={'/dashboard?tab=mywatchlist'}> <div className={` ${tab == 'mywatchlist' ? tabActive : ''} text-lg font-inter font-semibold mt-8  ml-6`}>  My WatchList</div></Link>
            <div className='absolute bottom-10 flex items-center gap-2 font-bold rounded-md ml-6 cursor-pointer'>  Logout <CiLogout /> </div>
        </div>
    )
}

export default LeftPannel