import React from 'react';

import SignUpForm from '../../SignUpForm/SignUpForm';
import signUpImg from '../../../img/signup.png';
import './signUp.css';

const SignUp = () => {
  return (
    <div className="container bg-white mt-4">
      <div className="row">
        <div className="col-md-4">
          <SignUpForm />
        </div>
        <div className="col-md-auto" />
        <div className="col-md-6 ms-5 mt-4">
          <img
            src={signUpImg}
            className="signup-img img-fluid mb-2"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
