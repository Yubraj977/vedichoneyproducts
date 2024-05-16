import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <div className='  w-full bg-tertiary flex justify-center  items-center gap-4 flex-col text-primary  lg:px-side px-4   text-xl lg:text-sm'>

      <h1 className='text-2xl font-bold mt-20 text-center'>Suscribe To Get Our Updates</h1>

      <div className='flex gap-2  w-full  flex-warp   lg:justify-center flex-col  lg:flex-row'>
        <input type="text" className='lg:w-96 w-full text-black px-4 rounded-md h-12  ' />
        <button className='bg-secondary rounded-md px-4 py-2 font-bold'>Suscribe</button>
      </div>

      <div className="things flex lg:gap-2 justify-between mt-6 lg:flex-row lg:items-start   flex-col w-full flex-wrap  lg:pl-0">
        {/* Contact Us */}
        <div className='flex flex-col '>
          <h1 className='font-bold mb-4'> Contat Us</h1>
          <p className='flex gap-1 items-center'>  <span className='mr-4'> <FaPhoneAlt /> </span> +977 9857820351</p>
          <p className='flex gap-1 items-center'> <span className='mr-4'> <MdEmail /></span>vedicbeefarm@gmail.com</p>
          <p className='flex gap-1 items-center'> <span className='mr-4'> <FaMapLocationDot /> </span>Tulsipur-6 Rajaura Dang</p>
        </div>

        {/* Categores */}
        <div className='mt-6 lg:mt-0 '>
          <h1 className='lg:mb-4 font-bold'>Categores</h1>
          <p>Honey </p>
          <p>Bathing Sampoo</p>
          <p> Relief Oil</p>
          <p> Honey Bee</p>
          <p>Flour</p>
          <p>Apple</p>

        </div>


        {/* Supports */}
        <div className='mt-6 lg:mt-0'>
          <h1 className='lg:mb-4 font-bold'>Supports</h1>
          <NavLink to='/about'> <p> About us</p></NavLink>
          <NavLink to='privacy'> <p>Privacy Policy </p></NavLink>
          <NavLink to='/returnpolicy'> <p>Return Policy </p> </NavLink>
          <p>Help Center</p>
          <p>Show Our Dealers</p>
          <NavLink to='/contact'> <p>Work with us</p></NavLink>
        </div>
        {/* Links */}
        <div className='mt-6 lg:mt-0'>
          <h1 className='lg:mb-4 font-bold'>Links</h1>
          <p>Product Lists</p>
          <p>Order Tracking</p>
          <p>Products Guide</p>
          <p>Shopping Cart</p>
          <NavLink to='/blog'><p>Our Blogs and Books</p> </NavLink>
          
        </div>
        {/* Payments */}
        <div className='mt-6 lg:mt-0'>
          <h1 className='lg:mb-4 font-bold'>Payments</h1>
          <div className='flex items-center gap-2 mb-6'>
            <p><FaCcVisa /></p>
            <p>esewa</p>
            <p>khalti</p>
            <p>dealer</p>
          </div>
          <h1 className='font-bold lg:mb-4 mt-6 lg:mt-0'> Follow Us</h1>
          <p>Twitter</p>
          <p>Instagram</p>
          <a href='https://www.facebook.com/vedicbeefarm' target='_blank'>facebook</a>
        </div>
      </div>
      <div className='border-t-[0.1px] border-opacity-10 w-full flex  flex-col items-center opacity-90 py-4'>
        <p className='text-sm opacity-60' >Privacy Policy | Terms & Conditions | Sitemap</p>
        <p className='text-sm opacity-90'>Copyright © 2024 ,Vedic Honey Product | All rights Reserved</p>

      </div>

    </div>
  )
}

export default Footer