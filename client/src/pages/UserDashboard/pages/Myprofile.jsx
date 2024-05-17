import React from 'react'
import { Link } from 'react-router-dom'

function Myprofile() {
  return (
    <div className='flex flex-col px-20 mt-top'>
      <h1 className='font-inter text-xl font-bold'>My Profile</h1>
      <div className="infos  mt-10 gap-10 w-full  flex flex-col ">


      <div className="top flex w-full  justify-between ">
          <div className="full_name flex flex-col gap-2 w-1/3">
            <h1 className='font-inter text-md font-semibold'> Full Name</h1>
            <p className='font-inter text-sm'>Yubraj Khatri</p>
          </div>

          <div className="email flex flex-col gap-2 w-1/3 ">
            <h1 className='font-inter text-md font-semibold'>Email Adress</h1>
            <p className='font-inter text-sm'>Yubraj Kahtri005@gmail.com</p>
          </div>

          <div className="mobile flex flex-col gap-2 w-1/3">
            <h1 className='font-inter text-md font-semibold'>Mobile number</h1>
            <p className='font-inter text-md'>+977 9809724781</p>
          </div></div>



        <div className="but flex w-full  justify-between ">
          <div className="full_name flex flex-col gap-2 w-1/3">
            <h1 className='font-inter text-md font-semibold'> Birthday</h1>
            <p className='font-inter text-sm'>19 feb 2020</p>
          </div>

          <div className="email flex flex-col gap-2 w-1/3 ">
            <h1 className='font-inter text-md font-semibold'>Gender</h1>
            <p className='font-inter text-sm'>Male</p>
          </div>

          <div className="mobile flex flex-col gap-2 w-1/3">
            <h1 className='font-inter text-md font-semibold'>Admin</h1>
            <p className='font-inter text-md'>+None</p>
          </div></div>
       
         
          <Link to={'/dashboard?tab=profileedit'} className='text-center font-bold text-white bg-secondary rounded-sm w-64  py-3 mt-12'>Edit Profile</Link>
          <Link to={'/dashboard?tab=changepassword'} className='text-center font-bold text-white bg-secondary rounded-sm w-64 px-8 py-3'>Change Password</Link>


      </div>

    </div>
  )
}

export default Myprofile