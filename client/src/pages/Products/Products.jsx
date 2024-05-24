import React, { useState,useEffect } from 'react';
import ProductCard from './ProductCard';

function Products() {
  const [products,setproducts]=useState([])
  const [sortOption, setSortOption] = useState(''); 
  const [productFetchError,setproductFetchError]=useState()
  console.log(products);
  console.log(productFetchError);

  useEffect(()=>{
    fetch(`api/products/`)
    .then((res)=>res.json())
    .then((data)=>setproducts(data.data))
    .catch((err)=>setproductFetchError(err))
  },[])

const handleSortChange = (e) => {
  setSortOption(e.target.value);
 
  console.log(`Selected sort option: ${e.target.value}`);
};

  return (
    <div>
      <div className="first flex justify-between px-20">
        <div className="left">filter choose buy</div>
        <div className="right my-4">
      <select className='  border-slate-600 rounded-md focus:outline-none focus:border-slate-600 focus:ring-0' value={sortOption} onChange={handleSortChange }>
        <option value="" disabled>Sort</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="newest">Newest</option>
        <option value="bestSelling">Best Selling</option>
      </select>
    </div>
      </div>
      <div className=' w-full   px-mb_side  flex flex-wrap '>
        {products.map((item,i)=>(
           <ProductCard item={item} key={i}/>
        ))}
     
      </div>





                                            
    </div>
  )
}

export default Products;
