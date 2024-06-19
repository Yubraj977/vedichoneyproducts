import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
function PreConfirm() {
  const cart = useSelector(state => state.cart); // Assuming your Redux state has a slice named 'cart'

  // Destructure cart object for easier access
  const { cartItems, preOrderInfo } = cart;
  const navigate=useNavigate()

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Cart Details</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Cart Items:</h3>
        <ul>
          {cartItems.map(item => (
            <li key={item._id} className="flex items-center space-x-4 border-b border-gray-200 py-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600">Rs{item.price}</p>
                <p>Quantity: {item.cartQuantity}</p>
                <p>Total: Rs{item.price * item.cartQuantity}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Shipping Information:</h3>
        <p>Phone Number: {preOrderInfo.shippingInfo.phoneNumber}</p>
        <p>City: {preOrderInfo.shippingInfo.city}</p>
        <p>Pincode: {preOrderInfo.shippingInfo.pincode}</p>
        <p>Country: {preOrderInfo.shippingInfo.country}</p>
        <p>State: {preOrderInfo.shippingInfo.state}</p>
        <p>Address: {preOrderInfo.shippingInfo.adress}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Order Summary:</h3>
        <p>Total Quantity: {cart.cartTotalQuantity}</p>
        <p>Cart Total Amount: Rs{cart.cartTotalAmount}</p>
        <p>Tax: Rs{preOrderInfo.tax}</p>
        <p>Store Pickup Charge: Rs{preOrderInfo.stroePickup}</p>
        <p>Total Price: Rs{preOrderInfo.totalPrice}</p>
        <p>Payment Method: {preOrderInfo.paymentMethod}</p>
        <p>Delivery Method: {preOrderInfo.deliveryMethod}</p>
      </div>

      <div className="flex justify-between">
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
        onClick={() => navigate("/checkout")}
      >
          Go Back
        </button>
        <button 
            onClick={() => navigate("/confirm")} 
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Confirm Order
        </button>
       
      </div>
    </div>
  );
}

export default PreConfirm;
