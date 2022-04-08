import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = () => {
  const isUserLoggedIn = useSelector((state) => state.userData.isUserLoggedIn);
  return isUserLoggedIn ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
