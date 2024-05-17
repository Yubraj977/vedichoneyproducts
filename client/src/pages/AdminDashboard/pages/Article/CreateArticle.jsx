import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
function CreateArticle() {
  const [content, setcontent] = useState('');
  return (
    <div className=' px-10 my-top'>
      <form className='mt-10'>
        <input type="text" name="" id="" placeholder='Title' className='outline-none  w-full h-20 text-3xl font-inter font-bold' />
        <div className='flex justify-between mt-10'>
          <input type="file" name="" id="" />
          <button className=' bg-secondary px-4 py-2 rounded-sm text-white font-bold'>Upload</button>
        </div>
        <div className='mt-10 '>
          <ReactQuill theme="snow" value={content} onChange={setcontent}  className='outline-none font-inter'/>
        </div>
        <button className='bg-secondary_shade hover:bg-secondary w-full py-2 rounded-md'>Submit</button>

      </form>

    </div>
  )
}

export default CreateArticle