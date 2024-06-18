import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import RatingPage from './RatingPage';
import { Rating } from "flowbite-react";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../../../configs/redux/cart/CartSlice';
function ProductDetials() {
    const navigate = useNavigate()
    const { id } = useParams();
    console.log(id)
    const [product, setproduct] = useState(null)
    const [ratings, setratings] = useState([]);
    const [averageRating, setaverageRating] = useState(0)
    const [reviewFetchError, setreviewFetchError] = useState(null)
    const [comment,setcomment]=useState('')
    const [rating,setrating]=useState(1)
    const [submitting,setsumitting]=useState(false)
    const [itemsQuantity,setitemsQuantity]=useState(1)
    const dispatch=useDispatch();
   console.log(product)
    useEffect(() => {
        async function fetchSoloProduct() {
            const res = await fetch(`/api/product/${id}`)
            const data = await res.json()
          
            setproduct(data.product)
            
        }
        fetchSoloProduct()

    }, [])
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


    useEffect(() => {
        async function fetchRatings() {
            const res = await fetch(`/api/review/singleproduct?productId=${id}`)
            const data = await res.json()
            if (res.ok) {
                setratings(data.productReviews)
                setaverageRating(data.averageRating)
                window.scrollTo(0, 0);
            }
            if (!res.ok) {
            
                setreviewFetchError(data.message)
            }

        }
        fetchRatings()
    }, [])
    const user = useSelector((state) => state.user.currentUser)
    console.log(user)


async function submitReview(){
    setsumitting(true)
    const res=await fetch(`/api/review/create?productId=${id}`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify({comment,rating})
    })
    const data=await res.json()
    if(!res.ok){
        loginError(data.message)
        setsumitting(false)
    }
    if(res.ok){
        setsumitting(false)
        notify(data.message)
        setcomment('')
        setrating(1)
        setTimeout(() => {
            navigate(`/products`)
        }, 2000);
        
       
    }
    console.log(data)
}

const notify = (value) => toast.success(`Sucess:${value}`);
const loginError = (value) => toast.error(`Error:${value}`);

function handleAddToCart(){
dispatch(addToCart({name:product.name,price:product.price,image:product.image,_id:product._id,category:product.category,cartQuantity:itemsQuantity,stock:product.quantity}));
notify(`${product.name} Added To Cart`)
}
    return (
        <div className=''>
              <Toaster />
            {product &&
                <div className="top w-full flex-col lg:items-start items-center lg:flex-row  flex  mt-top gap-16   px-mb_side" >
                    <div className="left lg:w-1/3  w-full  ">
                        <div className=' w-full lg:h-full h-72 '>
                            <img src={product.image} alt="" className='rounded-lg h-full w-full  object-contain lg:object-cover' />
                        </div>

                    </div>

                    <div className="  right w-full lg:w-2/3">
                        <h1 className='font-bold font-inter text-lg'>{product.title}</h1>
                        <div className='h-16  flex items-center gap-12 w-full justify-between pr-10 mt-top'>
                            <div className="left flex gap-4">


                                <div class="flex items-center">
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>

                                <div className='flex '>
                                    <p className='text-sm text-cyan-400'>All Reviews||</p>
                                    <p className='text-sm text-cyan-400'>Answers</p>
                                </div>
                            </div>

                            <div className="right hidden lg:block">
                                <div className='flex gap-14 text-2xl'>
                                    <FaShareAlt />
                                    <AiOutlineLike />
                                </div>
                                <h3>Free Shipping</h3>
                            </div>
                        </div>
                        <div className='mt-top'>
                            <p className='text-secondary_shade hover:text-secondary text-xl font-serif font-semibold'> RS. {product.price}</p>
                            <strike className='opacity-60'> Rs 2000</strike>
                        </div>
                        <div className='mt-top flex gap-4 items-center text-sm'>
                            <h3 className='mr-8'>Quantity : </h3>
                            <button className='bg-slate-200 text-neutral-600 hover:bg-slate-300 p-2' onClick={(e)=>{
                                if(itemsQuantity>1){
                                    setitemsQuantity(itemsQuantity-1)
                                }
                                else{
                                    setitemsQuantity(1)
                                }
                               
                                }}>
                                <FaMinus />
                            </button>
                            {itemsQuantity}
                            <button className='bg-slate-200 text-neutral-600 p-2 hover:bg-slate-300' onClick={(e)=>{
                              
                                if(itemsQuantity<10){
                                    setitemsQuantity(itemsQuantity+1)
                                }
                                else{
                                    return;
                                }
                                }}>
                                <FaPlus />
                            </button>




                        </div>
                        <div className="det mt-top">
                            <div className="buttons flex justify-between gap-2 lg:gap-8 lg:flex-row flex-col  w-full">
                                <Link to={'/checkout'} className='border-2  w-full'>
                                    <button className='bg-[#2475B0] rounded-sm border py-4 text-white w-full font-semibold' >Buy Now</button>
                                </Link>

                                <div className='w-full'>
                                    <button className='bg-secondary_shade hover:bg-secondary rounded-sm py-4 font-semibold w-full' onClick={handleAddToCart}  >Add to Cart</button>
                                </div>

                            </div>
                        </div>

                        <div className="adding"></div>
                        <div className="discription mt-top">
                            <h3>Description</h3>
                            <p className='mt-1 border border-gray-300 rounded-lg p-4 bg-gray-100' dangerouslySetInnerHTML={{ __html: product && product.description }}></p>
                        </div>

                    </div>
                </div>
            }
            <div className="rating lg:px-side px-4 ">
                <div>
                    <h1 className='text-xl font-inter font-bold text-secondary mb-2'>Ratings & Reviews</h1>
                    <Rating>
                        <Rating.Star />
                        <p className="ml-2 text-sm font-bold text-gray-900">{averageRating}</p>
                        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 " />
                        <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline">
                            {ratings.length} reviews
                        </a>
                    </Rating>
                </div>
                <h1 className='mt-2 font-bold text-sm font-inter'>Write your Review here</h1>
{user?(
     <div className='flex gap-2 items-center flex-col lg:flex-row  '>
     <div className='flex lg:flex-row flex-col w-full' >

     <input type="text" placeholder='I love thsi product' className=" py-6 lg:py-4 rounded-sm w-full  lg:w-[40rem] outline-none border-slate-400 focus:ring-0   focus:border-slate-500 focus:outline-none  text-sm font-inter" 
         value={comment}
         onChange={(e) => setcomment(e.target.value)}
     />
     <select name="category" id="" className='text-black lg:py-[0.9rem]' 
         value={rating}
         onChange={(e) => setrating(e.target.value)}
     >
         <option value="" disabled >
             How many Stars
         </option>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>

     </select>
     </div>

    
     <button className="bg-secondary_shade py-[0.9rem] px-6 font-bold text-white font-sm " onClick={submitReview} disabled={submitting}>Submit</button>
 </div> 
)
:(
    <button className="bg-secondary_shade py-[0.9rem] px-6 font-bold text-white font-sm " onClick={() => navigate('/login')}>Login to Write Review</button>
)}

               

                <div>
                    {reviewFetchError && <p className='text-red-500'>{reviewFetchError}</p>}
                    {ratings && ratings.map((rating) => <RatingPage key={rating._id} rating={rating} />)}

                </div>
            </div>
        </div>
    )
}

export default ProductDetials