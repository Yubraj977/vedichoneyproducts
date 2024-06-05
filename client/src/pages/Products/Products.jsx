import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Audio } from 'react-loader-spinner'


function Products() {
  const [products, setproducts] = useState([])
  const [sortOption, setSortOption] = useState('');
  const [productFetchError, setproductFetchError] = useState()
  const [productFetching, setproductFetching] = useState(false)
  console.log(`Products: ${products}`);
  console.log(productFetchError);

  useEffect(() => {
    setproductFetching(true)
    fetch(`https://vedicapi.onrender.com/api/product/allproducts`)
      .then((res) => res.json())
      .then((data) => { setproducts(data.products), setproductFetching(false) })
      .catch((err) => setproductFetchError(err))
  }, [])

  const handleSortChange = (e) => {
    setSortOption(e.target.value);

    console.log(`Selected sort option: ${e.target.value}`);
  };

  return (

    <div>
      <div className="first flex justify-between px-20 border bg-slate-200" >
        <div className="left  font-bold flex justify-center items-center ">Filter Choose Buy</div>
        <div className="right my-4">
          <select className='  border-slate-600 rounded-md focus:outline-none focus:border-slate-600 focus:ring-0' value={sortOption} onChange={handleSortChange}>
            <option value="" disabled>Sort</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="newest">Newest</option>
            <option value="bestSelling">Best Selling</option>
          </select>
        </div>
      </div>
      {productFetching ?
      <div className='h-screen w-full flex  justify-center'>
         <Audio
          height="100"
          width="100"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
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
