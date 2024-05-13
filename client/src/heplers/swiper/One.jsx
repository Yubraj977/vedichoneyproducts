import React, { useEffect } from 'react'
import honey from '/honey3.png'
import { gsap } from "gsap";

function One() {
useEffect(() => {
  
  gsap.from( ".slider", { duration:0.2,ease: "power2.inOut",   x: 100})

}, [])

    
    
  return (
    <div> 
      <div className="slider flex justify-between px-10 z-10" >
    <div className="left  p-10 w-1/2">
      <h1 className='font-bold text-4xl mt-6 '>guy Honey And Buy Aagain And Again </h1>
      <p className=' font-inter mt-2 text-sm'>This is our honey not our but our bee honey . Buy lick and Buy Again. The Number One Honey From Nepal</p>
      <button className='bg-secondary font-bold px-4 py-2 rounded-md mt-6 text-white'>Buy Now</button>
    </div>
    <div className='right h-96 border w-1/2 mr-36'>
      
<img src={honey} alt="" className='h-full w-full object-cover'/>
    </div>
  </div>
  </div>
  )
}

export default One