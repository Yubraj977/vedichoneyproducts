import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
function BlogDetials() {
  const location = useLocation()
  const { id } = useParams();
  const [blogFetchData, setblogFetchData] = useState('')
  const [blogFetchError, setblogFetchError] = useState('')
  const [fetchingBlog, setfetchingBlog] = useState(false)

  console.log(blogFetchData);
  console.log(id);
  useEffect(() => {
    setfetchingBlog(true)
    fetch(`api/blog/${id}`).then((res) => {
      return res.json()
    }).then((data) => {
      setfetchingBlog(false)
      setblogFetchData(data.blog)
    }).catch((err) => {
      setfetchingBlog(false)
      setblogFetchError(err)
    })
  }, [id]);

  return (
    <>
      {fetchingBlog ?
        (<div className='flex justify-center'>
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
        )
        : (<div className='lg:px-side px-mb_side my-10'>
          {blogFetchData && (
            <div>
              <h1 className='font-bold font-inter text-[3rem] text-center text-secondary '>{blogFetchData.title.toUpperCase()}</h1>
              <div className='mt-4 w-full h-96'>
                <img src={blogFetchData.image} alt="" className='h-full w-full object-contain' />
              </div>
              <div className="content mt-4 font-inter text-lg " dangerouslySetInnerHTML={{ __html: blogFetchData && blogFetchData.content }}>

              </div>
            </div>
          )}

        </div>)}

    </>

  )
}

export default BlogDetials