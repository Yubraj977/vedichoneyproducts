import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

function  Nav() {
  return (
    <div className=''>
      <div className="upper-nav px-[140px] py-side flex justify-between items-center">
        <div className="upper-nav-left">
          <h1 className="text-2xl font-bold text-slate-700">e-Shop<span className="text-secondary">.</span></h1>
        </div>
        <div className="upper-nav-right flex items-center gap-4  ">
          <div className="searchbox flex justify-center items-center  border-2 overflow-hidden rounded-md">
            <input type="text" className="border-none outline-none py-2 pl-3 pr-0 text-slate-700" placeholder='Search Products..' />
            <div className="search-icon flex justify-center items-center h-full w-full p-3 overflow-hidden">
              <IoSearch className='text-slate-600 font-normal' />
            </div>
          </div>
          <div className="cart flex justify-center items-center">
            <div className="icon p-3">
            <IoCartOutline className="text-3xl font-medium text-slate-600" />
            </div>
            <div className="cart-detail">
              <h3 className='text-sm font-normal text-slate-500'>Cart</h3>
              <p><strong className='text-sm text-slate-700'>$ 110,00</strong></p>
            </div>
          </div>
          <div className="user flex justify-center items-center">
            <div className="user-icon p-3">
            <LuUser2 className='text-3xl font-medium text-slate-600' />
            </div>
            <div className="user-detail">
              <h3 className='text-sm font-normal text-slate-500'>User</h3>
              <p><strong className='text-sm text-slate-700'>Account</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="lower-nav bg-secondary h-[80px]">
        <div className="navigation">

        </div>
      </div>
    </div>
  )
}

export default  Nav