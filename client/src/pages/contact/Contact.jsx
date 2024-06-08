import React from 'react'
import honeyplant from '/honeyplant.jpeg'
import honeyfarm from '/honeyfarm.jpeg'
function Contact() {
  return (
    <div className=' mt-16 px-mb_side my-4 flex flex-col gap-20'>

      <div className='flex gap-20 lg:flex-row flex-col'>
        <div className="left h-96 lg:w-1/2 rounded-xl">
          <img src={honeyplant} alt="honeyplant image" className='rounded-xl w-full h-full object-cover' />
        </div>



        <div className="right w-full lg:w-1/2">
          <h1 className='text-bold text-4xl font-inter font-semibold text-gray-800'>Visit Our Honey Plant</h1>
          {/* Email Secrton */}
          <div className='mt-8'>
            <h2 class=" text-base font-medium text-gray-700  flex gap-2">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-secondary w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email</h2>
            <p class="mt-2 text-sm text-gray-700 ">Your can email us directly</p>
            <p class="mt-2 text-sm text-secondary">dangmadhukc@gmail.com</p>
          </div>
          {/* Office Section */}
          <div className='mt-8'>
            <h2 class=" text-base font-medium text-gray-700  flex gap-2">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-secondary w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Office</h2>

            <p class="mt-2 text-sm text-gray-700 ">Come say hello at our office HQ.</p>
            <p class="mt-2 text-sm text-secondary opcacity-90">Tulsipur Submetorpolitan City - 8 , Dudhena, Surkhet Road Dang.</p>
          </div>
          {/* Phone Section */}
          <div className='mt-8'>
            <h2 class=" text-base font-medium text-gray-700  flex gap-2">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-secondary w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
              Phone</h2>

            <p class="mt-2 text-sm text-gray-500 ">Mon-Fri from 8am to 5pm..</p>
            <p class="mt-2 text-sm text-secondary opacity-80"> 9857823608 / 9822815391 </p>
          </div>



         


        </div>
      </div>


<hr />
      <div className='flex gap-20 lg:flex-row flex-col-reverse'>
      <div className="right w-full lg:w-1/2">
          <h1 className='text-bold text-4xl font-inter font-semibold text-gray-800'>Visit Our  Honey Farm</h1>
          {/* Email Secrton */}
          <div className='mt-8'>
            <h2 class=" text-base font-medium text-gray-700  flex gap-2">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-secondary w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email</h2>
            <p class="mt-2 text-sm text-gray-700 ">Your can email us directly</p>
            <p class="mt-2 text-sm text-secondary">vedicbeefarm@gmail.com</p>
          </div>
          {/* Office Section */}
          <div className='mt-8'>
            <h2 class=" text-base font-medium text-gray-700  flex gap-2">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-secondary w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Office</h2>

            <p class="mt-2 text-sm text-gray-700 ">Come say hello at our office HQ.</p>
            <p class="mt-2 text-sm text-secondary opcacity-90">Dangisharan Rural Municipality - 4, Baibang Dang.</p>
          </div>
          {/* Phone Section */}
          <div className='mt-8'>
            <h2 class=" text-base font-medium text-gray-700  flex gap-2">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-secondary w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
              Phone</h2>

            <p class="mt-2 text-sm text-gray-500 ">Mon-Fri from 8am to 5pm..</p>
            <p class="mt-2 text-sm text-secondary opacity-80"> 9857823608 / 9822815391 </p>
          </div>



         


        </div>
        <div className="left  h-96 lg:w-1/2 rounded-xl">
          <img src={honeyfarm} alt="honeyfarm image" className='rounded-xl w-full h-full object-cover' />
        </div>



       
      </div>



    
    </div>
  )
}

export default Contact