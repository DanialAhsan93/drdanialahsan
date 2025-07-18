import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const {currentUser} = useSelector((state) => state.user);
  console.log(currentUser)
  return currentUser ? <Outlet /> : <Navigate to={'/signin'} />
}

export default PrivateRoute