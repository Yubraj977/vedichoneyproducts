import honey from '/honey3.png'
import googleLogo from '/google-logo.png'
import fbLogo from '/facebook-logo.png'
import { FiEye } from "react-icons/fi";
import { useNavigate, Navigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import app from '../../../configs/firebase'
import Cookies from 'js-cookie';

import { useSelector, useDispatch } from 'react-redux';
import { signInStart, signInSucess, signInFaliure } from '../../../configs/redux/user/userSlice';
import { getToken, setToken, removeToken } from '../../heplers/utils/HelperFun'
import toast, { Toaster } from 'react-hot-toast';


const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
import cookie from 'js-cookie'
const auth = getAuth(app);
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setemail] = useState()
  const [password, setpassword] = useState('')
  const [accessToken, setAccessToken] = useState(null);
  console.log(accessToken);
  useEffect(() => {
    const fetchToken = () => {
        const value = Cookies.get('sessionid');
        if (value) {
            setToken(value);
            console.log("Access Token:", value);
        } else {
            console.log("Access token not found");
        }
    };

    fetchToken();
}, []);
  
  const notify = (value) => toast.success(`Sucess:${value}`);
  const loginError = (value) => toast.error(`Error:${value}`);


  async function handleGoogleSignin() {
    const result = await signInWithPopup(auth, googleProvider)

    const credential = await GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const authenticGoogleUser = {
      name: user.displayName,
      email: user.email,
      profile_url: user.photoURL,
    }
    console.log(authenticGoogleUser);

    dispatch(signInStart())
    try {
      const res = await fetch('api/account/register/google/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authenticGoogleUser)
      });
      const data = await res.json();
      console.log(res);
      console.log(data);


      if (!res.ok) {
        dispatch(signInFaliure(res.message))
      }
      dispatch(signInSucess({ currentUser: data.data, accessToken: data.tokens.access }))
      setToken(data.tokens.access)
      console.log(data);
      setTimeout(() => {
        navigate('/products');
      }, 1000);

      notify('Login sucess');



    } catch (error) {
      dispatch(signInFaliure(error.message))
    }



  }

  function handleFacebookSignin() {
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
    console.log('ok');

  }


  async function handleLoginSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch('api/account/login/', {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json();
      console.log(res);
      console.log(data);
      if (!res.ok) {
        dispatch(signInFaliure(res.message))
        loginError(data.errors.detail)
      }

      dispatch(signInSucess({ currentUser: data.data, accessToken: data.tokens.access }))
      notify('Sign in sucess')
      navigate('/products')

    } catch (error) {
      dispatch(signInFaliure(error.message))
    }

  }
  return (
    <div className='px-mb_side lg:px-side py-[80px] flex items-center gap-5 w-full font-inter'>
      {/* left side */}
      <div className="left w-full lg:w-1/2">
        <h1 className='font-semibold text-3xl'>Welcome,</h1>
        <Toaster />
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
        <form className='mt-8 flex flex-col ' onSubmit={handleLoginSubmit}>

          <input type="text" placeholder='Email' className='text-lg px-5 py-3 outline-none border-2  rounded-md' onChange={(e) => setemail(e.target.value)} />
          <div className='flex w-full relative mt-3'>

            <input type="text" placeholder='password' className='text-lg px-5 py-3 outline-none border-2 w-full rounded-md' onChange={(e) => setpassword(e.target.value)} />
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
        <p className='mt-2'>Don't have an account?  <span className='text-secondary underline cursor-pointer' onClick={() => navigate('/signup')}>Sign Up</span> Now.</p>
      </div>

      {/* right side */}
      <div className="right w-1/2  hidden lg:block  h-full">
        <img src={'https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className='h-full w-full  object-cover' />
      </div>
    </div>
  )
}

export default Login