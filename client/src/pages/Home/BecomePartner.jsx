// import React from 'react'
import './css/becomepartner.css'

function BecomePartner() {
  return (
    <div className="lg:px-side px-mb_side flex justify-center flex-col items-center py-24 bg-secondary w-full">
      <h1 className="text-white text-4xl text-center font-semibold">Become our partner</h1>
      <p className="text-white text-xl mt-3 font-normal text-center">If you are vendor, you can join into out parter program. </p>
      <div className="form-email w-full mt-3 flex  lg:w-[55%]">
        <input type="text" className="border-none flex-1 outline-none px-5 py-5 lg:py-3 text-sm lg:text-lg text-neutral-600 font-normal" placeholder="enter you email address here." />
        <button className="bg-neutral-800 text-white text-sm lg:text-lg font-medium px-5 py-5 lg:py-3">Contact Now</button>
      </div>
    </div>
  )
}

export default BecomePartner