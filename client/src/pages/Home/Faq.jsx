import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
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

    const toggleVisibility = (index) => {
        const newVisibilities = [...visibilities];
        newVisibilities[index] = !newVisibilities[index];
        setVisibilities(newVisibilities);
    };

  

    return (
        <div className='w-full flex gap-4 mt-top'>
            <div className="left w-4/12 rounded-md object-cover h-[30rem]">
                <img src="https://images.unsplash.com/photo-1555035900-54c17f3bc1eb?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover' />
            </div>
            <div className="right w-8/12">
                {honeyFAQ.map((item, index) => (
                    <div key={item.id} className="item border-2 py-4 px-4 flex rounded-md mt-4  flex-col" >
                        <div className='flex justify-between'>
                            <h1>{item.question}</h1>
                            <div className='border' onClick={() => toggleVisibility(index)}>
                                {visibilities[index] ? <FaMinus /> : <FaPlus />}
                            </div>
                        </div>
                        <div>
                            {visibilities[index] && <p>{item.answer}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
