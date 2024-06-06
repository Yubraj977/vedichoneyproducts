import React from 'react'
import './css/top_selling.css'
import { useState, useEffect } from 'react'
import DOMPurify from 'dompurify';

function Me({ product }) {

  const extractFirst10Words = (content) => {
    if (content) {
      const words = content.split(/\s+/);
      const first10Words = words.slice(20, 38).join(' ');
      return first10Words;
    }
    return '';
  };
  return (
    <>
      <div className='bg-gray-200 rounded-md '>
        <div className='w-full h-60 '>
          <img className='w-full h-full object-contain' src={product.image} alt="" />
        </div>
        <div className='px-5 py-5'>
          <h2 className="text-2xl font-semibold mt-2  line-clamp-1">{product.name}</h2>
          <p className='text-sm font-normal mt-2' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(extractFirst10Words(product && product.description)) }}></p>
          <div className='flex justify-between mt-4 gap-4'>
            <button className='w-1/2 py-4 bg-secondary rounded-md text-white font-semibold border-2 border-transparent transition-all hover:scale-105'>Buy Now</button>
            <button className='w-1/2 py-4  font-semibold rounded-md border-2 border-secondary text-secondary transition-all hover:scale-105'>Add to Cart</button>
          </div>
        </div>
      </div>

    </>
  )
}


function TopSellingProducts() {
  const [products, setproducts] = useState([])
  useEffect(() => {
    // setproductFetching(true)
    fetch(`https://vedicapi.onrender.com/api/product/allproducts?limit=3`)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data.products)
      }
      )



  }, [])



  return (
    <div className='lg:px-side px-mb_side py-[100px]'>
      <h1 className='relative block-title font-semibold text-3xl text-center w-fit mx-auto'>Our Top Selling Product's</h1>
      <div className='flex gap-5 w-full mt-10 lg:flex-nowrap flex-wrap'>



        {products.map((product) => (
          <Me product={product} />
        ))}

      </div>
    </div>
  )
}

export default TopSellingProducts