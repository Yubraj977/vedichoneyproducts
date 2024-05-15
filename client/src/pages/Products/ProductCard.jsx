import React from 'react'

function ProductCard({item}) {
    
    return (
        // 18%
        <div className=' hover:shadow-2xl h-100 w-[45%] lg:w-[18%] transition-transform duration-500 ease-in-out m-2 '>
            <div className='h-64 w-full'>
                <img src={item.image} alt="" className='h-full w-full object-contain' />
            </div>
            <div className='px-4 py-1'>
                <h1 className='font-inter font-medium line-clamp-2 text-sm mt-4'>
                 {item.title}
                </h1>
                <div className="actual text-secondary"> RS. {item.price}</div>
                <div className="discounted stroke-">  <strike> Rs .1025</strike></div>
            </div>

        </div>
    )
}

export default ProductCard