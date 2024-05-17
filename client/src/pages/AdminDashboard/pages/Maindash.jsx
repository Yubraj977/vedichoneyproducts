import React from 'react'
import { AiFillBook } from "react-icons/ai";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, RadialLinearScale } from 'chart.js';
import { Doughnut, PolarArea } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import ProgressBar from "@ramonak/react-progress-bar";


ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  Title,
  Legend
);



function Maindash() {
  const top1Dn = {
    labels: ["Yes", "No"],
    datasets: [{
      label: "pool",
      data: [6, 3],
      backgroundColor: ['#0A79DF', '#DAE0E2'],
      borderColor: ['#0A79DF', '#DAE0E2'],
    }]
  }
  const top2Dn = {
    labels: ["Yes", "No"],
    datasets: [{
      label: "pool",
      data: [4, 3],
      backgroundColor: ['#218F76', '#DAE0E2'],
      borderColor: ['#218F76', '#DAE0E2'],
    }]
  }
  const top3Dn = {
    labels: ["Yes", "No"],
    datasets: [{
      label: "pool",
      data: [17, 20],
      backgroundColor: ['#01CBC6', '#DAE0E2'],
      borderColor: ['#00CCCD', '#DAE0E2'],
    }]
  }
  const top4Dn = {
    labels: ["Yes", "No"],
    datasets: [{
      label: "pool",
      data: [17, 20],
      backgroundColor: ['#6A89CC', '#DAE0E2'],
      borderColor: ['#6A89CC', '#DAE0E2'],
    }]
  }
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October',"nov","dec"];

  const bargraph = {
    revinueOptions: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false // Hide grid lines
          }
        },
        x: {
          grid: {
            display: false // Optionally, hide grid lines for the x-axis as well
          }
        }
      }
    },
    data: {
      labels,
      datasets: [
        {
          label: 'Revenue',
          data: [1500, 2000, 1800, 2200, 2500, 2800, 3000,2000,2500,2700,2800,3000],
          backgroundColor: '#0A79DF',
        },
      ],
    }

  }
  const polar = {
    data: {
      labels: ['Visitors', 'Looged', 'Buyers', ],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 15 ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
          

          ],
          borderWidth: 1,
        },
      ],
    },
    options:{
      plugins: {
        legend: {
          display: false
        }
      },
    }
  }
  const options = {
    plugins: {
      legend: {
        display: false // Hide legend
      }
    }
  };




  return (
    <div className='flex h-screen w-full  gap-2 mt-10'>
      {/* Top Left Three sections */}
      <div className='left w-3/4 h-full  flex flex-col gap-10'>

        <div className='h-1/6 w-full flex justify-between gap-2'>


          {/* Top circle one */}
          <div className=' h-full flex  w-1/3 font-inter  rounded-md bg-slate-200 justify-center px-4 items-center'>
            <div className="left w-1/2">
              <AiFillBook />
              <p className='text-[0.7rem] font-inter'>Total Income</p>
              <p className='font-bold'>Rs 23,000</p>
              <p className='font-semibold text-[0.6rem]'>+450 revieniue incresse</p>
            </div>
            <div className="right w-1/2 h-full">  <Doughnut data={top1Dn} options={options} /></div>
          </div>


          
          {/* Top circle Two */}
          <div className=' h-full flex  w-1/3 font-inter  rounded-md bg-slate-200 justify-center px-4 items-center'>
            <div className="left w-1/2">
              <AiFillBook />
              <p className='text-[0.7rem] font-inter'>Total Income</p>
              <p className='font-bold'>Rs 23,000</p>
              <p className='font-semibold text-[0.6rem]'>+450 revieniue incresse</p>
            </div>
            <div className="right w-1/2 h-full">  <Doughnut data={top1Dn} options={options} /></div>
          </div>

          {/* Top circle Three */}
          <div className=' h-full flex  w-1/3 font-inter  rounded-md bg-slate-200 justify-center px-4 items-center'>
            <div className="left w-1/2">
              <AiFillBook />
              <p className='text-[0.7rem] font-inter'>Total Income</p>
              <p className='font-bold'>Rs 23,000</p>
              <p className='font-semibold text-[0.6rem]'>+450 revieniue incresse</p>
            </div>
            <div className="right w-1/2 h-full">  <Doughnut data={top1Dn} options={options} /></div>
          </div>

        </div>


        {/* Top second section */}
        <div className='h-2/6  flex gap-2 '>
          {/* Revinue Section */}
          <div className='w-2/3 h-full flex flex-col gap-6  justify-center bg-slate-200 '>
            <h1 className='font-bold font-64'>Total Revinue</h1>
            <Bar options={bargraph.revinueOptions} data={bargraph.data} />
          </div>
          {/* Most Selling Product Sections */}
          <div className='w-1/3  flex flex-col gap-2 bg-neutral-200 rounded-lg p-1'>
            <div className='flex w-full justify-between items-center '>
              <h1 className='font-inter text-sm font-semibold'>Most Selling Products</h1>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-3 h-3 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </div>
            <div>
              {/* Most Selling Item 1 */}
              <div className='flex w-full justify-between'>
                <div className='flex gap-2'>
                  <div className="left border-2  w-10 h-10">
                    <img src="https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover rounded-sm' />
                  </div>
                  <div className="right flex flex-col">
                    <h1 className='text-sm font-inter font-semibold'>The shoes</h1>


                    <div className="flex items-center">
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>

                  </div>
                </div>
                <button className='text-[0.6rem] bg-neutral-200 h-6 rounded-md px-4 py-0 text-secondary'>+455 points</button>
              </div>


              {/* Most Selling Item 2 */}
              <div className='flex w-full justify-between'>
                <div className='flex gap-2'>
                  <div className="left  w-10 h-10">
                    <img src="https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover rounded-sm' />
                  </div>
                  <div className="right flex flex-col">
                    <h1 className='text-sm font-inter font-semibold'>The shoes</h1>


                    <div className="flex items-center">
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>

                  </div>
                </div>
                <button className='text-[0.6rem] bg-neutral-200 h-6 rounded-md px-4 py-0 text-secondary'>+455 points</button>
              </div>

              {/* Most Selling Item 3 */}
              <div className='flex w-full justify-between'>
                <div className='flex gap-2'>
                  <div className="left border-2  w-10 h-10">
                    <img src="https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover rounded-sm' />
                  </div>
                  <div className="right flex flex-col">
                    <h1 className='text-sm font-inter font-semibold'>The shoes</h1>


                    <div className="flex items-center">
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>

                  </div>
                </div>
                <button className='text-[0.6rem] bg-neutral-200 h-6 rounded-md px-4 py-0 text-secondary'>+455 points</button>
              </div>

              {/* Most Selling Item 3 */}
              <div className='flex w-full justify-between'>
                <div className='flex gap-2'>
                  <div className="left border-2  w-10 h-10">
                    <img src="https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover rounded-sm' />
                  </div>
                  <div className="right flex flex-col">
                    <h1 className='text-sm font-inter font-semibold'>The shoes</h1>


                    <div className="flex items-center">
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-3 h-3 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>

                  </div>
                </div>
                <button className='text-[0.6rem] bg-neutral-200 h-6 rounded-md px-4 py-0 text-secondary'>+455 points</button>
              </div>


            </div>
          </div>
        </div>

        <div className='h-3/6  flex flex-col gap-4 px-2 bg-slate-200 rounded-md'>
          <h1 className='font-md font-inter font-semibold mt-3 ml-4'>Latest Order</h1>
          <table className='w-full font-inter'>
            <thead>
              <tr className='font-semibold text-center'>
                <th className='text-md font-inter'>Name</th>
                <th className='text-md font-inter'>Image</th>
                <th className='text-md font-inter'>Revenue</th>
                <th className='text-md font-inter'>Customers</th>
                <th className='text-md font-inter'>Address</th>
              </tr>
            </thead>
            <tbody className=''>
              <tr className='font-inter text-center'>
                <td className='text-sm font-inter'>Honey Cam</td>
                <td className='text-sm font-inter h-8 w-8 flex justify-center items-center px-auto mx-auto'>
                  <img src="https://plus.unsplash.com/premium_photo-1673505276422-01702bc4809b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover' />
                </td>
                <td className='text-sm font-inter '>Rs 3000</td>
                <td className='text-sm font-inter'>Customers</td>
                <td className='text-sm font-inter'>Address</td>
              </tr>

              <tr className='font-inter text-center'>
                <td className='text-sm font-inter'>Honey Cam</td>
                <td className='text-sm font-inter h-8 w-8 flex justify-center items-center px-auto mx-auto'>
                  <img src="https://plus.unsplash.com/premium_photo-1673505276422-01702bc4809b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover' />
                </td>
                <td className='text-sm font-inter '>Rs 3000</td>
                <td className='text-sm font-inter'>Customers</td>
                <td className='text-sm font-inter'>Address</td>
              </tr>

              <tr className='font-inter text-center'>
                <td className='text-sm font-inter'>Honey Cam</td>
                <td className='text-sm font-inter h-8 w-8 flex justify-center items-center px-auto mx-auto'>
                  <img src="https://plus.unsplash.com/premium_photo-1673505276422-01702bc4809b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover' />
                </td>
                <td className='text-sm font-inter '>Rs 3000</td>
                <td className='text-sm font-inter'>Customers</td>
                <td className='text-sm font-inter'>Address</td>
              </tr>

              <tr className='font-inter text-center'>
                <td className='text-sm font-inter'>Honey Cam</td>
                <td className='text-sm font-inter h-8 w-8 flex justify-center items-center px-auto mx-auto'>
                  <img src="https://plus.unsplash.com/premium_photo-1673505276422-01702bc4809b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover' />
                </td>
                <td className='text-sm font-inter '>Rs 3000</td>
                <td className='text-sm font-inter'>Customers</td>
                <td className='text-sm font-inter'>Address</td>
              </tr>



            </tbody>
          </table>
        </div>


      </div>






      {/* Right Secion */}


      <div className='right w-1/4 flex flex-col   gap-10'>
        {/* Top circle 4 */}
        <div className='  flex  w-full h-1/6 font-inter  rounded-md bg-slate-300 justify-center px-4 items-center'>
            <div className="left w-1/2">
              <AiFillBook />
              <p className='text-[0.7rem] font-inter'>Total Income</p>
              <p className='font-bold'>Rs 23,000</p>
              <p className='font-semibold text-[0.6rem]'>+450 revieniue incresse</p>
            </div>
            <div className="right w-1/2 h-full">  <Doughnut data={top1Dn} options={options} /></div>
          </div>

        {/* Right second Audience section */}
        <div className='h-2/6 flex flex-col rounded-md bg-slate-200 '>
          <h1 className='font-inter text-center font-semibold'>Audience</h1>
          <div className='h-full w-full flex justify-center'>
            <PolarArea data={polar.data} options={polar.options} className='object-cover h-20'/>


          </div>
        </div>



        <div className='h-3/6 px-3 bg-neutral-200'>
          <h1>Reviews</h1>
          <div className='flex flex-col gap-2  mt-top'>
            <div className='flex justify-between'><p className='text-[0.8rem] font-inter font-semibold'>5 Star </p>   <ProgressBar width='180px'completed={90} bgColor='#10A881' height='14px' animateOnRender='true' borderRadius='20px' /></div>
            <div className='flex justify-between'><p className='text-[0.8rem] font-inter font-semibold'>5 Star </p>   <ProgressBar width='180px'completed={85} bgColor='#10A881' height='14px' animateOnRender='true' borderRadius='20px' /></div>
            <div className='flex justify-between'><p className='text-[0.8rem] font-inter font-semibold'>5 Star </p>   <ProgressBar width='180px'completed={80} bgColor='#10A881' height='14px' animateOnRender='true' borderRadius='20px' /></div>
            <div className='flex justify-between'><p className='text-[0.8rem] font-inter font-semibold'>5 Star </p>   <ProgressBar width='180px'completed={60} bgColor='#10A881' height='14px' animateOnRender='true' borderRadius='20px' /></div>
            <div className='flex justify-between'><p className='text-[0.8rem] font-inter font-semibold'>5 Star </p>   <ProgressBar width='180px'completed={40} bgColor='#10A881' height='14px' animateOnRender='true' borderRadius='20px' /></div>
           
          </div>
          <p className='font-inter text-sm font-semibold mt-4'>Total 4000 Review</p>

        </div>
      </div>


    </div>
  )
}

export default Maindash