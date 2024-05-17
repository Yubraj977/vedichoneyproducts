import React from 'react'

function Articlelist() {
    return (
        <div className="container mx-auto p-4 rounded-lg ">
            <h1 className="text-xl font-bold mb-4"> PRODUCTS LISTS FOR SALE</h1>
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
                <thead className='bg-slate-300 '>
                    <tr>
                        <th className="px-4 py-2 border font-inter">S.N</th>
                        <th className="px-4 py-2 border font-inter">PRODUCT NAME</th>
                        <th className="px-4 py-2 border font-inter">IMAGE</th>
                        <th className="px-4 py-2 border font-inter">PRICE</th>
                        <th className="px-4 py-2 border font-inter">REMAINING ITEMS</th>
                        <th className="px-4 py-2 border font-inter">CATEGORY</th>
                        <th className="px-4 py-2 border font-inter">EDIT</th>
                        <th className="px-4 py-2 border font-inter">DELETE</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="text-center font-inter">
                        <td className="px-4 py-2 border">1</td>
                        <td className="px-4 py-2 border">Honey</td>
                        <td className="px-4  border flex justify-center">
                            <div className='h-14 w-10 py-1' >


                                <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="max-w-full h-full object-cover" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border"> 2000 </td>
                        <td className="px-4 py-2 border">7</td>
                        <td className="px-4 py-2 border">Beauty</td>
                        <td className="px-4 py-2 border">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Edit</button>
                        </td>
                        <td className="px-4 py-2 border">
                            <button className="bg-secondary_shade hover:bg-secondary text-white px-2 py-1 rounded">Delete</button>
                        </td>
                    </tr>


                    <tr className="text-center font-inter">
                        <td className="px-4 py-2 border">1</td>
                        <td className="px-4 py-2 border">Honey</td>
                        <td className="px-4  border flex justify-center">
                            <div className='h-14 w-10 py-1' >


                                <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="max-w-full h-full object-cover" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border"> 2000 </td>
                        <td className="px-4 py-2 border">7</td>
                        <td className="px-4 py-2 border">Beauty</td>
                        <td className="px-4 py-2 border">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Edit</button>
                        </td>
                        <td className="px-4 py-2 border">
                            <button className="bg-secondary_shade hover:bg-secondary text-white px-2 py-1 rounded">Delete</button>
                        </td>
                    </tr>









                    <tr className="text-center font-inter">
                        <td className="px-4 py-2 border">1</td>
                        <td className="px-4 py-2 border">Honey</td>
                        <td className="px-4  border flex justify-center">
                            <div className='h-14 w-10 py-1' >


                                <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="max-w-full h-full object-cover" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border"> 2000 </td>
                        <td className="px-4 py-2 border">7</td>
                        <td className="px-4 py-2 border">Beauty</td>
                        <td className="px-4 py-2 border">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Edit</button>
                        </td>
                        <td className="px-4 py-2 border">
                            <button className="bg-secondary_shade hover:bg-secondary text-white px-2 py-1 rounded">Delete</button>
                        </td>
                    </tr>









                    <tr className="text-center font-inter">
                        <td className="px-4 py-2 border">1</td>
                        <td className="px-4 py-2 border">Honey</td>
                        <td className="px-4  border flex justify-center">
                            <div className='h-14 w-10 py-1' >


                                <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="max-w-full h-full object-cover" />
                            </div>
                        </td>
                        <td className="px-4 py-2 border"> 2000 </td>
                        <td className="px-4 py-2 border">7</td>
                        <td className="px-4 py-2 border">Beauty</td>
                        <td className="px-4 py-2 border">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Edit</button>
                        </td>
                        <td className="px-4 py-2 border">
                            <button className="bg-secondary_shade hover:bg-secondary text-white px-2 py-1 rounded">Delete</button>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default Articlelist