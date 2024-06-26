import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import toast, { Toaster } from 'react-hot-toast';
import CustomPagination from '../../../../heplers/costum-hooks/CustomPagination';
import { ColorRing } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
function Dashproduct() {
    const navigate = useNavigate()
    const [blog, setBlog] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [postIdToDelete, setpostIdToDelete] = useState()
    const [blogDeleteError, setblogDeleteError] = useState();
    const [productFetching, setProductFetching] = useState(false)
    const user = useSelector((state) => state.user.currentUser)

    console.log(currentPage)
    useEffect(() => {
        async function fetchProducts() {
            setProductFetching(true)
            fetch(`api/product/allproducts?startIndex=${(currentPage - 1) * 8}&limit=8`)
                .then((res) => res.json())
                .then((data) => {
                    setProductFetching(false)
                    setBlog(data.products);
                    setTotalPages(Math.ceil(data.totalProducts / 8));
                }).catch((err) => {
                    setblogErr(err)
                    setProductFetching(false)
                });
        }

        fetchProducts()
    }, [currentPage]);

    console.log(blog);
    const productDeleteSucess = (value) => toast.success(`Sucess:${value}`);
    const productDeleteFaliure = (value) => toast.error(`Error:${value}`);
    async function handlePostDelete() {
        const res = await fetch(`api/product/delete/${postIdToDelete}`, {
            method: "DELETE"
        })
        const data = await res.json()
        console.log(res);
        console.log(data);
        if (!res.ok) {
            setblogDeleteError(data.message)
            productDeleteFaliure(data.message)
        }


        if (res.ok) {
            setBlog(blog.filter((blog) => blog._id !== postIdToDelete))
            setpostIdToDelete(null)
            productDeleteSucess(data.message)
            setOpenModal(false)
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    console.log(productFetching)
    return (
        <>
            {
                (user && user.userType === 'admin') ? (
                    <div className="container mx-auto p-4 rounded-lg ">
                        <Toaster />
                        <Modal show={openModal} size="sm" onClose={() => setOpenModal(false)} popup className=''>
                            <Modal.Header />
                            <Modal.Body>
                                <div className="text-center">
                                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                    <h3 className="mb-8 text-lg font-normal text-gray-800 dark:text-gray-400">
                                        Are you sure you want to delete this Artcile
                                    </h3>
                                    <div className="flex justify-center gap-4">
                                        <button className='bg-secondary py-2 px-4 rounded-lg text-white font-inter' onClick={handlePostDelete}>
                                            {"Yes, I'm sure"}
                                        </button>
                                        <button className='bg-gray-400 py-2 px-4 rounded-md text-white  font-inter' onClick={() => setOpenModal(false)}>
                                            No, cancel
                                        </button>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <h1 className="text-xl font-bold mb-4"> Manage Your all Products</h1>
                        <div className=' h-[90vh] '>


                            {productFetching ? (
                                <div className="h-screen w-full flex justify-center my-20">
                                    <ColorRing
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="color-ring-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="color-ring-wrapper"
                                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                    />
                                </div>
                            ) : (
                                <table className="min-w-full bg-white  rounded-md ">
                                    <thead className='bg-slate-300 '>
                                        <tr>
                                            <th className="px-4 py-2 border font-inter">Product Id</th>
                                            <th className="px-4 py-2 border font-inter">Product Name</th>
                                            <th className="px-4 py-2 border font-inter">IMAGE</th>
                                            <th className="px-4 py-2 border font-inter">Price</th>
                                            <th className="px-4 py-2 border font-inter">Stock Quantity</th>

                                            <th className="px-4 py-2 border font-inter" >EDIT</th>
                                            <th className="px-4 py-2 border font-inter" >DELETE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {blog.length > 0 ? blog.map((eachblog, index) => (
                                            <tr className="text-center text-[0.72rem] font-inter" key={eachblog._id}>
                                                <td className="  px-4 py-2 border">{(currentPage - 1) * 8 + (index + 1)}</td>
                                                <td className="px-4 py-2 border">{eachblog.name}</td>
                                                <td className="px-4  border flex justify-center">
                                                    <div className='h-14 w-10 py-1' >


                                                        <img src={eachblog.image} className="max-w-full h-full object-cover" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 border"> {eachblog.price} </td>
                                                <td className="px-4 py-2 border"> {eachblog.quantity} </td>

                                                <td className="px-4 py-2 border">
                                                    <button className="bg-blue-800 hover:bg-blue-800 text-white px-2 py-1 rounded" onClick={(e) => navigate(`/admin?tab=editproduct&&id=${eachblog._id}`)}>Edit</button>
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    <button className="bg-secondary_shade hover:bg-secondary text-white px-2 py-1 rounded"
                                                        onClick={(e) => {
                                                            setOpenModal(true)
                                                            setpostIdToDelete(eachblog._id)
                                                        }}
                                                    >Delete</button>
                                                </td>
                                            </tr>
                                        )) : <p className='absolute text-xl text-secondary font-bold'>Session Expired please  <span className='text-cyan-800 cursor-pointer underline ' onClick={() => navigate('/login')}> login</span> again to  continue</p>}


                                    </tbody>
                                </table>
                            )}

                        </div>
                        <div className="flex justify-center my-10">
                            <CustomPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>

                    </div>
                ) : (

                    <h1 className='text-xl font-bold text-green-600 h-screen mt-44 ml-52'> Sorry! You are not authorized to perform this action</h1>
                )
            }

        </>


    )
}

export default Dashproduct