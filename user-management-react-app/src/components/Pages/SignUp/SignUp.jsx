import React from 'react';

import SignUpForm from '../../SignUpForm/SignUpForm';
import signUpImg from '../../../img/signup.png';
import './signUp.css';

const SignUp = () => {
  return (
    <div className="bg-white container mt-5">
      <div className="signup-page">
        <div className="signup-form mt-sm-3">
          <SignUpForm />
        </div>
        <div className="signup-img ms-2 my-0">
          <img src={signUpImg} className="img-fluid" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
