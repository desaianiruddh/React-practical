import React, { useState } from 'react'

import checkedImg from '../icon/checked.jpg'

const AddNewTask = (props) => {
  const {taskName} = props
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  return (
    <div className="task d-flex justify-content-between">
      <div className={isTaskCompleted ? 'completed-task' : 'task-name'}>{taskName}</div>
      {
        isTaskCompleted === true ?
        <img
          src={checkedImg}
          alt="radio-icon"
          className='checked-img'
          onClick={() => setIsTaskCompleted(false)}
        />
        :
        <input
          type="radio"
          defaultChecked={false}
          className="disable-radio-btn"
          onChange={() => setIsTaskCompleted(true)}
        />
      }
    </div>
  )
}

export default AddNewTask