import React, { useState,useEffect } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';


import honey3 from '/honey3.jpeg'
import honey1 from '/honey1.jpeg'
import honey2 from '/honey2.jpeg'
import honey4 from '/honey4.jpeg'
import honey8 from '/honey8.png'

import CustomSlider from '../../heplers/swiper/CustomCarousel'
import BecomePartner from './BecomePartner';
import TopSellingProducts from './TopSellingProducts';
import Testimonials from './Testimonials/Testimonials';
import Faq from './Faq';
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);

  const images = [
    {
      imgURL:honey1,
      imgAlt: "img-1"
    },
    {
      imgURL:honey2,
      imgAlt: "img-2"
    },
    {
      imgURL:honey3,
      imgAlt: "img-3"
    },
    {
      imgURL:honey4,
      imgAlt: "img-4"
    }
  ];





  return (

    <div className=' mt-top flex items-center border flex-col z-0'>
      {/* slider */}
      <div className="slider lg:px-side px-mb_side w-full">
        <CustomSlider>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </CustomSlider>
      </div>
      {/* Top selling products */}
      <div className='w-full'>
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
