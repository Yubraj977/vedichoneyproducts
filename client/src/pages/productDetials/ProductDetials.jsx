import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
function ProductDetials() {
    const navigate = useNavigate()
    const { id } = useParams();
    console.log(id)
    const [product, setproduct] = useState(null)
    console.log(`MY product ${product}`);
    console.log(product);
    useEffect(() => {
        async function fetchSoloProduct(){
        const res=await fetch(`https://vedicapi.onrender.com/api/product/${id}`)
        const data=await res.json()
        setproduct(data.product)
        }
        fetchSoloProduct()
        
    }, [])





    return (
        <div className=''>
            {product &&
                <div className="top w-full flex-col lg:items-start items-center lg:flex-row  flex  mt-top gap-16   px-mb_side" >
                    <div className="left lg:w-1/3  w-full  ">
                        <div className=' w-full lg:h-full h-72 '>
                            <img src={product.image} alt="" className='rounded-lg h-full w-full  object-contain lg:object-cover' />
                        </div>

                    </div>

                    <div className="  right w-full lg:w-2/3">
                        <h1 className='font-bold font-inter text-lg'>{product.title}</h1>
                        <div className='h-16  flex items-center gap-12 w-full justify-between pr-10 mt-top'>
                            <div className="left flex gap-4">


                                <div class="flex items-center">
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>

                                <div className='flex '>
                                    <p className='text-sm text-cyan-400'>All Reviews||</p>
                                    <p className='text-sm text-cyan-400'>Answers</p>
                                </div>
                            </div>

                            <div className="right hidden lg:block">
                                <div className='flex gap-14 text-2xl'>
                                    <FaShareAlt />
                                    <AiOutlineLike />
                                </div>
                                <h3>Free Shipping</h3>
                            </div>
                        </div>
                        <div className='mt-top'>
                            <p className='text-secondary_shade hover:text-secondary text-xl font-serif font-semibold'> RS. {product.price}</p>
                            <strike className='opacity-60'> Rs 2000</strike>
                        </div>
                        <div className='mt-top flex gap-4 items-center text-sm'>
                            <h3 className='mr-8'>Quantity : </h3>
                            <button className='bg-slate-200 text-neutral-600 hover:bg-slate-300 p-2'>
                                <FaMinus />
                            </button>
                            1
                            <button className='bg-slate-200 text-neutral-600 p-2 hover:bg-slate-300'>
                                <FaPlus />
                            </button>




                        </div>
                        <div className="det mt-top">
                            <div className="buttons flex justify-between gap-2 lg:gap-8 lg:flex-row flex-col  w-full">
                                <Link to={'/checkout'} className='border-2  w-full'>
                                    <button className='bg-[#2475B0] rounded-sm border py-4 text-white w-full font-semibold' >Buy Now</button>
                                </Link>

                                <Link to={'/cart'} className='w-full'>
                                    <button className='bg-secondary_shade hover:bg-secondary rounded-sm py-4 font-semibold w-full'  >Add to Cart</button>
                                </Link>

                            </div>
                        </div>

                        <div className="adding"></div>
                        <div className="discription mt-top">
                            <h3>Description</h3>
                            <p className='mt-1 border border-gray-300 rounded-lg p-4 bg-gray-100' dangerouslySetInnerHTML={{ __html: product && product.description }}></p>
                        </div>
        
                    </div>
                </div>
            }
            <div className="rating">

            </div>
        </div>
    )
}

export default ProductDetials