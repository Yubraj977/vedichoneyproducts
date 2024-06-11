import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
function ProfileEdit() {
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
  function handleUpdateDetails(){
    
  }
  return (
    <div className='flex flex-col px-20 mt-top'>
      <h1 className='font-inter text-xl font-bold'>My Profile</h1>
      <div className="infos  mt-10 gap-10 w-full  flex flex-col ">


      <div className="top flex w-full   ">
          <div className="full_name flex flex-col gap-2 w-1/3 px-4">
            <h1 className='font-inter text-md font-semibold'> Full Name</h1>
            <input type="text" name="" id="" value={user.name} className='border-neutral-500 py-2 px-2 border outline-none' onChange={(e)=>setUser({...user,name:e.target.value})}/>
          </div>

          {/* <div className="email flex flex-col gap-2 w-1/3 px-4">
            <h1 className='font-inter text-md font-semibold'>Email Adress</h1>
            <input type="text" name="" id="" value={user.email} className='border-neutral-500 py-2 px-2 border outline-none' onChange={(e)=>setUser({...user,email:e.target.value})}/>
           
          </div> */}

          <div className="mobile flex flex-col gap-2 w-1/3 px-4" >
            <h1 className='font-inter text-md font-semibold'>Mobile number</h1>
            <input type="text" name="" id="" value={user.mobile} className='border-neutral-500 py-2 px-2 border outline-none' onChange={(e)=>setUser({...user,mobile:e.target.value})}/>
          </div></div>




          
          
    
      
         
          <button className=' font-bold text-white bg-secondary rounded-sm w-64 px-8 py-3' onClick={handleUpdateDetails}>Save changes</button>


      </div>

    </div>
  )
}

export default ProfileEdit