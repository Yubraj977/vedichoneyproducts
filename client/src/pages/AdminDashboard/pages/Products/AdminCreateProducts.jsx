import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import toast, { Toaster } from 'react-hot-toast';
import {Circles} from 'react-loader-spinner'
function AdminCreateProducts() {
  // Form States
  const [image, setimage] = useState(null)
  const [name, setname] = useState()
  const [description, setdescription] = useState()
  const [price, setprice] = useState()
  const [quantity, setquantity] = useState()
  const [category, setcategory] = useState('medicine')
  const [sendingProduct, setsendingProduct] = useState(false)

  const ProductAddSucess = (value) => toast.success(`Sucess:${value}`);
  const ProductAddFaliure = (value) => toast.error(`Error:${value}`);

  const [uiImage, setuiImage] = useState(null)
  function handleImageChange(e) {
    const imgfile = e.target.files[0]
    if (imgfile) {
      const imgUrl = URL.createObjectURL(imgfile)
      setimage(imgfile)
      setuiImage(imgUrl)
    }


  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('category', category);
    formData.append('image', image);

    try {
      setsendingProduct(true)
      const res = await fetch('https://vedicapi.onrender.com/api/product/create', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setsendingProduct(false)
      if (!res.ok) {
        console.log(data);
        console.log(data.message);
        ProductAddFaliure(data.message)
        return;
      }
      if (res.ok) {
        setname('')
        setdescription('')
        setprice('')
        setquantity('')
        setcategory('')
        setimage(null)
        setuiImage(null)
        ProductAddSucess(data.message)

      }

    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='flex flex-col items-center px-mb_side'>
      <Toaster />
      <h1 className='text-xl font-bold text-secondary'>Add Your Product From Here</h1>
      <form className='flex flex-col  w-full mt-10' encType='multipart/form-data' onSubmit={handleSubmit} >
        <section className="top flex w-full">


          <div className='flex flex-col  w-full'>
            <label className='font-semibold font-inter text-sm' > Product Name: </label>
            <input type="text"
              placeholder='Honey money'
              onChange={(e) => setname(e.target.value)}

              value={name}
              className="rounded-sm mt-2 ml-2 w-[90%] outline-none border-slate-400 focus:ring-0  focus:border-slate-500 focus:outline-none  text-sm font-inter"
            />
          </div>


          <div className='flex flex-col  w-full'>
            <label className='font-semibold font-inter text-sm'> Stock Quantity </label>
            <input type="number"
              placeholder='Honey money'
              onChange={(e) => setquantity(e.target.value)}
              value={quantity}
              className="rounded-sm mt-2 ml-2 w-[90%] outline-none border-slate-400 focus:ring-0  focus:border-slate-500 focus:outline-none  text-sm font-inter"
            />
          </div>

        </section>
        <section className="price mt-4 flex w-full">


          <div className='flex flex-col  w-full'>
            <label className='font-semibold font-inter text-sm'> Final price to sell: </label>
            <input type="number"
              onChange={(e) => setprice(e.target.value)}
              value={price}
              placeholder='Honey money'
              className="rounded-sm mt-2 ml-2 w-[90%] outline-none border-slate-400 focus:ring-0  focus:border-slate-500 focus:outline-none  text-sm font-inter"
            />
          </div>


          <div className='flex flex-col  w-full'>
            <label className='font-semibold font-inter text-sm'> Category </label>

            <select name="category" id="" className='text-black' onChange={(e) => setcategory(e.target.value)} value={category}>
              <option value="Raw honey">Raw-Honey</option>
              <option value="Shoap">Shoap</option>
              <option value="food">Food</option>
              <option value="health">Health</option>
              <option value="cosmetics">Cosmetics</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
              <option value="therapy">Therapy</option>
              <option value="agriculture">Agriculture</option>
              <option value="honeybee">HoneyBee</option>
             
            </select>
          </div>

        </section>


        <section className='section-2 mt-6 flex'>
          <div className='w-8/12'>
            <h1 className='text-sm font-inter font-semibold'>Description: <span className='text-secondary'>(Prefered to add in lists view) </span></h1>
            <ReactQuill
              theme='snow'
              placeholder='Write something...'
              className='h-56 mb-12'
              required
              onChange={setdescription}
              value={description}
            />
          </div>
          <div className='my-4 w-full flex flex-col items-center border border-slate-500'>
            <label htmlFor="fileInput" className="cursor-pointer">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleImageChange}
              />
              <div className=" cursor-pointer underline text-secondary">
                Select Image
              </div>
            </label>
            <div className=' w-full h-[15.4rem] border-none'>
              <img src={uiImage} alt="" className='h-full w-full object-cover' />
            </div>
          </div>

        </section>

        <section className='submit-section flex justify-between px-side w-full'>
          {sendingProduct ? <button disabled className=' flex justify-center items-centerfont bg-secondary text-white font-inter px-4 py-2 rounded-md w-full' type='submit'>

            <Circles
              height="20"
              width="20"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />

          </button> : <button className='font bg-secondary text-white font-inter px-4 py-2 rounded-md w-full' type='submit'> Submit</button>}

        </section>
      </form>
    </div>
  )
}

export default AdminCreateProducts