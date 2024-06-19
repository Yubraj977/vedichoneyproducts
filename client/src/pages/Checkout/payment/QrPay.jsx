import React from 'react';
import qr1 from '/qr1.jpg';
import qr2 from '/qr2.jpg';
import {useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useNavigate, } from 'react-router-dom';
import { orderPlaced } from '../../../../configs/redux/cart/CartSlice';


function QrPay() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
  const cart = useSelector(state => state.cart);
  const notify = (value) => toast.success(`Sucess:${value}`);
  const loginError = (value) => toast.error(`Error:${value}`);
  

  async function handleCreateOrder() {
    try {
      const response = await fetch('/api/order/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          shippingInfo: {
            address: cart.preOrderInfo.shippingInfo.adress, // Note: Ensure this matches your backend schema
            city: cart.preOrderInfo.shippingInfo.city,
            state: cart.preOrderInfo.shippingInfo.state,
            country: cart.preOrderInfo.shippingInfo.country,
            pinCode: cart.preOrderInfo.shippingInfo.pincode,
            phoneNo: cart.preOrderInfo.shippingInfo.phoneNumber,
          },
          orderItems: cart.cartItems.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.cartQuantity,
            image: item.image,
            product: item._id,
          })),
          paymentInfo: {
            deliveryMethod: cart.preOrderInfo.deliveryMethod,
            id: 'QR Payment', // You can modify this based on your backend requirements
            status: 'Paid', // You can modify this based on your backend requirements
            paymentMethod: cart.preOrderInfo.paymentMethod,
          },
          itemsPrice: cart.cartTotalAmount,
          taxPrice: cart.preOrderInfo.tax,
          shippingPrice: cart.preOrderInfo.stroePickup, // Typo corrected from 'stroePickup'
          totalPrice: cart.preOrderInfo.totalPrice,
         

        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Order created successfully:', data);
        notify('Order created successfully');
        dispatch(orderPlaced())
        navigate('/orderplaced');
        // Handle success scenario like displaying a confirmation message to the user
      } else {
        throw new Error('Failed to create order');
        loginError('Failed to create order');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      loginError(error.message);
      // Handle error scenario like displaying an error message to the user
    }
  }

  return (
    <div className='px-side flex flex-col items-center border border-gray-200 rounded-lg shadow'>
         <Toaster />
      <h1 className='text-center font-bold capitalize text-2xl mt-8'>Pay in one of these QR codes</h1>
      <h1 className='text-center text-secondary font-bold capitalize text-2xl mt-8'>Your Total Amount Rs {cart.preOrderInfo.totalPrice}</h1>

      <div className='flex w-full justify-between px-side'>
        <main className='content-center h-screen'>
          <div className='w-80 mx-auto bg-slate-300 p-4 rounded-[1.25rem] mb-5 shadow-lg'>
            <div className='justify-center w-72'>
              <div className='mb-5 h-72'>
                <img src={qr1} className='rounded-lg' alt='QR Code' />
              </div>
              <div className='px-3 space-y-2 text-center'>
                <h1 className='text-dark_blue text-[22px] font-bold'>VEDIC HONEYBEE FARMING </h1>
                <p className='font-normal text-light_slate_gray text-normal'>TERMINAL: 2222100005995101</p>
              </div>
            </div>
          </div>
        </main>

        <main className='content-center h-screen'>
          <div className='w-80 mx-auto bg-slate-300 p-4 rounded-[1.25rem] mb-5 shadow-lg'>
            <div className='justify-center w-72'>
              <div className='mb-5 h-72'>
                <img src={qr2} className='rounded-lg' alt='QR Code' />
              </div>
              <div className='px-3 space-y-2 text-center'>
                <h1 className='text-dark_blue text-[22px] font-bold'>Vedic Mahuri Palan</h1>
                <p className='font-normal text-light_slate_gray text-normal'>Account Number: 02501017501355</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <p className='text-center font-semibold text-2xl'>Pay your Price money in QR and click button below</p>
      <button
        className='text-white bg-secondary text-center font-semibold text-2xl mt-8 px-2 py-4 rounded-sm'
        onClick={handleCreateOrder}
      >
        Payment Complete, Place Order
      </button>
    </div>
  );
}

export default QrPay;
