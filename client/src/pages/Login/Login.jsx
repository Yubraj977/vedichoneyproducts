import honey from '/honey3.png'
import googleLogo from '/google-logo.png'
import fbLogo from '/facebook-logo.png'
import { FiEye } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";


import app from '../../../configs/firebase'
const googleProvider = new GoogleAuthProvider();
const facebookProvider=new FacebookAuthProvider();
  const auth = getAuth(app);
function Login() {
  const [googleUser,setgoogleUser]=useState({})
  console.log(googleUser);
  
const navigate=useNavigate()
function handleGoogleSignin(){
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const authenticGoogleUser={
      username:user.displayName,
       email:user.email,
       photoUrl:user.photoURL,
       emailVerified:user.emailVerified

    }

    setgoogleUser({...authenticGoogleUser})
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

function handleFacebookSignin(){
  signInWithPopup(auth, facebookProvider)
  .then((result) => {
    const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
console.log(credential);
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
  });
}
  return (
    <div className='px-mb_side lg:px-side py-[80px] flex items-center gap-5 w-full font-inter'>
      {/* left side */}
      <div className="left w-full lg:w-1/2">
        <h1 className='font-semibold text-3xl'>Welcome,</h1>
        <p className='font-normal text-lg mt-3'>Log In to start amazing experience with our sotre.</p>
        <div className="google cursor-pointer mt-8 flex items-center justify-center gap-5 px-10 py-3 border-2 bg-slate-300 rounded-md" onClick={handleGoogleSignin}>
          <img src={googleLogo} alt="" />
          <p className='font-medium'>Log In with Google</p>
        </div>
        <div className="facebook cursor-pointer mt-5 items-center  justify-center flex gap-4 px-10 py-3 border-2 bg-slate-200 rounded-md" onClick={handleFacebookSignin}>
          <img src={fbLogo} alt="" />
          <p className='font-medium'>Log In with Facebook</p>
        </div>
        <p className='text-center mt-8 text-xl font-medium '>----or----</p>
        <form className='mt-8 flex flex-col '>
          
          <input type="text" placeholder='Username' className='text-lg px-5 py-3 outline-none border-2  rounded-md' />
          <div className='flex w-full relative mt-3'>
            <input type="password" placeholder='Password' className='text-lg px-5 py-3 outline-none border-2 w-full rounded-md' />
            < FiEye className='absolute top-0 right-[20px] text-gray-500 text-lg h-full ' />
          </div>
          <div className='flex justify-between items-center mt-3'>
            <div className='flex gap-3'>
              <input type="checkbox" name="remember-me" id="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <p className='text-secondary'>Forget Password?</p>
          </div>
          <button type='submit' className=' bg-secondary py-3 text-white font-medium rounded-md text-lg tracking-wide flex items-center gap-5 justify-center mt-10'>Log In</button>
        </form>
        <p className='mt-2'>Don't have an account?  <span className='text-secondary underline cursor-pointer' onClick={()=>navigate('/signup')}>Sign Up</span> Now.</p>
      </div>

      {/* right side */}
      <div className="right w-1/2  hidden lg:block  h-full">
        <img src={'https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}  className='h-full w-full  object-cover' />
      </div>
    </div>
  )
}

export default Login