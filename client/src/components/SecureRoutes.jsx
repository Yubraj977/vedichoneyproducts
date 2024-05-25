import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutSucess } from '../../configs/redux/user/userSlice';

function SecureRoutes() {
  const dispatch = useDispatch();
  const [isValidateUser, setIsValidateUser] = useState(null); // null indicates loading
  const user = useSelector((state) => state.user.currentUser);
console.log(user);
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch('api/account/verify-token/');
        const data = await response.json();
        console.log(`Token verification response: ${data.success}`);
        if (data.success) {
          setIsValidateUser(true);
        } else {
          setIsValidateUser(false);
          dispatch(signOutSuccess());
        }
      } catch (err) {
        console.error(`Error verifying token: ${err}`);
        setIsValidateUser(false);
        dispatch(signOutSuccess());
      }
    };

    verifyToken();
  }, [dispatch]);

  useEffect(() => {
    console.log(`isValidateUser state: ${isValidateUser}`);
  }, [isValidateUser]);



  if (isValidateUser === null) {
    return <div>Loading...</div>; // Loading state while validation is in progress
  }

  if (user && isValidateUser) {
    return <Outlet />;
  }
  dispatch(signOutSucess())

  return <Navigate to='/login' />;
}

export default SecureRoutes;
