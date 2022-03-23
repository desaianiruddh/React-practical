import React from 'react';
import { useDispatch } from 'react-redux';
import { Lock } from 'react-feather';

import { mouseEnter, mouseLeave } from '../../actions/index.js';

const OwnerProfile = (props) => {
  const dispatch = useDispatch();
  const { empProfileImg, empName, empEmail } = props;
  const isEmpActive = true;
  return (
    <tr>
      <td
        className='d-flex'
        onMouseEnter={() => dispatch(mouseEnter(empProfileImg, empName, empEmail, isEmpActive))}
        onMouseLeave={() => dispatch(mouseLeave())}
      >
        <span className='me-3'>
          <img className='profile-img' src={empProfileImg} alt="owner-profile" />
        </span>
        <span>
          <div className='emp-name'>{empName}</div>
          <div className='emp-mail'>{empEmail}</div>
        </span>
      </td>
      <td className='owner-status'>Active</td>
      <td className='owner-access'>Owner</td>
      <td>
        <Lock
          className='profile-icon'
          onClick={() => alert('You Dont Have Access to Remove Owner')} 
       />
      </td>
    </tr>
  );
}

export default OwnerProfile;
