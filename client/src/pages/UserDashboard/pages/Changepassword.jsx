import React from 'react'

function Changepassword() {
  return (
    <div className='flex flex-col gap-10 px-mb_side'>
        <h1 className='mt-10 font-semibold text-lg '>Change Password</h1>

        <div>
            <h1 className='font-semibold font-inter text-sm'>Curent Password</h1>
            <input type="text" name="" id="" placeholder='' className=' border-2 w-[40%] outline-none mt-2 py-1 px-2 rounded-sm border-neutral-400' />
        </div>
        <div>
            <h1 className='font-semibold font-inter text-sm'>New Password</h1>
            <input type="text" name="" id="" placeholder='' className=' border-2 w-[40%] outline-none mt-2 py-1 px-2 rounded-sm border-neutral-400' />
        </div>
        <div>
            <h1 className='font-semibold font-inter text-sm'>Conform Password</h1>
            <input type="text" name="" id="" placeholder='' className=' border-2 w-[40%] outline-none mt-2 py-1 px-2 rounded-sm border-neutral-400' />
        </div>
        <button className=' font-bold text-white bg-secondary rounded-sm w-64 px-8 py-3'>Save changes</button>

    </div>
  )
}

export default Changepassword