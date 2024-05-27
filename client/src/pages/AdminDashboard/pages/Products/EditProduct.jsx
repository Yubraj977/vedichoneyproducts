import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function EditProduct() {
  const [image, setimage] = useState(null)
  const [uiImage, setuiImage] = useState(null)
  console.log(image);
  console.log(`ui image ${uiImage}`);
  function handleImageChange(e) {
    const imgfile = e.target.files[0]
    if (imgfile) {
      const imgUrl = URL.createObjectURL(imgfile)
      setimage(imgfile)
      setuiImage(imgUrl)
    }


  }
  return (
    <div className='flex flex-col items-center px-mb_side'>
      <h1 className='text-xl font-bold text-secondary'>Add Your Product From Here</h1>
      <form className='flex flex-col  w-full mt-10'>
        <section className="top flex w-full">


          <div className='flex flex-col  w-full'>
            <label className='font-semibold font-inter text-sm'> Product Name: </label>
            <input type="text"
              placeholder='Honey money'
              className="rounded-sm mt-2 ml-2 w-[90%] outline-none border-slate-400 focus:ring-0  focus:border-slate-500 focus:outline-none  text-sm font-inter"
            />
          </div>


          <div className='flex flex-col  w-full'>
            <label className='font-semibold font-inter text-sm'> Stock Quantity </label>
            <input type="number"
              placeholder='Honey money'
              className="rounded-sm mt-2 ml-2 w-[90%] outline-none border-slate-400 focus:ring-0  focus:border-slate-500 focus:outline-none  text-sm font-inter"
            />
          </div>

        </section>
        <section className="price mt-4 flex w-full">


          <div className='flex flex-col  w-full'>
            <label className='font-semibold font-inter text-sm'> Final price to sell: </label>
            <input type="number"
              placeholder='Honey money'
              className="rounded-sm mt-2 ml-2 w-[90%] outline-none border-slate-400 focus:ring-0  focus:border-slate-500 focus:outline-none  text-sm font-inter"
            />
          </div>


          <div className='flex flex-col  w-full'>
            <label className='font-semibold font-inter text-sm'> Normal Price </label>
            <input type="number"
              placeholder='Honey money'
              className="rounded-sm mt-2 ml-2 w-[90%] outline-none border-slate-400 focus:ring-0  focus:border-slate-500 focus:outline-none  text-sm font-inter"
            />
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
              onChange={(value) => {
                setFormData({ ...formData, content: value });
              }}
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

        <section className='submit-section flex justify-between px-side'>
          <button className='font bg-[#3498DB] text-white font-inter px-4 rounded-md py-2'>Cancel</button>
          <button className='font bg-secondary text-white font-inter px-4 py-2 rounded-md'>Submit</button>
        </section>
      </form>
    </div>
  )
}

export default EditProduct