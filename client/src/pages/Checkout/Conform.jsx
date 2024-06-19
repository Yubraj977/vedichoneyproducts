import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import QrPay from './payment/QrPay';
function Conform() {
  const dispatch = useDispatch()
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector(state => state.cart)
  const [checkoutData] = useOutletContext();
  const paymentMethod = useSelector((state) => state.cart.preOrderInfo.paymentMethod)
  console.log(paymentMethod)

  function handleSubmit(e) {
    e.preventDefault();
    try {

    } catch (error) {

    }

  }
  if (paymentMethod == 'credit-card') {
    return (
      <div className="max-w-md mx-auto p-6 border bg-white">
        <form onSubmit={handleSubmit} className=" bg-slate-400 flex flex-col space-y-4 border  border-gray-300 rounded-lg shadow-md p-4 m-">
          <h1 className="text-center text-2xl font-semibold text-gray-700 mb-4">Enter Your Card Info Here</h1>
          <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
            <CardNumberElement className="w-full" />
          </div>
          <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
            <CardExpiryElement className="w-full" />
          </div>
          <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
            <CardCvcElement className="w-full" />
          </div>
          <button type="submit" className="w-full py-2 bg-secondary_shade text-white rounded-lg hover:bg-secondary transition duration-300">
            pay
            {/* {checkoutData.totalPrice} */}
          </button>
        </form>
      </div>
    )
  }

  if (paymentMethod == 'qrcode') {
    return (
      <div>
        <QrPay/>
      </div>
    )
  }
}

export default Conform
