import React from 'react'
import { Link } from 'react-router-dom'
function ProfileEdit() {
  return (
    <div className='flex flex-col px-20 mt-top'>
      <h1 className='font-inter text-xl font-bold'>My Profile</h1>
      <div className="infos  mt-10 gap-10 w-full  flex flex-col ">


      <div className="top flex w-full  justify-between ">
          <div className="full_name flex flex-col gap-2 w-1/3 px-4">
            <h1 className='font-inter text-md font-semibold'> Full Name</h1>
            <input type="text" name="" id="" value={'Yubraj Khatri'} className='border-neutral-500 py-2 px-2 border outline-none'/>
          </div>

          <div className="email flex flex-col gap-2 w-1/3 px-4">
            <h1 className='font-inter text-md font-semibold'>Email Adress</h1>
            <input type="text" name="" id="" value={'Yubrajkhatri005@gmail.com'} className='border-neutral-500 py-2 px-2 border outline-none'/>
           
          </div>

          <div className="mobile flex flex-col gap-2 w-1/3 px-4" >
            <h1 className='font-inter text-md font-semibold'>Mobile number</h1>
            <input type="text" name="" id="" value={'+9779809724781'} className='border-neutral-500 py-2 px-2 border outline-none'/>
          </div></div>



        <div className="bot flex w-full  justify-between ">
          <div className="full_name flex flex-col gap-2 w-1/3 px-4">
            <h1 className='font-inter text-md font-semibold'> Birthday</h1>
            <input type="text" name="" id="" value={'19 sep 2004'} className='border-neutral-500 py-2 px-2 border outline-none'/>
          </div>

          <div className="email flex flex-col gap-2 w-1/3 px-4">
            <h1 className='font-inter text-md font-semibold'>Gender</h1>
            <input type="text" name="" id="" value={'Male'} className='border-neutral-500 py-2 px-2 border outline-none'/>
          </div>

          <div className="mobile flex flex-col gap-2 w-1/3 px-4">
            <h1 className='font-inter text-md font-semibold'>Admin</h1>
            <input type="text" name="" id="" value={'false'} className='border-neutral-500 py-2 px-2 border outline-none'/>
          </div></div>
       
      
         
          <button className=' font-bold text-white bg-secondary rounded-sm w-64 px-8 py-3'>Save changes</button>


      </div>

    </div>
  )
}

export default ProfileEdit