import React from 'react'
import { NavLink } from 'react-router-dom'
function Return() {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []);
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Return Policy</h1>
      <p className="mb-4">
        Thank you for shopping with us. Once a purchase is made and the transaction is complete, we do not accept returns or exchanges for any reason other than manufacturing defects or damages during transit.
      </p>
      <p className="mb-4">
        Our products are carefully inspected and packaged before shipment to ensure they arrive in excellent condition. However, if you receive a damaged or defective item, please contact us immediately so we can resolve the issue promptly.
      </p>
      <p className="mb-4">
        We understand that sometimes products may not meet your expectations, but due to hygiene and safety reasons, we cannot accept returns once the product has been used or its packaging has been opened. We encourage you to thoroughly research the product before making a purchase, and feel free to reach out to us with any questions or concerns you may have.
      </p>
      <p className="mb-4">
        Please note that personalized or customized items are not eligible for returns or exchanges unless they are defective or damaged upon arrival. Additionally, we do not accept returns on sale or clearance items.
      </p>
      <p className="mb-4">
        For more information or assistance, please refer to our <NavLink to="/" className="text-blue-500 hover:underline">FAQ</NavLink> page or <NavLink to="/contact" className="text-blue-500 hover:underline">contact us</NavLink> directly. We are here to help and will do our best to ensure your shopping experience with us is enjoyable and hassle-free.
      </p>
    </div>
  )
}

export default Return