import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import InputField from './InputField';
import InputProfilePhoto from './InputProfilePhoto';
import ValidationObj from '../ValidationObj/ValidationObj';
import { logIn } from '../../actions';

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    phoneNo: '',
    password: '',
    confirmPassword: '',
    profilePhoto: null,
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationObj}
      onSubmit={(values) => {
        values.profilePhoto = URL.createObjectURL(values.profilePhoto);
        dispatch(logIn(values));
        navigate('/home');
        localStorage.setItem(
          'pic',
          JSON.stringify(URL.createObjectURL(values.profilePhoto))
        );
      }}
    >
      {({ values, setFieldValue }) => (
        <div className="ms-sm-4 mt-md-2">
          <div className="signup-header fs-3 fw-bold">Sign Up</div>
          <Form>
            <InputProfilePhoto setFieldValue={setFieldValue} values={values} />
            <InputField label="Name" name="name" type="text" />
            <InputField label="Email" name="email" type="email" />
            <InputField label="Phone No" name="phoneNo" type="number" />
            <InputField label="Password" name="password" type="password" />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button type="submit" className="btn btn-primary me-4 my-4">
              Submit
            </button>
            <button type="reset" className="btn btn-danger">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
