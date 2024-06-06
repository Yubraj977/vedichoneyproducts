import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from "flowbite-react";
import { ColorRing } from 'react-loader-spinner'
import { HiOutlineExclamationCircle } from "react-icons/hi";
function Articlelist() {
    const navigate = useNavigate()
    const [blog, setBlog] = useState([]);
    const [blogErr, setblogErr] = useState()
    const [openModal, setOpenModal] = useState(false);
    const [postIdToDelete, setpostIdToDelete] = useState()
    const [blogDeleteError, setblogDeleteError] = useState()
    const [fetchingBlog, setfetchingBlog] = useState(false)
    const [deletingBlog, setdeletingBlog] = useState(false)
    console.log(postIdToDelete);
    useEffect(() => {
        setfetchingBlog(true)
        fetch('https://vedicapi.onrender.com/api/blog/allblogs')
            .then((res) => res.json())
            .then((data) => {
                setfetchingBlog(false)
                setBlog(data.blogs);
            }).catch((err) => {
                setfetchingBlog(false)
                setblogErr(err)

            });
    }, []);

    console.log(blog);

    async function handlePostDelete() {
        setdeletingBlog(true)
        const res = await fetch(`https://vedicapi.onrender.com/api/blog/delete/${postIdToDelete}/`, {
            method: "DELETE"
        })
        const data = await res.json()

        if (res.ok) {
          
            setOpenModal(false)
            setdeletingBlog(false)
            setBlog(blog.filter((eachblog) => eachblog._id !== postIdToDelete))
        }

        if (!res.ok) {
            setblogDeleteError(data.message)
            setdeletingBlog(false)
        }

    }

    return (
        <div className="container mx-auto p-4 rounded-lg ">
            <Modal show={openModal} size="sm" onClose={() => setOpenModal(false)} popup className=''>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        {deletingBlog ? (
                            <div className='flex justify-center'>
                               
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
                        ) : <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />}

                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
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

            <h1 className="text-xl font-bold mb-4"> Manage Your all Blogs</h1>

            {fetchingBlog ? <div className='flex justify-center w-full  '>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>
                : <table className="min-w-full bg-white border border-gray-200 rounded-md">
                    <thead className='bg-slate-300 '>
                        <tr>
                            <th className="px-4 py-2 border font-inter">S.N</th>
                            <th className="px-4 py-2 border font-inter">Article Titile</th>
                            <th className="px-4 py-2 border font-inter">IMAGE</th>


                            <th className="px-4 py-2 border font-inter" >EDIT</th>
                            <th className="px-4 py-2 border font-inter" >DELETE</th>
                        </tr>
                    </thead>

                    <tbody>
                        {blog !== null ? blog.map((eachblog, index) => (
                            <tr className="text-center font-inter" key={eachblog._id}>
                                <td className="px-4 py-2 border">{index}</td>
                                <td className="px-4 py-2 border">{eachblog.title}</td>
                                <td className="px-4  border flex justify-center">
                                    <div className='h-14 w-10 py-1' >


                                        <img src={eachblog.image} className="max-w-full h-full object-cover" />
                                    </div>
                                </td>


                                <td className="px-4 py-2 border">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded" onClick={(e) => navigate(`/admin?tab=editarticle&&id=${eachblog._id}`)}>Edit</button>
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
                        )) : <p className='absolute text-xl text-secondary font-bold'>Session Expired please  <span className='text-cyan-600 cursor-pointer underline ' onClick={() => navigate('/login')}> login</span> again to  continue</p>}


                    </tbody>
                </table>

            }



        </div>
    )
}

export default Articlelist