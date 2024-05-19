import React from 'react'
import googleLogo from '/google-logo.png'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import fbLogo from '/facebook-logo.png'
import { FiEye } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
import app from '../../../configs/firebase'
const googleProvider = new GoogleAuthProvider();
const facebookProvider=new FacebookAuthProvider();
  const auth = getAuth(app);
function Signup() {
    const navigate = useNavigate()
    function handleGoogleSignUp(){
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          const authenticGoogleUser={
            name:user.displayName,
             email:user.email,
             profile_url:user.photoURL,
          }
          console.log(authenticGoogleUser);
      
        //   setgoogleUser({...authenticGoogleUser})
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      }

  
      
    function facebookSignUp(){

    }
    return (

        <div className='flex  gap-10'>
            <div className="  w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12 ">
                <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
        relative z-10">
                    <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Sign up for an account</p>
                    <div className='  w-full flex justify-between lg:flex-row flex-col gap-4'>
                        <h1 className='font-inter flex gap-2 py-2 px-4 rounded-lg border-2 border-neutral-800 items-center opacity-90 hover:bg-slate-200 hover:opacity-100 text-sm font-semibold justify-center' onClick={handleGoogleSignUp}> <FaGoogle /> SignUp with Google</h1>
                        <h1 className='font-inter flex gap-2 py-2 px-4 rounded-lg border-2 border-neutral-800 items-center opacity-90 hover:bg-slate-200 hover:opacity-100 text-sm font-semibold justify-center'> <FaFacebookF /> SignUp with Facebook</h1>
                    </div>
                    <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                        <div className="relative">
                            <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Username</p>
                            <input placeholder="John" type="text" className="border placeholder-gray-400 focus:outline-none
              focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"/>
                        </div>
                        <div className="relative">
                            <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                            <input placeholder="123@ex.com" type="text" className="border placeholder-gray-400 focus:outline-none
              focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"/>
                        </div>
                        <div className="relative">
                            <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Password</p>
                            <input placeholder="Password" type="password" className="border placeholder-gray-400 focus:outline-none
              focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"/>
                        </div>
                        <div className="relative">
                            <a className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-secondary_shade
              rounded-lg transition duration-200 hover:bg-secondary ease ">Submit</a>
                        </div>
                        <p className='mt-2'>Don't have an account?  <span className='text-secondary underline cursor-pointer' onClick={() => navigate('/login')}>Login</span> Now.</p>
                    </div>
                </div>

            </div>
            <div className=' hidden lg:block w-1/2 h-[33rem]'>
                <img src="https://images.unsplash.com/photo-1622448559300-6df8495a1574?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full h-full object-cover' alt="" />
            </div>
        </div>
    )
}

export default Signup