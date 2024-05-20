import React from 'react'

function Checkout() {
  return (
    <div>

      <button className='bg-cyan-200 p-4 ' onClick={()=>{
        fetch('api/account/test/').then((res)=>res.json()).then((data)=>{
          console.log(data);
        })

      }}>
      click me
      </button>
    </div>
  )
}

export default Checkout