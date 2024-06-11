import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

function BlogDetials() {
  const location = useLocation();
  const { id } = useParams();
  const [blogFetchData, setBlogFetchData] = useState(null);
  const [blogFetchError, setBlogFetchError] = useState('');
  const [fetchingBlog, setFetchingBlog] = useState(false);

  useEffect(() => {
    const url = `/api/blog/${id}`;
    console.log(url);

    const fetchPost = async () => {
      setFetchingBlog(true);

      try {
        const res = await fetch(url);
        console.log(res);

        // Check if the response content type is JSON
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Received non-JSON response');
        }

        const data = await res.json();
        console.log(data);

        if (!res.ok) {
          setBlogFetchError(data.message || 'Error fetching blog');
          setFetchingBlog(false);
          return;
        }

        setBlogFetchError(null);
        setBlogFetchData(data.blog);
        setFetchingBlog(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setBlogFetchError('Failed to fetch blog data');
        setFetchingBlog(false);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <>
      {fetchingBlog ? (
        <div className="flex justify-center">
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
        <div className="lg:px-side px-mb_side my-10">
          {blogFetchError ? (
            <p className="text-red-500 text-center">{blogFetchError}</p>
          ) : (
            blogFetchData && (
              <div>
                <h1 className="font-bold font-inter text-[3rem] text-center text-secondary">
                  {blogFetchData.title.toUpperCase()}
                </h1>
                <div className="mt-4 w-full h-96">
                  <img
                    src={blogFetchData.image}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <div
                  className="content mt-4 font-inter text-lg"
                  dangerouslySetInnerHTML={{ __html: blogFetchData.content }}
                />
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}

export default BlogDetials;
