import React, { useEffect, useRef, useState } from 'react';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import app from '../../../configs/firebase';
import { useForm } from 'react-hook-form';
import { Oval } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth(app);

function Signup() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();
    console.log(isSubmitting);
    console.log(errors);
    const password = useRef({});
    password.current = watch('password', '');
    const notify = (value) => toast.error(`Error:${value}`);
    const signUpSucess = (value) => toast.success(`Sucess: ${value}`);


    const onSubmit = async (data) => {
        console.log(data);
        const res = await fetch('api/account/register/', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
        const backend = await res.json()
        console.log(res);
        console.log(backend);
        if (!res.ok) {
            notify(backend.errors.email[0])
        }
        console.log('singup sucess');
        if (res.ok) {
            signUpSucess('Sign Up Sucess Please Login to continue')
            setTimeout(() => {
                navigate('/login')
            }, 2000);
        }




    }



    function handleGoogleSignUp() {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const authenticGoogleUser = {
                    name: user.displayName,
                    email: user.email,
                    profile_url: user.photoURL,
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
    function facebookSignUp() {
        // Implement Facebook sign-up logic
    }

    return (
        <div className='flex  gap-10'>
            <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12 ">
                <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                    <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Sign up for an account</p>
                    <div className='w-full flex justify-between lg:flex-row flex-col gap-4'>
                        <h1 className='font-inter flex gap-2 py-2 px-4 rounded-lg border-2 border-neutral-800 items-center opacity-90 hover:bg-slate-200 hover:opacity-100 text-sm font-semibold justify-center' onClick={handleGoogleSignUp}> <FaGoogle /> SignUp with Google</h1>
                        <h1 className='font-inter flex gap-2 py-2 px-4 rounded-lg border-2 border-neutral-800 items-center opacity-90 hover:bg-slate-200 hover:opacity-100 text-sm font-semibold justify-center'> <FaFacebookF /> SignUp with Facebook</h1>
                    </div>

                    <Toaster />
                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                            {/* Full Name */}
                            <div className="relative">
                                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Full Name</p>

                                <input
                                    placeholder="John"
                                    type="text"
                                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    {...register('name', {
                                        required: "Name Is Required",
                                        pattern: {
                                            value: /^[a-zA-Z][a-zA-Z0-9_\s]{2,15}$/,
                                            message: 'Invalid name format. It must start with a letter and can contain letters, digits, underscores, and spaces.'
                                        }
                                    })}
                                />
                                {errors.name && <div className='text-red-500'> {errors.name.message} </div>}
                            </div>
                            {/* Email  validation incomplete*/}
                            <div className="relative">
                                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                                <input
                                    placeholder="123@ex.com"
                                    type="text"
                                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    {...register('email', {
                                        required: "Email is Required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                            message: 'Please enter a valid Gmail address (e.g., username@gmail.com).'
                                        }
                                    })}
                                />
                                {errors.email && <div className='text-red-500'> {errors.email.message} </div>}
                            </div>
                            {/* Password */}
                            <div className="relative">
                                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Password</p>
                                <input
                                    placeholder="Password"
                                    type="text"
                                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    {...register('password', {
                                        required: 'Password is required',
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: 'Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (@, $, !, %, *, ?, &).'
                                        }
                                    })}
                                />
                                {errors.password && <div className='text-red-500'> {errors.password.message} </div>}
                            </div>
                            {/* Confirm Password */}
                            <div className="relative">
                                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Confirm Password</p>
                                <input
                                    placeholder="Confirm Password"
                                    type="text"
                                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    {...register('password2', {
                                        required: 'Confirm password is required',
                                        validate: value => value === password.current || 'The passwords do not match'
                                    })}
                                />
                                {errors.password2 && <div className='text-red-500'> {errors.password2.message} </div>}
                            </div>
                            {/* Submit Button */}
                            <div className="relative">
                                <button
                                    type='submit'
                                    className="w-full  pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center flex justify-center text-white bg-secondary_shade rounded-lg transition duration-200 hover:bg-secondary ease "
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <Oval
                                            visible={true}
                                            height="30"
                                            width="40"
                                            color="#FFFFFF"
                                            ariaLabel="oval-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        />
                                    ) : 'Submit'}
                                </button>
                                {/* {backend_error&&<p>{backend_error.message}</p>} */}
                                <h1>heeeh</h1>
                            </div>
                            <p className='mt-2'>Don't have an account?  <span className='text-secondary underline cursor-pointer' onClick={() => navigate('/login')}>Login</span> Now.</p>
                        </div>
                    </form>
                </div>
            </div>
            <div className=' hidden lg:block w-1/2 h-[33rem]'>
                <img src="https://images.unsplash.com/photo-1622448559300-6df8495a1574?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full h-full object-cover' alt="" />
            </div>

        </div>
    );
}

export default Signup;
