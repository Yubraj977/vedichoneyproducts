import React, { useEffect } from 'react'
import Items from './Items'
import { GiSelfLove } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseCart, addToCart, increaseCart, clearCart, getTotal } from '../../../configs/redux/cart/CartSlice';
import toast, { Toaster } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const myCart = useSelector(state => state.cart)

  const notify = (value) => toast.success(`Sucess:${value}`);
  const loginError = (value) => toast.error(`Error:${value}`);
  useEffect(() => {
    dispatch(getTotal())
  },[myCart])

  return (

    <div className='lg:px-16 px-2 flex  mt-top gap-4 flex-col min-h-screen'>
      <h1 className='text-center font-inter text-3xl  font-bold '>Manage Your Cart</h1>
      <Toaster />
      {myCart.cartItems.length === 0 ? (
        <div className='flex flex-col items-center'>
          <h1 className='text-center font-inter text-2xl  font-bold  mt-20 text-green-900'>Cart is empty</h1>
          <NavLink to={"/products"} className='bg-secondary px-4 py-2 font-semibold  text-white mt-8'>Go Shopping</NavLink>
        </div>
      ) : (
        <div>


          <div className="left w-5/7  h-full  w-full" >


            <div className='list flex  flex-col mt-10' >
              <table className="min-w-full bg-white  rounded-md ">
                <thead className='bg-slate-300 '>
                  <tr>

                    <th className="px-4 py-2 border font-inter">Product </th>

                    <th className="px-4 py-2 border font-inter">Price</th>
                    <th className="px-4 py-2 border font-inter">Stock Quantity</th>

                    <th className="px-4 py-2 border font-inter" >Total</th>

                  </tr>
                </thead>
                <tbody>



                  {myCart.cartItems.map((item) => {
                    return (
                      <tr className='text-center text-[0.72rem] font-inter   w-full'>
                        {/* Product */}
                        <td>
                          <div className='flex  py-2 '>

                            <div className='h-20 w-20'><img src={item.image} alt="" className='w-full h-full object-cover' /></div>


                            <div className=' flex w-full '>
                              <div>


                                <h1 className='font-inter '>{item.name}
                                </h1>
                                <p className='text-sm mt-2 opacity-80'>{item.category}</p>
                              </div>
                              <p className='text-sm font-inter  mt-0 ml-2 text-secondary' onClick={() => {
                                dispatch(removeFromCart(item))
                                notify(`${item.name} is removed from the cart`)
                              }}> Remove</p>
                            </div>


                          </div>
                        </td>


                        {/* Price */}
                        <td className="px-4 py-2 ">
                          <p className='text-secondary font-semibold'> Rs {item.price}</p>
                        </td>
                        {/* Quantity */}
                        <td className=''>
                          {/* <p className='text-2xl'><MdDelete /></p> */}
                          <div className='flex gap-2  lg:flex-row justify-center text-2xl items-center  '>
                            <div className='w-8 text-center h-8 bg-slate-200 hover:bg-neutral-300 flex justify-center items-center'
                              onClick={() => dispatch(decreaseCart(item))}>
                              <button >-</button>
                            </div>

                            <p className='font-semibold mt-1'>{item.cartQuantity}</p>
                            <div className='w-8 text-center h-8 bg-slate-200 hover:bg-neutral-300 flex justify-center items-center '
                              onClick={() => dispatch(increaseCart(item))}
                            >
                              <button >+</button>

                            </div>

                          </div>

                        </td>
                        <td>{item.price*item.cartQuantity}</td>
                      </tr>
                    )
                  })}



                </tbody>
              </table>
              <button className='px-2 py-1 text-white font-bold bg-secondary  w-32 ml-10 mt-6 ' onClick={() => {
                dispatch(clearCart())
                notify('Cart Cleared')
              }
              }>Clear Cart</button>
            </div>

          </div>




          <div className="right w-2/7  font-inter text-sm px-10 mb-10">
            <h1 className='font-semibold text-xl'>Order Summary</h1>
            <div className='mt-top flex justify-between  w-full  gap-20 items-center'>
              <h1 className='font-inter'>SubTotal({myCart.cartTotalQuantity} items )</h1>
              <h1 className='text-md  text-secondary font-semibold '>Rs. {myCart.cartTotalAmount}</h1>
            </div>
            <div className='mt-2 flex  justify-between'>
              <h1 className=' font-inter'>Shipping Fee</h1>
              <h1 className='text-secondary font-semibold'>Rs. 0</h1>
            </div>
            <div className='mt-2  flex justify-between'>
              <h1 className='font-inter'>Total</h1>
              <h1 className='text-secondary font-semibold'>Rs. {myCart.cartTotalAmount}</h1>
            </div>
            <button className='mt-8 bg-secondary_shade w-full py-2 rounded-sm hover:bg-secondary text-white ' onClick={() => navigate('/checkout')}>Proceed to Checkout ( {myCart.cartTotalQuantity}) </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Cart