import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Pages/Home/Home';
import SignUp from './components/Pages/SignUp/SignUp';

function App() {
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector((state) => state.userData.isUserLoggedIn);
  useEffect(() => {
    isUserLoggedIn ? navigate('/home') : navigate('/signup');
  }, [isUserLoggedIn, navigate]);
  return (
    <div className="app">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
