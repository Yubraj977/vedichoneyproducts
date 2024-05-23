import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
function Articlelist() {
    const navigate = useNavigate()
    const [blog, setBlog] = useState([]);
    const [blogErr, setblogErr] = useState()
    const [openModal, setOpenModal] = useState(false);
    console.log(openModal);
    useEffect(() => {
        fetch('api/blogs/')
            .then((res) => res.json())
            .then((data) => {
                setBlog(data);
            }).catch((err) => {
                setblogErr(err)
            });
    }, []);




    return (
        <div className="container mx-auto p-4 rounded-lg ">
            <Modal show={openModal} size="sm" onClose={() => setOpenModal(false)} popup className=''>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this Artcile
                        </h3>
                        <div className="flex justify-center gap-4">
                            <button className='bg-secondary py-2 px-4 rounded-lg text-white font-inter' onClick={() => setOpenModal(false)}>
                                {"Yes, I'm sure"}
                            </button>
                            <button className='bg-gray-400 py-2 px-4 rounded-md text-white  font-inter' onClick={() => setOpenModal(false)}>
                                No, cancel
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <h1 className="text-xl font-bold mb-4"> Manage Your all Blogs</h1>
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
                <thead className='bg-slate-300 '>
                    <tr>
                        <th className="px-4 py-2 border font-inter">S.N</th>
                        <th className="px-4 py-2 border font-inter">Article Titile</th>
                        <th className="px-4 py-2 border font-inter">IMAGE</th>
                        <th className="px-4 py-2 border font-inter">Status</th>

                        <th className="px-4 py-2 border font-inter" >EDIT</th>
                        <th className="px-4 py-2 border font-inter" >DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {blog && blog.map((eachblog) => (
                        <tr className="text-center font-inter" key={eachblog.id}>
                            <td className="px-4 py-2 border">{eachblog.id}</td>
                            <td className="px-4 py-2 border">{eachblog.title}</td>
                            <td className="px-4  border flex justify-center">
                                <div className='h-14 w-10 py-1' >


                                    <img src={eachblog.thumbnail_url} className="max-w-full h-full object-cover" />
                                </div>
                            </td>
                            <td className="px-4 py-2 border"> {eachblog.status} </td>

                            <td className="px-4 py-2 border">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded" onClick={(e) => navigate(`/admin?tab=editarticle&&id=${eachblog.id}`)}>Edit</button>
                            </td>
                            <td className="px-4 py-2 border">
                                <button className="bg-secondary_shade hover:bg-secondary text-white px-2 py-1 rounded" onClick={() => setOpenModal(true)}>Delete</button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
            
        </div>
    )
}

export default Articlelist