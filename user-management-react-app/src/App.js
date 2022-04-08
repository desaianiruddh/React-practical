import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Pages/Home/Home';
import SignUp from './components/Pages/SignUp/SignUp';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import PublicRoute from './Route/PublicRoute';
import ProtectedRoute from './Route/ProtectedRoute';
import { useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector((state) => state.userData.isUserLoggedIn);
  useEffect(() => {
    !isUserLoggedIn && navigate('/signup');
  }, [isUserLoggedIn, navigate]);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
