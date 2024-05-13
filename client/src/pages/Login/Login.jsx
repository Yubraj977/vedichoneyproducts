import React from 'react'
import honey from '/honey3.png'
function Login() {
  return (
    <div className='px-mb_side py-top flex justify-between w-full'>
      <div className="left w-1/2 flex gap-4 flex-col  items-center justify-center px-side  ">
        <h1 className='font-bold text-5xl  px-8 w-full text-center'>Login</h1>
        <div className="google bg-secondary px-8 py-4 rounded-md w-full font-bold">
          Login With Google
        </div>
        <div className="facebook bg-secondary px-8 py-4 rounded-md w-full font-bold">
          Login With Facebook
        </div>
        <form className='flex flex-col gap-2 w-full'>
          <input type="text" placeholder='Email' className='py-2  outline-none border rounded-sm'/>
          <input type="text" placeholder='Password' className='py-2 outline-none border rounded-sm' />
          <button type='submit' className=' w-full bg-secondary py-2 rounded-md'>Login</button>
          <div className='flex'>
            <h1>Dont have Account ? <span className='text-secondary'> SignUp </span></h1>
          </div>

        </form>
      </div>
      <div className="rght 1-1/2 border w-1/2">
        <img src={honey} alt="" className='h-full w-full object-cover' />
      </div>
    </div>
  )
}

export default Login