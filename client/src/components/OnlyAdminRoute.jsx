import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutSucess } from '../../configs/redux/user/userSlice';

function OnlyAdminRoute() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  

  const checkStillLogin=async()=>{
    const res=await fetch(` api/auth/stillogin`,{
      method:'POST',


      credentials:'include',
    })
    const data=await res.json();
    if(res.ok){
     console.log(res)
    }
    if(!res.ok){
      
      setstillValidUser(false)
      dispatch(signOutSucess())

     
    }
  }

useEffect(()=>{
  


  checkStillLogin()
},[])


if(user && user.userType === 'admin'){
  return (
    <Outlet/>
  )
}
  return <Navigate to='/' />;
}

export default OnlyAdminRoute;
