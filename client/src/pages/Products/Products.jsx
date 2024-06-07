import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ColorRing } from 'react-loader-spinner'
import { useLocation } from 'react-router-dom';

function Products() {
  const [products, setproducts] = useState([])
  const [sortOption, setSortOption] = useState('');
  const [productFetchError, setproductFetchError] = useState()
  const [productFetching, setproductFetching] = useState(false)
  const location=useLocation()
const searchParams=new URLSearchParams(location.search)
const searchTerm=searchParams.get('searchTerm')
const category=searchParams.get('category')
console.log(searchTerm)
  useEffect(() => {
   fetchProducts()
  }, [sortOption,searchTerm,category])

  const handleSortChange = (e) => {
    setSortOption(e.target.value);

    console.log(`Selected sort option: ${e.target.value}`);
  };
  const fetchProducts=async ()=>{
  setproductFetching(true);
  try {
    let url=`https://vedicapi.onrender.com/api/product/allproducts`
    if (sortOption) {
      if (sortOption.includes('price')) {
        url += `?price=${sortOption}`;
      } else if (sortOption.includes('date')) {
        url += `?date=${sortOption}`;
      
      }
    }
    if(searchTerm){
     
      url+=`?searchTerm=${searchTerm}`
      console.log(url)
    }
    if(category){
      url+=`?category=${category}`
    }
    const res=await fetch(url)
    const data=await res.json()
    if(res.ok){
      setproducts(data.products)
      setproductFetching(false);
    }
    else{
      setproductFetchError(data.message)
      setproductFetching(false);
    }
    
  } catch (error) {
    setproductFetchError(error.message)
    setproductFetching(false)
  }
  }

  return (

    <div>
      <div className="first flex justify-between px-20 border bg-slate-200" >
        <div className="left  font-bold flex justify-center items-center ">Filter Choose Buy</div>
        <div className="right my-4">
          <select className='  border-slate-600 rounded-md focus:outline-none focus:border-slate-600 focus:ring-0' value={sortOption} onChange={handleSortChange}>
            <option value="" disabled>Sort</option>
            <option value="price-dsc">Price: High to Low</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="date-dsc">Newest</option>
            <option value="date-asc">Oldest</option>
          </select>
        </div>
      </div>
      {productFetching ?
      <div className='h-screen w-full flex  justify-center my-20'>
          <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
        </div>
        : <div className=' w-full   px-mb_side  flex flex-wrap '>
        {products.map((item, i) => (
          <ProductCard item={item} key={i} />
        ))}

      </div>}

     






    </div>
  )
}

export default Products;
