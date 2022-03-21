import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Lock } from 'react-feather';

import deleteIcon from '../icon/delete.png';
import { mouseEnter, mouseLeave, removeEmployee } from '../../actions/index.js';

const EmployeeList = ({ empId, empProfileImg, empName, empEmail }) => {
  const dispatch = useDispatch();
  const [isEmpActive, setIsEmpActive] = useState(true);
  //set employee status active/inactive
  const handleOptionChange = (event) => {
    const status = event.target.value
    status === 'inactive'
      ? setIsEmpActive(false)
      : setIsEmpActive(true);
  }
  return (
    <tr>
      <td
        className='d-flex'
        onMouseEnter={() =>
          dispatch(mouseEnter(empProfileImg, empName, empEmail, isEmpActive))
        }
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
      {
        empId === 1
          ? <>
            <td className='owner-status text-center'>
              Active
            </td>
            <td className='owner-access text-center'>
              Owner
            </td>
            <td>
              <Lock
                className='profile-icon'
                onClick={() => alert('You Dont Have Access to Remove Owner')}
              />
            </td>
          </>
          : <>
            <td>
              <select onChange={handleOptionChange}>
                <option value='active' defaultValue>Active</option>
                <option value='inactive'>Inactive</option>
              </select>
            </td>
            <td>
              <select>
                <option value='manager' defaultValue>Manager</option>
                <option value='read'>Read</option>
              </select>
            </td>
            <td>
              <img
                src={deleteIcon}
                className='profile-icon'
                alt='delete-icon'
                onClick={() => dispatch(removeEmployee(empId))}
              />
            </td>
          </>
      }
    </tr>
  );
}

export default EmployeeList;