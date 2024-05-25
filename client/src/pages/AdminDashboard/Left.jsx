import React, { useState, useEffect } from 'react'
import { MdDashboard } from "react-icons/md";
import { RiProductHuntFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdOutlineManageAccounts } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Left() {
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
    const leftStyle = ' flex items-center gap-4 py-2'
    const tabActive = 'bg-slate-200 rounded-md text-secondary '
    return (
        <div className=' flex flex-col h-screen justify-between '>


            <div className=''>
                
                <div className='mt-10 gap-2 flex flex-col'>

                    <Link to={'/admin?tab=main'}> <div className={`leftSide ${leftStyle} ${tab == 'main' ? tabActive : ''}`}> <MdDashboard /> Dashoard</div></Link>
                    <Link to={'/admin?tab=addproduct'}>    <div className={`leftSide ${leftStyle} ${tab == 'addproduct' ? tabActive : ''}`}> <RiProductHuntFill />Add Products</div></Link>
                    <Link to={'/admin?tab=product'}>    <div className={`leftSide ${leftStyle} ${tab == 'product' ? tabActive : ''}`}> <RiProductHuntFill />Product</div></Link>
                    <Link to={'/admin?tab=invenotry'}>    <div className={`leftSide ${leftStyle} ${tab == 'invenotry' ? tabActive : ''}`}>  <MdInventory /> Inventery</div></Link>
                    <Link to={'/admin?tab=costumer'}>   <div className={`leftSide ${leftStyle} ${tab == 'costumer' ? tabActive : ''}`}><FaUser />  Costumer</div></Link>
                    <Link to={'/admin?tab=review'}>   <div className={`leftSide ${leftStyle} ${tab == 'review' ? tabActive : ''}`}> <MdRateReview />Review </div></Link>
                    <Link to={'/admin?tab=payments'}>  <div className={`leftSide ${leftStyle} ${tab == 'payments' ? tabActive : ''}`}> <MdPayments />Payments</div></Link>
                    <Link to={'/admin?tab=articles'}>  <div className={`leftSide ${leftStyle} ${tab == 'articles' ? tabActive : ''}`}> <MdPayments />articles</div></Link>
                    <Link to={'/admin?tab=write'}>  <div className={`leftSide ${leftStyle} ${tab == 'write' ? tabActive : ''}`}> <MdPayments />write</div></Link>

                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'> <CiSettings /> Settings</div>
                <div className='flex items-center gap-4'> <MdOutlineManageAccounts /> Account</div>
            </div>






        </div>
    )
}

export default Left