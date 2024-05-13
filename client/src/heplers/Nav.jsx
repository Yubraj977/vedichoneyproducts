import  { useState,useEffect } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useRef} from 'react'
import useAnimation from './costum-hooks/UseAnimatioin';

function Nav() {
  const [visable,setvisable] = useState(false)
  const subMenuRef = useRef()
  useEffect(() => {
    if (visable && subMenuRef.current) {
      gsap.from(subMenuRef.current, {
        height: 0,
        duration: 0.8,
        ease: "circ.out",
      
      });
    }
  }, [visable]);
  
    
 
  


  
  const nav_item_style = "py-4 px-6 text-primary font-medium hidden lg:block  hover:text-tertiary cursor-pointer"

  return (
    <div className=''>
      <div className="upper-nav px-mb_side lg:px-side py-top flex flex-col  lg:flex-row lg:justify-between items-center">
       
        <div className="upper-nav-left ">
          <h1 className="text-2xl font-bold text-slate-700">VedicHoney<span className='text-secondary'>Products</span><span className="text-secondary">.</span></h1>
        </div>
        
        <div className="upper-nav-right  flex flex-row-reverse justify-center lg:justify-normal lg:flex-row flex-wrap-reverse items-center lg:gap-4 gap-4  ">
          
          <div className="searchbox flex justify-center items-center w-full lg:w-fit  border-2 overflow-hidden rounded-md">
            <input type="text" className="border-none outline-none w-full py-2 pl-3 pr-0 text-slate-700" placeholder='Search Products..' />
            <div className="search-icon flex justify-center items-center h-full  p-3 overflow-hidden">
              <IoSearch className='text-slate-600 font-normal' />
            </div>
          </div>

  
          <div className="cart flex justify-center items-center">
            <div className="icon p-3">
              <IoCartOutline className="text-3xl font-medium text-slate-600" />
            </div>
            <div className="cart-detail">
              <h3 className='text-sm font-normal text-slate-500'>Cart</h3>
              <p><strong className='text-sm text-slate-700'>$ 110,00</strong></p>
            </div>
          </div>

          <div className="user flex justify-center items-center mr-20 lg:mr-0">
            <div className="user-icon p-3">
              <LuUser2 className='text-3xl font-medium text-slate-600' />
            </div>
            <div className="user-detail">
              <h3 className='text-sm font-normal text-slate-500'>User</h3>
              <p><strong className='text-sm text-slate-700'>Account</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="lower-nav bg-secondary  px-mb_side lg:px-side">
        <div className="navigation flex ">
          <div className={`py-4 px-6 text-primary font-medium hover:text-tertiary cursor-pointer pl-0 flex items-center gap-3`}><GiHamburgerMenu />All Categories</div>
          <div className={`${nav_item_style} relative `}  onMouseEnter={(e)=> setvisable(true)} onMouseLeave={(e)=>setvisable(false)}>
            <div className='products-nav flex items-center gap-3 relative ' 
          
            > Products <IoIosArrowDown /></div>
            
            {
              visable ?
              <div ref={subMenuRef} className=' overflow-hidden products-sub-menu z-10 flex flex-col absolute top-full bg-secondary   rounded-sm scale-4'>
              <div className={`${nav_item_style}`}>Honey</div>
              <div className={`${nav_item_style}`}>Sampooo</div>
              <div className={`${nav_item_style}`}>Hair Oil</div>
            </div>
                : 
                <></>
            }

          </div>
          <div className={`${nav_item_style}`}>Blog</div>
          <div className={`${nav_item_style}`}>Contact</div>
          <div className={`${nav_item_style}`}>About</div>
        </div>
      </div>
    </div>
  )
}

export default Nav