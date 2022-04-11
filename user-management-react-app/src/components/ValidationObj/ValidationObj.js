import * as Yup from 'yup';

const ValidationObj = () => {
  const SUPPORTED_FORMAT = ['image/jpg', 'image/jpeg', 'image/png'];
  return Yup.object({
    name: Yup.string()
      .required('*Name is Required')
      .trim()
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
      .min(15, '*Name must be at least 15 characters'),
    email: Yup.string()
      .trim()
      .email('*Email is Invalid')
      .required('*Email is Required'),
    phoneNo: Yup.string()
      .required('*Phone Number is Required')
      .max(13, 'Mobile No. should be 10 digit')
      .min(10, 'Mobile No. should be 10 digit')
      .matches(
        /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/,
        'Only Indian Mobile number is Valid'
      ),
    password: Yup.string()
      .min(8, '*Password must be at least 8 characters')
      .required('*Password is Required')
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
        'Must Have Uppercase, Lowercase, Number and Punctuation Mark'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], '*Password Must Match')
      .required('*Confirm Password is Required'),
    profilePhoto: Yup.mixed()
      .nullable()
      .required('*Profile Photo is Required')
      .test(
        'FILE_SIZE',
        'Uploaded Photo size should lesser than 2 MB',
        (file) => !file || (file && file.size <= 2 * 1024 * 1024)
      )
      .test(
        'FILE_FORMAT',
        'Uploaded file has unsupported format.',
        (file) => !file || (file && SUPPORTED_FORMAT.includes(file?.type))
      ),
  });
};

export default ValidationObj;
