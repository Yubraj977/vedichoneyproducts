import React from 'react'
import './css/top_selling.css'

function TopSellingProducts() {
  return (
    <div className='lg:px-side px-mb_side py-[100px]'>
    <h1 className='relative block-title font-semibold text-3xl text-center w-fit mx-auto'>Our Top Selling Product's</h1>
    <div className='flex gap-5 w-full mt-10 lg:flex-nowrap flex-wrap'>
      <div className='bg-gray-100 rounded-md'>
        <div className='w-full aspect-video'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='px-5 py-5'>
          <h2 className="text-2xl font-semibold mt-2">Hair Oil - Best of the best</h2>
          <p className='text-sm font-normal mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate velit nulla voluptas numquam distinctio accusamus facilis reprehenderit,</p>
          <div className='flex justify-between mt-4 gap-4'>
            <button className='w-1/2 py-4 bg-secondary rounded-md text-white font-semibold border-2 border-transparent transition-all hover:scale-105'>Buy Now</button>
            <button className='w-1/2 py-4  font-semibold rounded-md border-2 border-secondary text-secondary transition-all hover:scale-105'>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 rounded-md'>
        <div className='w-full aspect-video'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='px-5 py-5'>
          <h2 className="text-2xl font-semibold mt-2">Hair Oil - Best of the best</h2>
          <p className='text-sm font-normal mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate velit nulla voluptas numquam distinctio accusamus facilis reprehenderit,</p>
          <div className='flex justify-between mt-4 gap-4'>
            <button className='w-1/2 py-4 bg-secondary rounded-md text-white font-semibold border-2 border-transparent transition-all hover:scale-105'>Buy Now</button>
            <button className='w-1/2 py-4  font-semibold rounded-md border-2 border-secondary text-secondary transition-all hover:scale-105'>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className='bg-gray-100 rounded-md'>
        <div className='w-full aspect-video'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='px-5 py-5'>
          <h2 className="text-2xl font-semibold mt-2">Hair Oil - Best of the best</h2>
          <p className='text-sm font-normal mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate velit nulla voluptas numquam distinctio accusamus facilis reprehenderit,</p>
          <div className='flex justify-between mt-4 gap-4'>
            <button className='w-1/2 py-4 bg-secondary rounded-md text-white font-semibold border-2 border-transparent transition-all hover:scale-105'>Buy Now</button>
            <button className='w-1/2 py-4  font-semibold rounded-md border-2 border-secondary text-secondary transition-all hover:scale-105'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TopSellingProducts