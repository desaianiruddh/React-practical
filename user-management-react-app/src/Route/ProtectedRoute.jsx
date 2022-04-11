import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const isUserLoggedIn = useSelector((state) => state.userData.isUserLoggedIn);
  return isUserLoggedIn ? <Outlet /> : <Navigate to="/signup" />;
};

export default ProtectedRoute;
