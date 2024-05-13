import React, { useState,useEffect } from 'react';
import { useRef } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import gsap from 'gsap';
import honey3 from '/honey3.png'
const honeyFAQ = [
    {
        id: 1,
        question: "Where does your honey come from?",
        answer: "Our honey is sourced from local beekeepers who maintain ethical and sustainable practices."
    },
    {
        id: 2,
        question: "Is your honey raw or processed?",
        answer: "We pride ourselves on offering raw honey, which means it is unfiltered and retains all of its natural enzymes and nutrients."
    },
    {
        id: 3,
        question: "What varieties of honey do you offer?",
        answer: "We offer a variety of honey types, including wildflower, clover, and manuka, each with its own unique flavor profile and health benefits."
    },
    {
        id: 4,
        question: "Are your honey products organic?",
        answer: "Yes, our honey products are certified organic, ensuring they are free from pesticides and other harmful chemicals."
    },
    {
        id: 5,
        question: "How can I use your honey in cooking?",
        answer: "Our honey is incredibly versatile and can be used in a variety of ways, such as sweetening drinks, drizzling over desserts, or as a natural sweetener in recipes."
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
