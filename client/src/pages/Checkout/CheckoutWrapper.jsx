import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
function CheckoutWrapper() {
    const [checkoutData,setcheckoutData]=useState(null)
  return (
    <div>
      <Outlet context={[checkoutData,setcheckoutData]}/>
    </div>
  )
}

export default CheckoutWrapper
