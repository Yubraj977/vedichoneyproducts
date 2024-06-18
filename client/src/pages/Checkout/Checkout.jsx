import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useOutletContext,useNavigate } from 'react-router-dom'

import {
  CitySelect,
  CountrySelect,
  StateSelect,

} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import toast, { Toaster } from 'react-hot-toast';
function Checkout() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const [countryId, setCountryId] = useState('');
  const [stateId, setStateId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shippingInfo, setshippingInfo] = useState({

  })
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [checkoutData,setcheckoutData]=useOutletContext();
  const navigate=useNavigate();






  function handleFormSubmit(e) {
    e.preventDefault();
    if (!shippingInfo.country || !shippingInfo.state || !shippingInfo.city ||
      !shippingInfo.phoneNumber || !shippingInfo.pincode || !shippingInfo.adress ||
      !paymentMethod || !deliveryMethod) {
    toast.error("Please fill out all required fields");
    return;
  }
    
    const data={tax,stroePickup,totalPrice,paymentMethod,deliveryMethod,shippingInfo}
    setcheckoutData(data)
    navigate('/confirm')
  }
  const tax = cart.cartTotalAmount * 0.18
  const stroePickup = cart.cartTotalQuantity > 100 ? 0 : 200;
  const totalPrice = tax + stroePickup + cart.cartTotalAmount + (paymentMethod == 'cash-on-delivery' ? 100 : 0)
  +(deliveryMethod=="fast-delivery"?200:0)+(deliveryMethod=="fastest-express-delivery"?300:0)
  
  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handleDeliveryChange = (event) => {
    setDeliveryMethod(event.target.value);
  };
  const notify = (value) => toast.success(`Sucess:${value}`);
  const loginError = (value) => toast.error(`Error:${value}`);

  return (
    <div className='flex items-center  flex-col w-full'>
      <section className=" py-8 e bg-slate-200 md:py-16 w-full border border-green-600">
        {/* Steps */}



        <Toaster />
        <form action="#" className=" mx-auto max-w-screen-xl px-8 2xl:px-0" autoComplete='off' onSubmit={handleFormSubmit} >

          <ol className="items-center flex  justify-center max-w-2xl text-center text-sm font-medium text-gray-500  sm:text-base  border-red-500 w-[100rem]">
            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/']  sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Cart
              </span>
            </li>
            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/']  sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Checkout
              </span>
            </li>
            <li className="flex shrink-0 items-center">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Order summary
            </li>
          </ol>


          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 ">
                  Delivery Details
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">



                  {/* country Select */}


                  <div className="mb-2  flex-col flex items-start gap-2 ">
                    <div className=" ">
                      <label
                        htmlFor="select-city-input-3"
                        className="block text-sm font-medium text-gray-900"
                      >
                        {" "}
                        Country*{" "}
                      </label>
                    </div>

                    <div className=' w-full'>
                      <CountrySelect
                        className='  block w-full rounded-lg  bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500'
                        onChange={(e) => {
                          setCountryId(e.id);
                          setshippingInfo({ ...shippingInfo, country: e.name })
                        }}
                        placeHolder="Select Country"
                      />
                    </div>
                  </div>

                  {/* State select Div */}

                  <div className="mb-2  flex-col flex items-start gap-2 ">
                    <div className=" ">
                      <label
                        htmlFor="select-city-input-3"
                        className="block text-sm font-medium text-gray-900"
                      >
                        {" "}
                        State*{" "}
                      </label>
                    </div>

                    <div className=' w-full'>
                      <StateSelect
                        countryid={countryId}
                        onChange={(e) => {
                          setStateId(e.id);
                          setshippingInfo({ ...shippingInfo, state: e.name })
                        }}
                        placeHolder="Select State"
                      />
                    </div>
                  </div>



                  {/* City select Div */}

                  <div className="mb-2  flex-col flex items-start gap-2 ">
                    <div className=" ">
                      <label
                        htmlFor="select-city-input-3"
                        className="block text-sm font-medium text-gray-900"
                      >
                        {" "}
                        City*{" "}
                      </label>
                    </div>

                    <div className=' w-full'>
                      <input
                        autofill="off"
                        autoComplete='off'
                        type="text"
                        id="city"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                        placeholder="city"
                        required=""
                        onChange={(e) => { setshippingInfo({ ...shippingInfo, city: e.target.value }) }}

                        value={shippingInfo.city}
                      />
                    </div>
                  </div>


                  {/* Phonenumber */}
                  <div>


                    <div className="mb-2  flex-col flex items-start gap-2 ">
                      <div className=" ">
                        <label
                          htmlFor="select-city-input-3"
                          className="block text-sm font-medium text-gray-900"
                        >
                          {" "}
                          Phone*{" "}
                        </label>
                      </div>

                      <div className=' w-full'>
                        <PhoneInput
                          country={'np'}
                          regions={["asia",]}
                          value={phoneNumber}
                          // onChange={phone =>
                          //    {setPhoneNumber( phone )}}
                          onChange={(e) => { setPhoneNumber(e), setshippingInfo({ ...shippingInfo, phoneNumber: e }) }}
                        />
                      </div>
                    </div>

                  </div>



                  {/* Pincode */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900  "
                    >
                      {" "}
                      Pincode{" "}
                    </label>
                    <input
                      max={"9999"}
                      type="number"
                      id="pincode"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                      placeholder="4444"
                      required=""
                      onChange={(e) => { setshippingInfo({ ...shippingInfo, pincode: e.target.value }) }}
                      value={shippingInfo.pincode}
                    />
                  </div>

                  {/* Adress */}
                  <div>
                    <label
                      htmlFor="company_name"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Adress{" "}
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                      placeholder="tulsipur 3 dang, Nepal Banke"
                      required=""
                      value={shippingInfo.adress}
                      onChange={(e) => { setshippingInfo({ ...shippingInfo, adress: e.target.value }) }}
                    />
                  </div>



                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 "
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14m-7 7V5"
                        />
                      </svg>
                      Add new address
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900  ">
                  Payment
                </h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {/* Credit Card payment */}
                  <div className="rounded-lg border border-gray-200 bg-[rgba(243,97,75,0.20)] p-4 ps-4 ">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="credit-card"
                          value="credit-card"
                          aria-describedby="credit-card-text"
                          type="radio"
                          name="payment-method"
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                          checked={paymentMethod === "credit-card"}
                          onChange={handlePaymentChange}
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="credit-card"
                          className="font-medium leading-none text-gray-900"
                        >
                          Credit Card
                        </label>
                        <p
                          id="credit-card-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          Pay with your credit card
                        </p>
                      </div>
                    </div>
                  </div>


                  {/* Payment on delivery */}
                  <div className="rounded-lg border border-gray-300 bg-slate-0 p-4 ps-4 bg-[rgba(243,97,75,0.25)]">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="cash-on-delivery"
                          value="cash-on-delivery"
                          aria-describedby="cash-on-delivery-text"
                          type="radio"
                          name="payment-method"
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                          checked={paymentMethod === "cash-on-delivery"}
                          onChange={handlePaymentChange}
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="cash-on-delivery"
                          className="font-medium leading-none text-gray-900"
                        >
                          Payment on delivery
                        </label>
                        <p
                          id="cash-on-delivery-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          +Rs.200 payment processing fee
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pay with the esewa */}
                  <div className="rounded-lg border border-gray-200 p-4 ps-4 bg-[rgba(243,97,75,0.25)]">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="esewa"
                          value="esewa"
                          aria-describedby="esewa-text"
                          type="radio"
                          name="payment-method"
                          className="h-4 w-4 border-gray-900 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                          checked={paymentMethod === "esewa"}
                          onChange={handlePaymentChange}
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="esewa"
                          className="font-medium leading-none text-gray-900"
                        >
                          Esewa
                        </label>
                        <p
                          id="esewa-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          Pay with Esewa
                        </p>
                      </div>
                    </div>
                  </div>



                </div>
              </div>


              {/* Delivery methods */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900  ">
                  Delivery Methods
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">


                  <div className="rounded-lg border border-gray-400 bg-gray-50 p-4 ps-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="fast-delivery"
                          value="fast-delivery"
                          aria-describedby="fast-delivery-text"
                          type="radio"
                          name="delivery-method"
                          className="h-4 w-4 border-gray-900 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                          checked={deliveryMethod === "fast-delivery"}
                          onChange={handleDeliveryChange}
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="fast-delivery"
                          className="font-medium leading-none text-gray-900"
                        >
                          Rs.200 - fast-delivery Fast Delivery
                        </label>
                        <p
                          id="fast-delivery-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          Get it by Tomorrow
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Free Delivery */}
                  <div className="rounded-lg border border-gray-400 bg-gray-50 p-4 ps-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="free-delivery"
                          value="free-delivery"
                          aria-describedby="free-delivery-text"
                          type="radio"
                          name="delivery-method"
                          className="h-4 w-4 border-gray-900 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                          checked={deliveryMethod === "free-delivery"}
                          onChange={handleDeliveryChange}
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="free-delivery"
                          className="font-medium leading-none text-gray-900"
                        >
                          Free Delivery - free-delivery
                        </label>
                        <p
                          id="free-delivery-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          Get it in the next 5 days
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fast delivery */}
                  <div className="rounded-lg border border-gray-500 bg-gray-50 p-4 ps-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="fastest-express-delivery"
                          value="fastest-express-delivery"
                          aria-describedby="fastest-express-delivery-text"
                          type="radio"
                          name="delivery-method"
                          className="h-4 w-4 border-gray-900 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                          checked={deliveryMethod === "fastest-express-delivery"}
                          onChange={handleDeliveryChange}
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="fastest-express-delivery"
                          className="font-medium leading-none text-gray-900"
                        >
                          Rs.300 - fastest-express-delivery Delivery
                        </label>
                        <p
                          id="fastest-express-delivery-text"
                          className="mt-1 text-xs font-normal text-gray-500"
                        >
                          Get it today
                        </p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>





              {/* Coupon supon */}
              <div>
                <label
                  htmlFor="voucher"
                  className="mb-2 block text-sm font-medium text-gray-900  "
                >
                  {" "}
                  Enter a gift card, voucher or promotional code{" "}
                </label>
                <div className="flex max-w-md items-center gap-4">
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500          :placeholder:text-gray-400 "
                    placeholder=""
                    required=""
                  />
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-lg       bg-secondary px-5 py-2.5 text-sm font-medium text-white hover:      bg-secondary focus:outline-none focus:ring-4 focus:ring-primary-300 "
                  >
                    Apply
                  </button>
                </div>
              </div>



            </div>
            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200 ">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500    ">
                      Subtotal
                    </dt>
                    <dd className="text-base font-medium text-gray-900  ">
                      Rs {cart.cartTotalAmount}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500    ">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">0</dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500    ">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900  ">
                      Rs.{cart.cartTotalQuantity > 100 ? 0 : 200}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500    ">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900  ">
                      Rs {tax}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900  ">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-green-900  ">
                      Rs{totalPrice}
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="space-y-3">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg       bg-secondary px-5 py-2.5 text-sm font-medium text-white hover:       focus:outline-none focus:ring-4  focus:ring-primary-300 "
                >
                  Proceed to Payment
                </button>

              </div>
            </div>
          </div>
        </form>
      </section>

    </div>
  )
}

export default Checkout