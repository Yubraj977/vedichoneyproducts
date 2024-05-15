import React, { useState,useEffect } from 'react';
import { useRef } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import gsap from 'gsap';
import honey3 from '/honey3.png'
const honeyFAQ = [
    {
        id: 1,
        question: "What Makes Vedic Honey Farm's Honey Unique?",
        answer: "Our honey is unique due to our commitment to ethical beekeeping practices and sustainable production methods. We prioritize the health and happiness of our bees and ecosystems, resulting in pure, high-quality honey that embodies the essence of nature's bounty."
    },
    {
        id: 2,
        question: "Are Your Products Organic?",
        answer: "Yes, our products are crafted using organic practices, ensuring that they are free from synthetic chemicals, pesticides, and GMOs. We believe in upholding the integrity of nature's gifts while promoting environmental sustainability."
    },
    {
        id: 3,
        question: "What varieties of honey do you offer?",
        answer: "We offer a variety of honey types, including wildflower, clover, and manuka, each with its own unique flavor profile and health benefits."
    },
    {
        id: 4,
        question: "Do You Offer Bulk Or Wholesale Options For Your Honey And Honey-Based Products?",
        answer: "Yes, we provide bulk and wholesale options for our products to accommodate customers with larger needs. Whether for personal use, commercial purposes, or resale, we offer flexible solutions to meet your requirements."
    },
    {
        id: 5,
        question: "Do You Ship Internationally?",
        answer: "Yes, we offer international shipping for our products. Please contact us for more information on shipping rates and delivery times to your location."
    }
];
function Faq() {
    const [visibilities, setVisibilities] = useState(Array(honeyFAQ.length).fill(false));
    const faqRef=useRef()
    useEffect(() => {
      if(visibilities && faqRef){
        gsap.from(faqRef.current, {
            height: 0,
            duration: 0.8,
            ease: "circ.out",
          
          });
      }
     
    }, [visibilities])
    
    const toggleVisibility = (index) => {
        const newVisibilities = [...visibilities];
        newVisibilities[index] = !newVisibilities[index];
        setVisibilities(newVisibilities);
    };

  

    return (
        <div className='w-full flex gap-28 my-top '> 

            <div className="left w-8/12 rounded-md object-contain h-[30rem] lg:block hidden ">
                <img src={'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" className='h-full w-full object-cover rounded-xl' />
            </div>

            <div className="right lg:w-full w-full  min-h-[30rem] flex flex-col justify-center ">
                {honeyFAQ.map((item, index) => (
                    <div key={item.id} className=" w-full item     py-4 px-4 flex rounded-md mt-4  flex-col " >
                        <div className='flex justify-between w-full '>
                            <h1 className='font-inter font-bold'>{item.question}</h1>
                            <div className='' onClick={() => toggleVisibility(index)}>
                                {visibilities[index] ? <FaMinus /> : <FaPlus />}
                            </div>
                        </div>
                        <div>
                            {visibilities[index] && <p className='text-sm font-inter py-4 ' ref={faqRef}>{item.answer}</p>}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Faq;
