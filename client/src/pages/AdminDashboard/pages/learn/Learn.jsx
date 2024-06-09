import React from 'react'
import learn from '/learn.png'
import { GiFarmer } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdSell } from "react-icons/md";
import { Datepicker } from "flowbite-react";
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
function Learn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className='w-full px-mb_side'>
        <Helmet>
        <title>Learn - Vedic Honey Products</title>
        <meta name="description" content="Learn about the benefits of honey, beekeeping practices, and how to use honey in your daily life." />
        <link rel="canonical" href="https://www.vedichoneyproduct.com/learn" />
      </Helmet>
      <div classNameName="first">
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-secondary">Learn faster</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A whole knowledge about honey</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">Nurture Bees, Cultivate Sweetness.
                    From Hive to Honey: Pure Delight.
                    Sustainable Practices, Thriving Colonies.
                    Bee Health, Human Wealth.
                    Harvest Nature's Liquid Gold.
                    Empower Beekeepers, Save the Planet.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">

                        <GiFarmer className="absolute left-1 top-1 h-6 w-6 text-secondary" />
                        Farming.
                      </dt>
                      <dd className="inline">

                        Honey farming blends tradition with sustainability, fostering healthy bee colonies.
                        Through careful hive management, we harvest nature's sweet nectar.

                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">

                        <MdOutlineProductionQuantityLimits className='absolute left-1 top-1 h-6 w-6 text-secondary' />
                        Production.
                      </dt>
                      <dd className="inline">Honey production transforms floral nectar into golden, natural sweetness.</dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">

                        <MdSell className='absolute left-1 top-1 h-6 w-6 text-secondary' />
                        Selling.
                      </dt>
                      <dd className="inline">Selling honey brings nature's pure, golden sweetness to your table..</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className='h-[32rem] '>
                <img src={learn} alt=" teacher" className=" h-full w-full object-contain" />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="second ml-8">

        <button type="button" onClick={toggleModal} data-modal-target="timepicker-modal" data-modal-toggle="timepicker-modal" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
          <svg className="w4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
          </svg>
          Schedule appointment
        </button>


        <div id="timepicker-modal" tabindex="-1" aria-hidden="true" className={` ${isModalOpen ? "block" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
          <div className="relative p-4 w-full max-w-[23rem] max-h-full">

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">

              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Schedule an appointment
                </h3>
                <button type="button" onClick={toggleModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="timepicker-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only" onClick={toggleModal}>Close modal</span>
                </button>
              </div>

              <div className="p-4 pt-0">
                <div inline-datepicker datepicker-autoselect-today className="mx-auto sm:mx-0 flex justify-center my-5 [&>div>div]:shadow-none [&>div>div]:bg-gray-50 [&_div>button]:bg-gray-50"></div>
                <label className="text-sm font-medium tex t-gray-900 dark:text-white mb-2 block">
                  Pick your time
                </label>
                <ul id="timetable" className="grid w-full grid-cols-3 gap-2 mb-5">
                  <li>
                    <input type="radio" id="10-am" value="" className="hidden peer" name="timetable" />
                    <label for="10-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      10:00 AM
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="10-30-am" value="" className="hidden peer" name="timetable" />
                    <label for="10-30-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      10:30 AM
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="11-am" value="" className="hidden peer" name="timetable" />
                    <label for="11-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      11:00 AM
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="11-30-am" value="" className="hidden peer" name="timetable" />
                    <label for="11-30-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      11:30 AM
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="12-am" value="" className="hidden peer" name="timetable" checked />
                    <label for="12-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      12:00 AM
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="12-30-pm" value="" className="hidden peer" name="timetable" />
                    <label for="12-30-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      12:30 PM
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="1-pm" value="" className="hidden peer" name="timetable" />
                    <label for="1-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      01:00 PM
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="1-30-pm" value="" className="hidden peer" name="timetable" />
                    <label for="1-30-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      01:30 PM
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="2-pm" value="" className="hidden peer" name="timetable" />
                    <label for="2-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      02:00 PM
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="2-30-pm" value="" className="hidden peer" name="timetable" />
                    <label for="2-30-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      02:30 PM
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="3-pm" value="" className="hidden peer" name="timetable" />
                    <label for="3-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      03:00 PM
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="3-30-pm" value="" className="hidden peer" name="timetable" />
                    <label for="3-30-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                      03:30 PM
                    </label>
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                  <button type="button" data-modal-hide="timepicker-modal" className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={toggleModal}>Discard</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Learn