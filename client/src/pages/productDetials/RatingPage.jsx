import React from 'react'
import { FaStar } from "react-icons/fa";

import { Rating } from "flowbite-react";


function RatingPage({ rating }) {
  
    const dateObj = new Date(rating.updatedAt);
    const readableDate = dateObj.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });


    return (
        <div className=' border p-2 bg-neutral-200 mt-10'>
            {/* Top Div */}
            <div className='flex justify-between text-sm items-center px-4 '>
                <div className='left flex items-center gap-2'>
                    <div className="image h-10 w-10 rounded-full" >
                        <img src={rating.userId.profileImage} alt="" className='h-full w-full object-cover rounded-full' />
                    </div>
                    <p className='text-sm font-bold font-inter'>
                        {rating.userId.name}
                    </p>
                </div>
                <div className='right flex gap-2'>

                    <Rating>
                        {Array.from({ length: rating.rating }).map((_, i) => (
                            <Rating.Star filled={true} key={i} />
                        ))}
                        {Array.from({ length: 5 - rating.rating }).map((_, i) => (
                            <Rating.Star filled={false} key={rating.rating + i} />
                        ))}
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            {rating.rating} out of 5
                        </p>
                        <Rating.Star />
                    
                        {/* <Rating.Star filled={false} />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p> */}
                    </Rating>

                </div>
            </div>

            {/* Second Div */}
            <div className='text-sm font-inter px-4 mt-2'>
                <p>{rating.comment}</p>








                <p className='bg-neutral-200 text-[0.6rem]  font-bold inline-block mt-2 rounded-sm p-1 '>{readableDate}</p>
            </div>
        </div>
    )
}

export default RatingPage
