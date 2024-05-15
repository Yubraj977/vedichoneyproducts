import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
function ProductDetials() {
    const { id } = useParams();
    const [product, setproduct] = useState(null)
    console.log(product);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setproduct(json))
    }, [])





    return (
        <div className=''>
            {product &&
                <div className="top w-full flex  mt-top gap-16 border-red-600  px-mb_side" >
                    <div className="left w-1/3 border-green-500 ">
                        <div className='bg-slate-400'>
                            <img src={product.image} alt="" className='rounded-lg' />
                        </div>

                    </div>

                    <div className="right w-2/3  border-cyan-500">
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

                                <div className='flex'>
                                    <p className='text-sm text-cyan-400'>All Reviews||</p>
                                    <p className='text-sm text-cyan-400'>Answers</p>
                                </div>
                            </div>

                            <div className="right">
                                <div className='flex gap-14 text-2xl'>
                                    <FaShareAlt />
                                    <AiOutlineLike />
                                </div>
                                <h1>Free Shipping</h1>
                            </div>
                        </div>
                        <div className='mt-top'>
                            <h1 className='text-secondary_shade hover:text-secondary text-xl font-serif font-semibold'> RS. {product.price}</h1>
                            <strike className='opacity-60'> Rs 2000</strike>
                        </div>
                        <div className='mt-top flex gap-4 items-center text-sm'>
                            <h1 className='mr-8'>Quantity : </h1>
                            <button className='bg-slate-200 text-neutral-600 hover:bg-slate-300 p-2'>
                                <FaMinus />
                            </button>
                            1
                            <button className='bg-slate-200 text-neutral-600 p-2 hover:bg-slate-300'>
                                <FaPlus />
                            </button>




                        </div>
                        <div className="det mt-top">
                            <div className="buttons flex justify-between gap-8 ">
                                <button className='bg-[#2475B0] rounded-sm px-12 py-2 text-white w-full font-semibold'>Buy Now</button>
                                <button className='bg-secondary_shade hover:bg-secondary rounded-sm px-12 py-4 w-full font-semibold' >Add to Cart</button>
                            </div>
                        </div>

                        <div className="adding"></div>
                        <div className="discription mt-top">
                            <h1>Description</h1>
                            <p className='mt-1 border border-gray-300 rounded-lg p-4 bg-gray-100'>{product.description}</p>
                        </div>
                        <div className="features mt-top">
                            <h1 className='text-lg font-semibold font-sans'>Features and detials</h1>
                            <ul class="list-disc pl-6">
                                <li>High Performance: Indicates the product operates efficiently and effectively under various conditions.</li>
                                <li>Durability: Highlights the product's ability to withstand wear and tear over an extended period.</li>
                                <li>Versatility: Emphasizes the product's ability to be used in multiple ways or scenarios.</li>
                                <li>User-Friendly Interface: Indicates that the product has an intuitive and easy-to-use interface.</li>
                                <li>Customization Options: Allows users to tailor the product to their specific needs or preferences.</li>
                                <li>Compatibility: Ensures that the product works seamlessly with other devices or software.</li>
                                <li>Security Features: Guarantees protection against unauthorized access or cyber threats.</li>
                                <li>Energy Efficiency: Signifies that the product consumes minimal energy during operation.</li>
                                <li>Ergonomic Design: Highlights a design that prioritizes user comfort and efficiency.</li>
                                <li>Scalability: Indicates the product's ability to handle increased workload or user base without compromising performance.</li>
                                <li>Integration Capabilities: Ability to integrate with other systems or platforms to enhance functionality.</li>
                                <li>Remote Accessibility: Allows users to access or control the product from a distance.</li>
                                <li>Multi-platform Support: Supports operation across various operating systems or platforms.</li>
                                <li>Real-time Updates: Provides users with live or instantaneous updates on relevant information.</li>
                                <li>Data Analytics: Offers insights and analysis based on the data collected by the product.</li>
                                <li>Backup and Recovery: Ensures data safety through regular backups and efficient recovery procedures.</li>
                                <li>Compliance Standards: Meets industry regulations and standards for quality and safety.</li>
                                <li>Service and Support: Offers comprehensive customer service and technical support options.</li>
                                <li>Warranty Coverage: Provides assurance with a warranty against defects or malfunctions.</li>
                                <li>Sustainability Features: Incorporates eco-friendly materials or processes to minimize environmental impact.</li>
                            </ul>

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