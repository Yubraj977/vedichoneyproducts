import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

function OrdersDetailViewPage() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

console.log(data)

    useEffect(() => {
        async function fetchOrder() {
            setLoading(true)
            const res = await fetch(`/api/order/searchorder?id=${id}`)
            console.log(res)
            const result = await res.json()
            console.log(result)
            setLoading(false)
            if (res.ok) {
                setData(result.myOrder)
            }
            if (!res.ok) {
                console.log(result.message)
            }
        }
        fetchOrder()
    }, [])
    return (
        <>
            {loading ? (
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="loading"
                />
            ) : (
                <div className="p-6 bg-gray-100 min-h-screen">
                    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold mb-4">Order ID: {data._id}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                                    <p><strong>Address:</strong> {data.shippingInfo?.address ?? 'N/A'}</p>
                                    <p><strong>City:</strong> {data.shippingInfo?.city ?? 'N/A'}</p>
                                    <p><strong>State:</strong> {data.shippingInfo?.state ?? 'N/A'}</p>
                                    <p><strong>Country:</strong> {data.shippingInfo?.country ?? 'N/A'}</p>
                                    <p><strong>Pin Code:</strong> {data.shippingInfo?.pinCode ?? 'N/A'}</p>
                                    <p><strong>Phone No:</strong> {data.shippingInfo?.phoneNo ?? 'N/A'}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
                                    <p><strong>Delivery Method:</strong> {data.paymentInfo?.deliveryMethod ?? 'N/A'}</p>
                                    <p><strong>Payment Method:</strong> {data.paymentInfo?.paymentMethod ?? 'N/A'}</p>
                                    <p><strong>Status:</strong> {data.paymentInfo?.status ?? 'N/A'}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">User Information</h3>
                                    <p><strong>Name:</strong> {data.user?.name ?? 'N/A'}</p>
                                    <p><strong>Email:</strong> {data.user?.email ?? 'N/A'}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Price Details</h3>
                                    <p><strong>Items Price:</strong> ${data.itemsPrice}</p>
                                    <p><strong>Tax Price:</strong> ${data.taxPrice}</p>
                                    <p><strong>Shipping Price:</strong> ${data.shippingPrice}</p>
                                    <p><strong>Total Price:</strong> ${data.totalPrice}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Order Items</h3>
                            {data.orderItems &&data.orderItems.map((item, idx) => (
                                <div key={idx} className="mb-4 p-4 border rounded-lg flex items-center">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p><strong>Price:</strong> ${item.price}</p>
                                        <p><strong>Quantity:</strong> {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">Order Status</h3>
                            <p className="text-indigo-600 font-bold">{data.orderStatus}</p>
                        </div>
                    </div>
                </div>
            )}

        </>

    );
}

export default OrdersDetailViewPage;
