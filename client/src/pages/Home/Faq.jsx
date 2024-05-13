import React from 'react'
import { FaPlus } from "react-icons/fa";
function Faq() {
    const faq=[
        {
            id:1,
            heading:"What materials we use in our product ",
            paragraph:"We use the products likes this this and this"
        },
        {
            id:2,
            heading:"What materials we use in our product ",
            paragraph:"We use the products likes this this and this"
        },
        {
            id:3,
            heading:"What materials we use in our product ",
            paragraph:"We use the products likes this this and this"
        },
        {
            id:4,
            heading:"What materials we use in our product ",
            paragraph:"We use the products likes this this and this"
        },
        {
            id:5,
            heading:"What materials we use in our product ",
            paragraph:"We use the products likes this this and this"
        }
    ]
    return (
        <div className='w-full flex gap-4 mt-top'>
            <div className="left w-4/12 rounded-md object-cover">
                <img src="https://images.unsplash.com/photo-1555035900-54c17f3bc1eb?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover' />
            </div>
            <div className="right w-8/12">
               {faq.map((item)=>(
                 <div className="item border-2 py-4 px-4 flex justify-between rounded-md mt-4" >
                 <h1>{item.heading}</h1>
                 <FaPlus />
             </div>
               ))}
            </div>
        </div>
    )
}

export default Faq