import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Done() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Order Placed!</h1>
        <p className="text-lg mb-4">Your order has been successfully placed.</p>
        <button 
        onClick={() => navigate('/dashboard?tab=myorders')}
        className="bg-secondary text-white py-2 px-4 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 mt-4">
          View My Orders
        </button>
      </div>
    </div>
  );
}

export default Done;
