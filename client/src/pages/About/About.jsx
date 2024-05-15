import React from 'react'
import { useEffect } from 'react';
function About() {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className='lg:px-side px-mb_side mt-10 lg:mt-0 '>
      <div className="one w-full flex  items-center gap-10  flex-col lg:flex-row">
        <div className="left lg:w-1/2 w-full ">
          <h1 className='text-black text-5xl font-inter font-bold '>We’re changing the way people Purchase.</h1>
          <p className='font-inter mt-top'>Step into a world where honey shopping is a delight, not just a task. We're reshaping the way you purchase honey, offering a seamless blend of quality, variety, and convenience. With our carefully curated selection, sourced from the finest apiaries, every jar tells a story of nature's purest sweetness. Join us on this journey and elevate your honey-buying experience today!".</p>
        </div>
        <div className="right w-full lg:w-1/2    relative h-[39rem] ">
          <div className=' lg:h-52 h-64  w-40 lg:w-32 absolute left-[5%] lg:left-[15%] top-[0%] lg:top-[20%]'>
            <img src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover rounded-lg' />
          </div>

          <div className=' lg:h-52 h-64  w-40 lg:w-32 absolute left-[5%] lg:left-[15%] lg:top-[55%] top-[45%]'>
            <img src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover rounded-lg' />
          </div>
          <div className=' lg:h-52 h-64  w-40 lg:w-32 absolute left-[55%] lg:left-[45%] top-[10%]'>
            <img src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover rounded-lg' />
          </div>
          <div className=' lg:h-52 h-64  w-40 lg:w-32 absolute left-[55%] lg:left-[45%] top-[55%] lg:top-[50%]'>
            <img src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover rounded-lg' />
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



      <div className="three mt-top ">
        <div className='h-32 lg:h-80 w-full'>
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="" className='h-full w-full object-cover' />
        </div>

      </div>


      <div className="our_story">
        <h1>Something gonna come here</h1>
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
        <div className='flex flex-wrap  lg:gap-5 justify-center mt-top '>


          <div className='lg:w-1/5 w-1/2 text-center flex flex-col items-center  '>
            <div className=' w-20 h-20  rounded-full'>
              <img src="https://scontent.fktm14-1.fna.fbcdn.net/v/t1.6435-9/120959576_228214105387950_1549228730601569508_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHEr6mMLXIBTWjBjcQO1FKerRpiU_cS1CmtGmJT9xLUKT4pHFpYkZnxeNnUmuQ_BLweuFPNtTYTN1jwWjta3oYi&_nc_ohc=gD2148fuBBsQ7kNvgFDL5fu&_nc_ht=scontent.fktm14-1.fna&oh=00_AYAH42MLL7w_0Uk4Wrp5Lzo_r5Bnm5jlLIe-Sk5T8OnQoA&oe=666C7F50" alt="" className='h-full w-full object-cover rounded-full' />
            </div>
            <h1 className='text-md font-semibold font-inter w-full'>Madhu sudhan Kc</h1>
            <p className='text-sm font-inter'>Managing Director</p>
          </div>



          <div className='lg:w-1/5 w-1/2 text-center flex flex-col items-center '>
            <div className='w-20 h-20 rounded-full'>
              <img src="https://vedichoneyproducts.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-09-at-20.39.56.jpeg" alt="" className='h-full w-full object-cover rounded-full' />
            </div>
            <h1 className='text-md font-semibold font-inter'>One night</h1>
            <p className='text-sm font-inter'>Director of the managment</p>
          </div>

          <div className='lg:w-1/5 w-1/2 text-center flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full'>
              <img src="https://scontent.fktm14-1.fna.fbcdn.net/v/t39.30808-6/312922543_207157561712736_3836336145576420280_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHsBrodXYVvl3ZFDsiIYmzOKoMIwlBOGXUqgwjCUE4ZdXwMwAYLM6OZWhncOcbdlBHRNjhqx9kT-56biKDLk6-e&_nc_ohc=PruAAI-vn1oQ7kNvgEH1CYq&_nc_ht=scontent.fktm14-1.fna&oh=00_AYC3icOhzjysgwLFvfXfOxkGF4NI6-Q6ZBNufTaxD79AWg&oe=664AD9DB" alt="" className='h-full w-full object-cover rounded-full' />
            </div>
            <h1 className='text-md font-semibold font-inter'>Parash Khadka</h1>
            <p className='text-sm font-inter'>Production Officer</p>
          </div>

          <div className='lg:w-1/5 w-1/2 text-center flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full'>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" className='h-full w-full object-cover rounded-full' />
            </div>
            <h1 className='text-md font-semibold font-inter'>One night</h1>
            <p className='text-sm font-inter'>Director of the managment</p>
          </div>

          <div className='lg:w-1/5 w-1/2 text-center flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full'>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" className='h-full w-full object-cover rounded-full' />
            </div>
            <h1 className='text-md font-semibold font-inter'>One night</h1>
            <p className='text-sm font-inter'>Director of the managment</p>
          </div>

          <div className='lg:w-1/5 w-1/2 text-center flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full'>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" className='h-full w-full object-cover rounded-full' />
            </div>
            <h1 className='text-md font-semibold font-inter'>Madhu</h1>
            <p className='text-sm font-inter'>Director of the managment</p>
          </div>

          <div className='lg:w-1/5 w-1/2 text-center flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full'>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" className='h-full w-full object-cover rounded-full' />
            </div>
            <h1 className='text-md font-semibold font-inter'>One night</h1>
            <p className='text-sm font-inter'>Director of the managment</p>
          </div>

          <div className='lg:w-1/5 w-1/2 text-center flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full'>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" className='h-full w-full object-cover rounded-full' />
            </div>
            <h1 className='text-md font-semibold font-inter'>One night</h1>
            <p className='text-sm font-inter'>Director of the managment</p>
          </div>

          <div className='lg:w-1/5 w-1/2 text-center flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full'>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" className='h-full w-full object-cover rounded-full' />
            </div>
            <h1 className='text-md font-semibold font-inter'>Mr. Mohit</h1>
            <p className='text-sm font-inter'>Developer</p>
          </div>

          <div className='lg:w-1/5 w-1/2 text-center flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full'>
              <img src="https://media.licdn.com/dms/image/D5603AQEUbwpG5aHopQ/profile-displayphoto-shrink_800_800/0/1714336068310?e=1721260800&v=beta&t=R76gPoUIUAzQ4qJRnKqoDMDhD_hulNH9hCHtpDb7H8Y" alt="" className='h-full w-full object-cover rounded-full' />
            </div>
            <h1 className='text-md font-semibold font-inter'>Yubraj Khatri</h1>
            <p className='text-sm font-inter'>Developer</p>
          </div>


        </div>
      </div>


    </div>
  )
}

export default About