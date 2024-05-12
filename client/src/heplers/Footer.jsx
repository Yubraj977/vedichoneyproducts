import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
function Footer() {
  return (
    <div className='  w-full bg-tertiary flex justify-center items-center gap-8 flex-col text-primary  px-side'>

      <h1 className='text-2xl font-bold mt-4'>Suscribe To Get Our Updates</h1>

      <div className='flex gap-2  '>
        <input type="text"  className='w-96'/>
        <button className='bg-secondary rounded-md px-4 py-2 font-bold'>Suscribe</button>
      </div>
      <div className="things flex gap-32">
        {/* Contact Us */}
        <div className='flex flex-col'>
          <h1 className='font-bold mb-8'> Contat Us</h1>
          <p className='flex gap-1 items-center'>  <span> <FaPhoneAlt/> </span> +9779809724781</p>
          <p className='flex gap-1 items-center'> <span> <MdEmail /></span>maruirramaha@gmail.com</p>
          <p className='flex gap-1 items-center'> <span> <FaMapLocationDot /> </span>Tulsipurandsulpiler</p>
        </div>

        {/* Categores */}
        <div>
          <h1 className='mb-8 font-bold'>Categores</h1>
          <p>Category One</p>
          <p>Category One</p>
          <p>Category One</p>
          <p>Category One</p>
          <p>Category One</p>
          <p>Category One</p>
          <p>Category One</p>
        </div>


        {/* Supports */}
        <div>
          <h1 className='mb-8 font-bold'>Supports</h1>
          <p>About us</p>
          <p>Privacy Policy</p>
          <p>Return Policy</p>
          <p>Help Center</p>
          <p>Show Our Dealers</p>
          <p>Work with us</p>
        </div>
        {/* Links */}
        <div>
          <h1 className='mb-8 font-bold'>Links</h1>
          <p>Product Lists</p>
          <p>Order Tracking</p>
          <p>Products Guide</p>
          <p>Shopping Cart</p>
          <p>Our Blogs and Books</p>
        </div>
        {/* Payments */}
        <div>
          <h1 className='mb-8 font-bold'>Payments</h1>
          <div>
            <p>visa</p>
            <p>esewa</p>
            <p>khalti</p>
            <p>dealer</p>
          </div>
          <h1>Follow Us</h1>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>facebook</p>
        </div>
      </div>
    </div>
  )
}

export default Footer