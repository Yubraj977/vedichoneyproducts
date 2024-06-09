import { useState, useEffect } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import gsap from 'gsap'
import { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInSucess, signOutSucess } from '../../configs/redux/user/userSlice';

function Nav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [visable, setvisable] = useState(false)
  const [mobileVisable, setmobileVisable] = useState(false)
  const [searchTerm, setsearchTerm] = useState('')
  const [stillValidUser, setstillValidUser] = useState()
  const subMenuRef = useRef()
  const mobileNavRef = useRef()
  const user = useSelector((state) => state.user.currentUser)
  const cart = useSelector((state) => state.cart)

  const checkStillLogin = async () => {
    const res = await fetch(` api/auth/stillogin`, {
      method: 'POST',
      credentials: 'include',
    })
    const data = await res.json();
    if (res.ok) {
      setstillValidUser(true)
    }
    if (!res.ok) {

      setstillValidUser(false)
      dispatch(signOutSucess())


    }
  }

  useEffect(() => {
    checkStillLogin()
  }, [])

  useEffect(() => {
    if (visable && subMenuRef.current) {
      gsap.from(subMenuRef.current, {
        height: 0,
        duration: 0.8,
        ease: "circ.out",

      });
    }
  }, [visable]);
  useEffect(() => {

    gsap.from(mobileNavRef.current, {
      height: 0,
      y: -50,
      duration: 0.8,
      ease: "circ.out",

    });

  }, [mobileVisable]);







  const nav_item_style = "py-4 px-6  font-medium hidden lg:block  hover:text-tertiary cursor-pointer"

  return (
    <div className=''>
      <div className={`upper-nav px-mb_side lg:px-side py-top flex flex-col  lg:flex-row lg:justify-between items-center `}>

        <div className="upper-nav-left ">
          <NavLink to='/'>
            <h1 className="text-2xl font-bold text-slate-700">VedicHoney<span className='text-secondary'>Products</span><span className="text-secondary">.</span></h1>
          </NavLink>
        </div>

        <div className="upper-nav-right  flex flex-row-reverse justify-center lg:justify-normal lg:flex-row flex-wrap-reverse items-center lg:gap-4 gap-4  ">





          <div className="searchbox flex justify-center items-center w-full lg:w-fit  border-2 overflow-hidden rounded-md">
            <input type="text"
              onChange={(e) => setsearchTerm(e.target.value)}
              value={searchTerm}
              className="border-none outline-none w-full py-2 pl-3 pr-0 text-slate-700" placeholder='Search Products..'
            />
            <Link
              to={'/products?searchTerm=' + searchTerm}
              className="  search-icon flex justify-center items-center h-full  p-3 overflow-hidden">
              <IoSearch className='text-slate-600 font-normal'
              />
            </Link>
          </div>






          <NavLink to={'/cart'} className="cart flex justify-center items-center">
            <div className="icon p-3 relative">
              <IoCartOutline className="text-3xl font-medium text-slate-600" />
              <span className='absolute top-1 right-1 h-4 w-4 flex  justify-center items-center animate-pulse text-white bg-secondary rounded-full '>{cart.TotalItems == null ? 0 : cart.TotalItems}</span>
            </div>
            <div className="cart-detail">
              <h3 className='text-sm font-normal text-slate-500 '>
                cart

              </h3>
              <p><strong className='text-sm text-slate-700'> Rs {cart.TotalPrice == null ? 0 : cart.TotalPrice}</strong></p>
            </div>
          </NavLink>

          {user ?
            <NavLink to='/dashboard?tab=myprofile'>
              <div className="user flex justify-center items-center mr-20 lg:mr-0  ">
                <div className="user-icon p-3">
                  <div className='h-10 w-10'>
                    <img src={user.profileImage} alt="" className='h-full w-full object-cover rounded-full' />
                  </div>

                </div>
                <div className="user-detail">
                  <h3 className='text-sm font-normal text-slate-500'>{user.name}</h3>
                  <p><strong className='text-sm text-slate-700'>Account</strong></p>
                </div>
              </div>
            </NavLink>

            :
            <NavLink to='/login'>
              <div className="user flex justify-center items-center mr-20 lg:mr-0  ">
                <div className="user-icon p-3">
                  <LuUser2 className='text-3xl font-medium text-slate-600' />
                </div>
                <div className="user-detail">
                  <h3 className='text-sm font-normal text-slate-500'>User</h3>
                  <p><strong className='text-sm text-slate-700'>Account</strong></p>
                </div>
              </div>
            </NavLink>
          }

        </div>
      </div>

      <div className="lower-nav bg-secondary  px-mb_side lg:px-side">
        <div className="navigation flex text-white ">
          <div className={`py-4 px-6  font-medium relative hover:text-tertiary cursor-pointer pl-0 flex items-center gap-3 my-auto `} onClick={(e) => { setmobileVisable(!mobileVisable), navigate('/') }} ><GiHamburgerMenu /> <p className=' lg:block hidden'> Home</p>
            {mobileVisable ? <div className="for-mobile lg:hidden overflow-hidden z-40 flex flex-col absolute top-full -left-6 bg-secondary   rounded-sm scale-4 " ref={mobileNavRef}>
              <NavLink className="py-4 px-6  font-medium    hover:text-tertiary cursor-pointer" to='products'>Products</NavLink>
              <NavLink className="py-4 px-6  font-medium    hover:text-tertiary cursor-pointer" to='about'>About</NavLink>
              <NavLink className="py-4 px-6 font-medium    hover:text-tertiary cursor-pointer" to='/contact'>Contact</NavLink>
              <NavLink className="py-4 px-6  font-medium    hover:text-tertiary cursor-pointer" to='/blog'>Blogs</NavLink>
              <NavLink className="py-4 px-6  font-medium    hover:text-tertiary cursor-pointer" to='/learn'>Learn</NavLink>

              {user && user.userType === 'admin' && (
                <NavLink to={'/admin?tab=product'} className="cart flex justify-center items-center">
                  <button className='bg-secondary font-bold px-3 py-2 text-white'>Manage</button>
                </NavLink>
              )}

          

            </div> : <></>}
          </div>
          <div className={`${nav_item_style} relative `} onMouseEnter={(e) => setvisable(true)} onMouseLeave={(e) => setvisable(false)}>

            <NavLink to='/products'>  <div className='products-nav flex items-center gap-3 relative '>
              Products <IoIosArrowDown /></div></NavLink>

            {
              visable ?
                <div ref={subMenuRef} className=' overflow-hidden products-sub-menu z-10 flex flex-col absolute top-full bg-secondary   rounded-sm scale-4'>
                  <NavLink to={'/products?category=Raw-honey'}> <div className={`${nav_item_style}  text-sm`} >Raw-honey</div></NavLink>
                  <NavLink to={'/products?category=cosmetics'}>   <div className={`${nav_item_style}`}>Cosmetics</div></NavLink>
                  <NavLink to={'/products?category=Shampoo'}>  <div className={`${nav_item_style}`}>Shampoo</div></NavLink>
                  <NavLink to={'/products?category=medicine'}>  <div className={`${nav_item_style}`}>medicine</div></NavLink>
                </div>
                :
                <></>
            }

          </div>

          <NavLink to='/blog'>  <div className={`${nav_item_style}`}>Blog</div></NavLink>
          <NavLink to='/contact'>  <div className={`${nav_item_style}`}>Contact</div></NavLink>
          <NavLink to='about'>  <div className={`${nav_item_style}`}>About</div></NavLink>
          <NavLink to='/learn'>  <div className={`${nav_item_style}`}>Learn</div></NavLink>
          {user && (user.userType === 'admin'||user.userType === 'moderator') && (
            <NavLink to={'/admin?tab=product'} >  <div className={`${nav_item_style}`}>Manage Admin Pannel</div></NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav