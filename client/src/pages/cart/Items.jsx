import React from 'react'
import { GiSelfLove } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
function Items() {
    return (
        <div className='w-full mt-top flex  gap-10 font-inter flex-col lg:flex-row '>
            <div className='flex '>
                <div className='h-20 w-20'><img src="https://images.unsplash.com/33/IR8nDBZETv6aM6HdJ7RD_IMG_5784.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover' /></div>
                <div>
                    <h1 className='font-inter '>Mens Casual Slim Fit
                    Mens Casual Slim Fit
                    </h1>
                    <p className='text-sm mt-2 opacity-80'>Blue black and yhellow</p>
                </div>
            </div>

            <div className=''>
                <p className='text-secondary font-semibold'> Rs 2000</p>
                <strike className='opacity-70 text-sm'>Rs 3000</strike>
                <div className='flex w-full justify-between'>
                    <p><GiSelfLove /></p>
                    <p><MdDelete /></p>
                </div>
            </div>

            <div className='flex gap-2  lg:flex-row justify-between lg:justify-start '>
                <div className='w-8 text-center h-8 bg-slate-200 hover:bg-neutral-300 flex justify-center items-center'> 
                    <button>-</button>
                </div>

                <p className='font-semibold mt-1'>1</p>
                <div className='w-8 text-center h-8 bg-slate-200 hover:bg-neutral-300 flex justify-center items-center'> 
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default Items