import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import deleteIcon from '../icon/delete.png'
import { mouseEnter, mouseLeave, removeEmployee } from '../../actions/index.js'

const EmployeeList = ({ empId, profileImg, empName, empEmail }) => {
  const [isEmpActive, setIsEmpActive] = useState(true)
  const dispatch = useDispatch()
  const handleOptionChange = (event) => {
    const status = event.target.value
    status === 'inactive' ?
      setIsEmpActive(false) :
      setIsEmpActive(true);
  }
  return (
    <tr>
      <td
        className='d-flex'
        onMouseEnter={() => dispatch(mouseEnter({ profileImg, empName, empEmail, isEmpActive }))}
        onMouseLeave={() => dispatch(mouseLeave())}>
        <span className='profile-img me-3'>
          <img className='profile-img' src={profileImg} alt="owner-profile" />
        </span>
        <span>
          <div className='emp-name'>{empName}</div>
          <div className='emp-mail'>{empEmail}</div>
        </span>
      </td>
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
          onClick={() => dispatch(removeEmployee(empId))} />
      </td>
    </tr>
  )
}

export default EmployeeList