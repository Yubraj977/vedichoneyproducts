import React from 'react'
import { useEffect } from 'react';
import madhu from '/chars/madhu.jpg'
import lal from '/chars/lal.jpg'
import mahesh from '/chars/mahesh.jpg'
import bimala from '/chars/bimala.jpg'
import { Helmet } from 'react-helmet-async';
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='lg:px-side px-mb_side mt-10 lg:mt-0 '>
       <Helmet>
        <title>About Us - Vedic Honey Products</title>
        <meta name="description" content="Learn more about Vedic Honey Products, our mission, and our commitment to providing the purest honey." />
        <link rel="canonical" href="https://www.vedichoneyproduct.com/about" />
      </Helmet>
      <div className="one w-full flex  items-center gap-10  flex-col lg:flex-row">
        <div className="left lg:w-1/2 w-full ">
          <h1 className='text-black text-5xl font-inter font-bold '>We’re changing the way people Purchase.</h1>
          <p className='font-inter mt-top'>Step into a world where honey shopping is a delight, not just a task. We're reshaping the way you purchase honey, offering a seamless blend of quality, variety, and convenience. With our carefully curated selection, sourced from the finest apiaries, every jar tells a story of nature's purest sweetness. Join us on this journey and elevate your honey-buying experience today!".</p>
        </div>
        <div className="right w-full lg:w-1/2    relative h-[39rem] ">
          <div className=' lg:h-52 h-64  w-40 lg:w-32 absolute left-[5%] lg:left-[15%] top-[0%] lg:top-[20%]'>
            <img src="https://images.unsplash.com/photo-1633434644309-cc8d4f0c207d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover rounded-lg' />
          </div>

          <div className=' lg:h-52 h-64  w-40 lg:w-32 absolute left-[5%] lg:left-[15%] lg:top-[55%] top-[45%]'>
            <img src={'https://th.bing.com/th/id/OIP.N7JISei6ze6rEM5aCTscJQHaHa?rs=1&pid=ImgDetMain'} alt="" className='h-full w-full object-cover rounded-lg' />
          </div>
          <div className=' lg:h-52 h-64  w-40 lg:w-32 absolute left-[55%] lg:left-[45%] top-[10%]'>
            <img src={lal} alt="" className='h-full w-full object-cover rounded-lg' />
          </div>
          <div className=' lg:h-52 h-64  w-40 lg:w-32 absolute left-[55%] lg:left-[45%] top-[55%] lg:top-[50%]'>
            <img src="https://plus.unsplash.com/premium_photo-1661859445943-0d14d6faf230?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover rounded-lg' />
          </div>
          <div className='lg:h-52 h-64  w-40 lg:w-32 absolute right-0 top-32 hidden lg:block'>
            <img src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover rounded-lg' />
          </div>
        </div>
      </div>



      <div className="two font-inter  ">
        <h1 className='font-bold text-4xl'>Our Missions</h1>


        <div className='flex justify-between gap-20 flex-col lg:flex-row '>

          <div className='lg:w-3/5 mt-top flex flex-col gap-10  '>
            <p>At our heart, we are dedicated to crafting nature's golden elixir, striving to produce 700 tons of honey annually. Through sustainable practices and meticulous care, we harvest the finest nectar from our thriving colonies of bees. Our mission is not just about quantity but about quality, ensuring each jar is filled with the pure essence of nature's sweetness. Join us on this journey as we spread the joy of honey, one spoonful at a time..</p>
            <p>Embark on a sweet journey with us as we aspire to spread the richness of honey across every corner of Nepal. Our mission is to cultivate 700 dedicated dealers, each becoming a beacon of our commitment to quality and purity. Through collaboration and trust, we aim to build a network that reaches far and wide, bringing the essence of nature's bounty to every doorstep. Together, let's create a sweeter, healthier Nepal, one partnership at a time</p>
            <p>Join us in creating not just jobs, but opportunities for growth and prosperity. Our mission is to provide meaningful employment to 2000 individuals, empowering them with skills and resources to thrive in the honey industry. From beekeepers to packaging specialists, every role plays a vital part in our journey towards sustainable production. Together, we'll not only sweeten lives but also foster economic vitality and community resilience. Come, be a part of our hive and let's create a future filled with golden opportunities..</p>
          </div>


          <div className="right lg:w-2/5 flex flex-col   justify-between  ">
            <div className='mx-auto mt-top '>
              <h1 className='font-inter text-5xl font-bold'> 700 TON </h1>
              <p className='mt-top opacity-70'>Production of honey per year </p>
            </div>
            <div className='mx-auto mt-top'>
              <h1 className='font-inter text-5xl font-bold'> 700 Dealers </h1>
              <p className='mt-top opacity-70 text-center'>Over the Nepal </p>
            </div>
            <div className='mx-auto mt-top mb-16'>
              <h1 className='font-inter text-5xl font-bold '> 2000  </h1>
              <p className='mt-top opacity-70 text-center'>Employments </p>
            </div>

          </div>


        </div>

      </div>



      {/* <div className="three mt-top ">
        <div className='h-32 lg:h-80 w-full'>
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="" className='h-full w-full object-cover' />
        </div>

      </div> */}


      <div className="our_story mt-20">
      <iframe  className=' aspect-video w-full' src="https://www.youtube.com/embed/xOy7cU6kakU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      </div>


      <div >
        <h1 className='text-center font-inter text-xl font-semibold mt-20'>Our Sponsers and Partners</h1>
        <div className='flex lg:justify-between   text-center  mt-top '>
          <h1 className=' w-1/4 '>one</h1>
          <h1 className=' w-1/4 '>one</h1>
          <h1 className=' w-1/4'>one</h1>
          <h1 className='w-1/4'>one</h1>
        </div>
      </div>

      <div className="our_team mt-20 ">
        <h1 className='font-inter font-bold text-3xl'>Our Team</h1>
        <p className='font-inter text-sm lg:mr-96 mt-2 leading-5'>Our Teams who contribute and with us to push local market in the production.</p>
       
       
    


      </div>


    </div>
  )
}

export default About