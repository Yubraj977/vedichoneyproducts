import React, {
   useEffect,
  useState
 } from 'react'
import { Link } from 'react-router-dom'



function Myprofile() {
  const [user,setUser]=useState({})
  console.log(user)

  useEffect(() => {
    fetch('http://localhost:5000/api/user/me', {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      }
  }).then((res)=>{console.log(res)
     return res.json()}).then((data)=>setUser(data.user)) 
  },[])
  return (
    <div className='flex flex-col px-20 mt-top'>
      <h1 className='font-inter text-xl font-bold'>My Profile</h1>
      <div className="infos  mt-10 gap-10 w-full  flex flex-col ">


      <div className="top flex w-full  justify-between ">
          <div className="full_name flex flex-col gap-2 w-1/3">
            <h1 className='font-inter text-md font-semibold'> Full Name</h1>
            <p className='font-inter text-sm'>{user.name}</p>
          </div>

          <div className="email flex flex-col gap-2 w-1/3 ">
            <h1 className='font-inter text-md font-semibold'>Email Adress</h1>
            <p className='font-inter text-sm'>{user.email}</p>
          </div>

          <div className="mobile flex flex-col gap-2 w-1/3">
            <h1 className='font-inter text-md font-semibold'>Mobile number</h1>
            <p className='font-inter text-md'>+977 ...</p>
          </div></div>



        <div className="but flex w-full   ">
          <div className="full_name flex flex-col gap-2 w-1/3">
            <h1 className='font-inter text-md font-semibold'>Verefied User</h1>
            <p className='font-inter text-sm'>{user&&user.isverified?'Yes':'No'} </p>
          </div>

          <div className="email flex flex-col gap-2 w-1/3 ">
            <h1 className='font-inter text-md font-semibold'>ProfileType</h1>
            <p className='font-inter text-sm'>{user.userType}</p>
          </div>

          
          
          </div>
       
         
          <Link to={'/dashboard?tab=profileedit'} className='text-center font-bold text-white bg-secondary rounded-sm w-64  py-3 mt-12'>Edit Profile</Link>
          <Link to={'/dashboard?tab=changepassword'} className='text-center font-bold text-white bg-secondary rounded-sm w-64 px-8 py-3'>Change Password</Link>


      </div>

    </div>
  )
}

export default Myprofile