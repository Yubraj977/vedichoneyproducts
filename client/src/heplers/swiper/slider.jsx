import React from 'react';

function Slider({ slides, currentIndex }) {
    console.log(slides);
    console.log(currentIndex);
    return (
      
   
            < div  className='border-2 w-[60rem]'> 
            <div className="slider flex justify-between px-10 z-10" >
                <div className="left  p-10 w-1/2">
                    <h1 className='font-bold text-4xl mt-6 '>{slides[currentIndex].heading}</h1>
                    <p className=' font-inter mt-2 text-sm'>{slides[currentIndex].pagragraph}</p>
                    <button className='bg-secondary font-bold px-4 py-2 rounded-md mt-6 text-white'>Buy Now</button>
                </div>
                <div className='right h-96 border w-1/2 mr-36'>

                    <img src={slides[currentIndex].image} alt="" className='h-full w-full object-cover' />
                </div>
            </div>
            </div >



      
    );
}

export default Slider;
