import React, {
  useEffect,
  useState
} from 'react'

function Myorders() {
  const [myOrders, setmyOrders] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    async function fetchMyOrders() {
      setLoading(true)
      const res = await fetch('api/order/myorders')
      const data = await res.json()
      if (res.ok) {
        setmyOrders(data.myOrders)
        setLoading(false)
      }
      if (!res.ok) {
        setLoading(false)
        setError(data.message)
      }
    }
    fetchMyOrders()
  }, [])
  console.log(myOrders)

  return (
    <div className=' h-full'>

      {
        loading
          ?
          (
            <div>Loading...</div>
          )
          :
          (
            <div>
            {myOrders.length == 0 && <h1>No Orders</h1>}
            {Myorders&&myOrders.length > 0 && myOrders.map((order, index) => {
              return (
                <div className='flex justify-between  border mt-top'>
                       <div className="left">
                         <p>Preparing for shipping order will be at you in 2 aug 24dh</p>
                         <div className='flex'>
                           <div className="image h-20 w-20 object-cover rounded-xl">
                             <img src={myOrders[0].orderItems[0].image} alt="" className='h-full w-full object-cover' />
                           </div>
                           <div className="right">
                             <h1>Honey money bunney</h1>
                             <h3>Category:bla bala</h3>
                             <p>quantity</p>
                           </div>
                         </div>
                       </div>
                       <div className="right">
                         <button className='bg-secondary  py-3 px-6 rounded-xl text-white'>cancel Order</button>

                       </div>
                     </div> 

              )

            })
            }

            </div>
          )
      }

    
    </div>
  )
}

export default Myorders

  