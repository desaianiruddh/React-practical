import React, { useRef, useState } from 'react';
import { ErrorMessage } from 'formik';

const InputProfilePhoto = ({ values, setFieldValue }) => {
  const [isImgUploaded, setIsImgUploaded] = useState(false);
  const profileImgRef = useRef(null);
  return (
    <div className="mb-3">
      <input
        label="+photo"
        name="profilePhoto"
        accept={['image/jpg', 'image/jpeg', 'image/png']}
        ref={profileImgRef}
        type="file"
        onChange={(e) => {
          setFieldValue('profilePhoto', e.target.files[0]);
          setIsImgUploaded(e.target.files[0]);
        }}
        hidden
      />
      {isImgUploaded ? (
        <div className="text-center row">
          <span className="text-truncate col-9">
            Uploaded file:- {isImgUploaded.name}{' '}
          </span>
          <span
            className="ms-1 col-2 text-danger"
            onClick={() => {
              setFieldValue('profilePhoto', null);
              setIsImgUploaded(false);
            }}
          >
            Remove
          </span>
        </div>
      ) : (
        <div
          className="text-center"
          onClick={() => profileImgRef.current.click()}
        >
          photo+
        </div>
      )}

      <ErrorMessage name="profilePhoto" component="div" className="error" />
    </div>
  );
};

export default InputProfilePhoto;
