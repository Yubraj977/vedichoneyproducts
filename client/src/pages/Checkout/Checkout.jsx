import React from 'react'
import qr1 from '/qr1.jpg'
import qr2 from '/qr2.jpg'
function Checkout() {
  return (
    <div className='flex items-center gap-10 flex-col'>

     <h1 className='text-2xl  font-bold capitalize text-secondary'>Our Api On the Developing phase 
    
     </h1>

<h1 className='font-inter text-4xl  font-bold underline'>Pay Here</h1>

     <div className='flex flex-col items-center'>
     <img src={qr1} alt=""  className='h-80'/>
      <img src={qr2} alt=""  className='w-80'/>
     </div>


    </div>
  )
}

export default Checkout