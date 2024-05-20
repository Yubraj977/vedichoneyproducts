import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function SecureRoutes() {
    const user = useSelector((state) => state.user.currentUser)
    return user ? (
        <Outlet />
    ) :<Navigate to={'/login'}/>
}

export default SecureRoutes