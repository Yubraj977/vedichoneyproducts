import React from 'react'
import qr1 from '/qr1.jpg'
import qr2 from '/qr2.jpg'
import { useDispatch,useSelector } from 'react-redux'
function Checkout() {
  const cart=useSelector(state=>state.cart)
  return (
    <div className='flex items-center gap-10 flex-col'>

     <h1 className='text-2xl  font-bold capitalize text-secondary'>Our Api On the Developing phase 
    
     </h1>

<h1 className='font-inter text-4xl  font-bold underline'>Pay Here</h1>
<h2 className='font-semibold text-xl'>You Have to pay {cart.cartTotalAmount} for your {cart.cartTotalQuantity} items</h2>

     <div className='flex flex-col items-center'>
     <img src={qr1} alt=""  className='h-80'/>
      <img src={qr2} alt=""  className='w-80'/>
     </div>
<h2 className='font-semibold text-xl'>pay the money and send screenshot in vedicbeefarm@gmail.com</h2>
<h2 className='font-semibold text-xl'>We Will call You or email you back for order conformation</h2>
<button className='bg-secondary text-white font-semibold px-6 py-2 rounded-sm'> Done</button>
    </div>
  )
}

export default Checkout