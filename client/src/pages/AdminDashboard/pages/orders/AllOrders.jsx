import React, { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { json, useNavigate } from 'react-router-dom';
function AllOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    async function fetchAllOrders() {
        setLoading(true);
        try {
            const res = await fetch('/api/order/allorders');
            const data = await res.json();
            if (res.ok) {
                setLoading(false);
                setOrders(data.orders)

            } else {
                console.log(data.message);
                setLoading(false);
            }
        } catch (error) {
            console.error('Failed to fetch orders:', error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchAllOrders();
    }, []);

    // console.log(`loading${loading}`)
    console.log(`orders is ${(orders)}`)
    return (

        <div>
            {loading ? (
                <div className='flex justify-center items-center'>

                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="loading"
                    />
                </div>
            ) :
                (
                    <div>
                        <table className="min-w-full bg-white  rounded-md ">
                            <thead className='bg-slate-300 '>
                                <tr>
                                    <th className="px-4 py-2 border font-inter">Order Id</th>
                                    <th className="px-4 py-2 border font-inter"> Payment method</th>
                                    <th className="px-4 py-2 border font-inter">userName</th>
                                    <th className="px-4 py-2 border font-inter">Email</th>
                                    <th className="px-4 py-2 border font-inter">Total price</th>

                                    <th className="px-4 py-2 border font-inter" >Detial View</th>
                                    <th className="px-4 py-2 border font-inter" >DELETE</th>
                                </tr>
                            </thead>

                            <tbody>

                                {orders && orders.map((eachorders, index) => (
                                        <tr className="text-center text-[0.72rem] font-inter" key={eachorders._id}>

                                            <td className="px-4 py-2 border">{eachorders._id}</td>
                                            <td className="px-4  border flex justify-center">

                                                <td className="px-4 py-2 border">{eachorders.paymentInfo.paymentMethod}</td>


                                            </td>
                                            {/* <td className="px-4 py-2 border"> {eachorders.user?._id} </td> */}
                                            <td className="px-4 py-2 border"> {eachorders.user?.name} </td>
                                            <td className="px-4 py-2 border"> {eachorders.user?.email} </td>
                                            <td className="px-4 py-2 border"> {eachorders.totalPrice} </td>

                                            <td className="px-4 py-2 border">
                                                <button className="bg-blue-800 hover:bg-blue-800 text-white px-2 py-1 rounded" onClick={(e) => navigate(`/admin?tab=vieworder&&id=${eachorders._id}`)}>Detial View</button>
                                            </td>
                                            <td className="px-4 py-2 border">
                                                <button className="bg-secondary_shade hover:bg-secondary text-white px-2 py-1 rounded"
                                                    onClick={(e) => {
                                                        setOpenModal(true)
                                                        setpostIdToDelete(eachorders._id)
                                                    }}
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    
                                ))}


                            </tbody>


                        </table>
                    </div>
                )

            }
        </div>
    );
}

export default AllOrders;
