import React from 'react'
import Items from './Items'
function Cart() {
  return (
    <div className='lg:px-16 px-2 flex  justify-between mt-top flex-col lg:flex-row gap-4'>
      <div className="left w-5/7  h-full" >
      <Items/>
      </div>




      <div className="right w-2/7  font-inter ">
        <h1 className='font-semibold text-xl'>Order Summary</h1>
        <div className='mt-top flex justify-between  w-full  gap-20 items-center'>
          <h1 className='font-inter'>SubTotal(5 items)</h1>
          <h1 className='text-md  text-secondary font-semibold '>Rs. 3399</h1>
        </div>
        <div className='mt-2 flex  justify-between'>
          <h1 className=' font-inter'>Shipping Fee</h1>
          <h1 className='text-secondary font-semibold'>Rs. 140</h1>
        </div>
        <div className='mt-2  flex justify-between'>
          <h1 className='font-inter'>Total</h1>
          <h1 className='text-secondary font-semibold'>Rs. 1200</h1>
        </div>
        <button className='mt-8 bg-secondary_shade w-full py-2 rounded-sm hover:bg-secondary text-white'>Proceed to Checkout (1) </button>
      </div>
    </div>
  )
}

export default Cart