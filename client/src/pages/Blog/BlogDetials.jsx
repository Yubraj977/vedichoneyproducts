import React, { useEffect, useState } from 'react'
import { useLocation,useParams } from 'react-router-dom';
function BlogDetials() {
  const location=useLocation()
  const { id } = useParams();
  const [blogFetchData,setblogFetchData]=useState('')
  const [blogFetchError,setblogFetchError]=useState('')
  console.log(blogFetchData);
  console.log(location);
  console.log(id);
  useEffect(() => {
      fetch(`http://localhost:8000/api/blogs/${id}`).then((res)=>{
    return res.json()
      }).then((data)=>{
        setblogFetchData(data.data)
      }).catch((err)=>{
        setblogFetchError(err)
      })
  }, [id]);

  return (
    <div className='lg:px-side px-mb_side my-10'>
      {blogFetchData&&(
        <div>
          <h1 className='font-bold font-inter text-[3rem] text-center text-secondary '>{blogFetchData.title.toUpperCase()}</h1>
          <div className='mt-4 w-full h-96'>
            <img src={blogFetchData.thumbnail_url} alt="" className='h-full w-full object-contain'/>
          </div>
          <div className="content mt-4 font-inter text-lg " dangerouslySetInnerHTML={{ __html: blogFetchData && blogFetchData.content }}>

          </div>
        </div>
      )}
      
    </div>
  )
}

export default BlogDetials