import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ColorRing } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';
import CustomPagination from '../../heplers/costum-hooks/CustomPagination';
import { Helmet } from 'react-helmet-async';
function Products() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [productFetchError, setProductFetchError] = useState();
  const [productFetching, setProductFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('searchTerm');
  const category = searchParams.get('category');
  console.log(searchTerm);
 


  useEffect(() => {
    fetchProducts();
  }, [sortOption, searchTerm, category, currentPage]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    console.log(`Selected sort option: ${e.target.value}`);
  };

  const fetchProducts = async () => {
    setProductFetching(true);
    try {
      let url = `/api/product/allproducts?startIndex=${(currentPage - 1) * 10}&limit=10`;
      const params = new URLSearchParams();

      if (sortOption) {
        if (sortOption.includes('price')) {
          params.append('price', sortOption);
        } else if (sortOption.includes('date')) {
          params.append('date', sortOption);
        }
      }

      if (searchTerm) {
        params.append('searchTerm', searchTerm);
      }

      if (category) {
        params.append('category', category);
      }

      url += `&${params.toString()}`;
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        console.log(data);
        setProducts(data.products);
        setTotalPages(Math.ceil(data.totalProducts / 10));
      } else {
        setProductFetchError(data.message);
      }
    } catch (error) {
      setProductFetchError(error.message);
    } finally {
      setProductFetching(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="Buy our honey related products " />
        <link rel="canonical" href="/products" />
      </Helmet>
      <div className="flex justify-between px-20 border bg-slate-200">
        <div className="font-bold flex justify-center items-center">
          Filter Choose Buy
        </div>
        <div className="my-4">
          <select
            className="border-slate-600 rounded-md focus:outline-none focus:border-slate-600 focus:ring-0"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="" disabled>
              Sort
            </option>
            <option value="price-dsc">Price: High to Low</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="date-dsc">Newest</option>
            <option value="date-asc">Oldest</option>
          </select>
        </div>
      </div>
      {productFetching ? (
        <div className="h-screen w-full flex justify-center my-20">
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
      ) : (
        <div className="w-full px-mb_side flex flex-wrap">
          {products.map((item, i) => (
            <ProductCard item={item} key={i} />
          ))}
          {productFetchError && (
            <div className="w-full h-screen flex justify-center items-center">
              {productFetchError}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-center my-10">
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Products;
