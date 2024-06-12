import React, { useState,useEffect } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';


import slide3 from '/slide3.jpg'
import slide4 from '/slide4.jpg'
import slide5 from '/slide3.png'
import slide6 from '/slide4.png'
import slide7 from '/slide6.jpg'
import slidea from '/slidea.jpeg'
import slideb from '/slideb.jpeg'

import CustomSlider from '../../heplers/swiper/CustomCarousel'
import BecomePartner from './BecomePartner';
import TopSellingProducts from './TopSellingProducts';
import Testimonials from './Testimonials/Testimonials';
import Faq from './Faq';
import { Helmet } from 'react-helmet-async';
function Home() {

  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);





  const images = [
    {
      imgURL:slide3,
      imgAlt: "img-1"
    },
    {
      imgURL:slidea,
      imgAlt: "img-2"
    },
    {
      imgURL:slide5,
      imgAlt: "img-2"
    },
    {
      imgURL:slide6,
      imgAlt: "img-2"
    },
    {
      imgURL:slideb,
      imgAlt: "img-2"
    },
  
   
  ];





  return (

    <div className='  flex items-center  flex-col z-0'>
     
      <Helmet>
        <title>Vedic Honey Products - Pure, Natural, and Organic Honey</title>
        <meta name="description" content="Discover the purest honey products at Vedic Honey Products. Our organic and natural honey is perfect for your health and wellness needs." />
        <link rel="canonical" href="https://www.vedichoneyproducts.com/" />
      </Helmet>
      {/* slider */}
     
      <div className="slider   w-full">
        <CustomSlider>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </CustomSlider>
      </div>
      {/* Top selling products */}
      <div className='w-full flex-col '>
        <TopSellingProducts />
      </div>
      {/* Become our partner */}
      <div className='w-full'>
        <BecomePartner />
      </div>
      {/* Testimonals */}
      <div className='w-full lg:px-side'>
        <Testimonials />
      </div>
      {/* faq */}
      <div  className='w-full lg:px-side'>
        <Faq />
      </div>

    </div>
  );
}

export default Home;
