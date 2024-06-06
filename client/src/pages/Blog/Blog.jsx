import React, { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner'
import { RiSafariFill } from 'react-icons/ri';
import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';
function Blog() {
  const [blog, setBlog] = useState([]);
  const [blogErr, setblogErr] = useState()
  const [fetchingBlog, setfetchingBlog] = useState(false)
  const navigate = useNavigate()
  console.log(blog);
  useEffect(() => {
    setfetchingBlog(true)
    fetch('https://vedicapi.onrender.com/api/blog/allblogs')
      .then((res) => res.json())
      .then((data) => {
        setfetchingBlog(false)
        setBlog(data.blogs);
       
      }).catch((err) => {
        setblogErr(err)
        setfetchingBlog(false)
      });
  }, []);

  // Function to extract first 10 words from the content
  const extractFirst10Words = (content) => {
    if (content) {
      const words = content.split(/\s+/);
      const first10Words = words.slice(0, 18).join(' ');
      return first10Words;
    }
    return '';
  };

  return (
    <>


      {fetchingBlog ? (<div className='flex justify-center items-center my-20'>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />

      </div>) : (<div className='' >
        {blog.length > 0 && (
          <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Our latest Blogs</h2>
              <div className="flex justify-center lg:gap-4 flex-wrap md:flex-wrap lg:flex-row lg:justify-between">
                {blog.map((singleBlog) => (
                  <div onClick={() => { navigate(`/blog/${singleBlog._id}`) }} key={singleBlog.id} className="group w-full max-lg:max-w-xl lg:w-[30%] border border-gray-300 rounded-2xl p-6 lg:p-0 mb-4">
                    <div className="flex items-center h-56 w-full">
                      <img src={singleBlog.image} alt="blogs tailwind section" className="rounded-t-2xl w-full h-full object-cover" />
                    </div>
                    <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                      <h4 className="text-xl text-gray-900 font-medium leading-8 mb-2">{singleBlog.title}</h4>
                      <p className="text-gray-500 leading-6 mb-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(extractFirst10Words(singleBlog && singleBlog.content)) }}></p>
                      <a href="javascript:;" className="cursor-pointer text-lg text-secondary font-semibold">Read more..</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>)}
    </>

  );
}

export default Blog;
