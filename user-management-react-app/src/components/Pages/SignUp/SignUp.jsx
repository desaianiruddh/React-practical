import React from 'react';

import SignUpForm from '../../SignUpForm/SignUpForm';
import signUpImg from '../../../img/signup.png';
import './signUp.css';

const SignUp = () => {
  return (
    <div
      className={`bg-white mt-4 ${
        window.innerWidth > 1048
          ? 'container ps-5 mt-5'
          : 'container-fluid mx-2'
      }`}
    >
      <div className="row">
        <div className="col-md-4 mt-sm-3">
          <SignUpForm />
        </div>
        <div className="col-md-auto" />
        <div className="col-md-6 ms-5 mt-sm-4">
          <img
            src={signUpImg}
            className={`${
              window.innerWidth < 450 ? 'img-fluid mb-2' : 'signup-img mt-4'
            }`}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
