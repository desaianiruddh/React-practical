import React, { useState } from 'react'

import checkedImg from '../icon/checked.jpg'

const TaskAdder = (props) => {
  const [isTaskCompleted, setIsTaskCompleted] = useState(localStorage.getItem(props.index));
  const handleRadioClick = () => {
    setIsTaskCompleted(true);
    localStorage.setItem(props.index,true);
  }
  const handleImgClick = () => {
    setIsTaskCompleted(false);
    localStorage.removeItem(props.index);
  }
  return (
    <div className="task d-flex justify-content-between">
      <div className={isTaskCompleted ? 'completed-task' : 'task-name'}>{props.taskName}</div>
      {
        isTaskCompleted &&
        <img
          src={checkedImg}
          alt="radio-icon"
          className='checked-img'
          onClick={handleImgClick}
        />
      }
      {
        !isTaskCompleted &&
        <input
          type="radio"
          defaultChecked={false}
          className="disable-radio-btn"
          onChange={handleRadioClick}
        />
      }
    </div>
  )
}

export default TaskAdder