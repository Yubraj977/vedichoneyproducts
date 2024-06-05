import React from 'react'
import { useNavigate } from 'react-router-dom'
function ProductCard({item}) {
    const navigate=useNavigate()
    return (
        // 18%
        <div className=' bg-slate-100 hover:shadow-2xl hover:bg-slate-200 h-100 w-[45%] lg:w-[18%] transition-transform duration-500 ease-in-out m-2 ' onClick={()=>navigate(`/product/${item._id}`)} >
            <div className='h-64 w-full'>
                <img src={item.image} alt="" className='h-full w-full object-contain' />
            </div>
            <div className='px-4 py-1'>
                <h1 className='font-inter font-medium line-clamp-2 text-sm mt-4'>
                 {item.name}
                </h1>
                <div className="actual text-secondary"> RS. {item.price}</div>
                <div className="discounted stroke-">  <strike> Rs .1025</strike></div>
            </div>

        </div>
    )
}

export default ProductCard