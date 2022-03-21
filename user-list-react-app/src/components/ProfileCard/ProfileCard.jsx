import React from 'react'
import { ProgressBar } from 'react-bootstrap';

import './profileCard.css';

const ProfileCard = (props) => {
  const { empData: { empProfileImg, empName, empEmail, empStatus } } = props;
  let reviewClick = Math.floor((Math.random() * (0.5) * 10000));
  return (
    <div className='profile-card bg-white'>
      <div className='img-and-info'>
        <div className='mb-2 text-center'>
          <img className='emp-card-img' src={empProfileImg} alt="owner" />
        </div>
        <div>
          <div className='text-center emp-name'>
            {empName}
            <span
              className={empStatus ? "active-dot ms-1 mb-2" : "inactive-dot ms-1 mb-2"}
            >
            </span>
          </div>
          <div className='text-center emp-mail'> {empEmail} </div>
          <div className='mb-3 text-center emp-name'> Your Plan: Standard </div>
        </div>
      </div>
      <div className='mb-2 text-center'>
        <button
          type='button'
          className={empStatus ? 'btn btn-warning' : 'btn btn-secondary'}
        >
          {empStatus ? 'Active User' : 'Inactive User'}
        </button>
      </div>
      <div className='ms-4 mb-2 emp-name'>
        Plan Uses
      </div>
      <ProgressBar
        className='ms-3 me-3'
        variant="warning"
        now={reviewClick * 100 / (reviewClick + 5000)}
      />
      <div className='d-flex p-3'>
        <span className='border-end p-3'>
          <div className='click-review'>{reviewClick}</div>
          <div className='emp-mail'>click reviewed</div>
        </span>
        <span className='p-3'>
          <div className='click-review'>{reviewClick + 5000}</div>
          <div className='emp-mail'>Monthly click</div>
        </span>
      </div>
    </div>
  );
}

export default ProfileCard;
