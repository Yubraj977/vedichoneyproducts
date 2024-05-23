import React, { useState,useEffect } from 'react';
import ProductCard from './ProductCard';

function Products() {
  const [products,setproducts]=useState([])
  console.log(products);
useEffect(() => {
  
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>setproducts(json))

}, [])

  return (
    <div>
      <div className=' w-full  border-red-700 px-mb_side  border-2 flex flex-wrap '>
        {products.map((item,i)=>(
           <ProductCard item={item} key={i}/>
        ))}
     
      </div>
    </div>
  )
}

export default Products;
