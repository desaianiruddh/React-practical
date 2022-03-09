import React, { useState } from 'react'

import checkedImg from '../icon/checked.jpg'

const TaskAdder = (props) => {
  //destructing props
  const { index, taskName } = props
  //state for task status
  const [isTaskCompleted, setIsTaskCompleted] = useState(JSON.parse(localStorage.getItem(index)));
  const handleRadioClick = () => {
    setIsTaskCompleted(true);
    localStorage.setItem(index, true);
  }
  const handleImgClick = () => {
    setIsTaskCompleted(false);
    localStorage.removeItem(index);
  }
  return (
    <div className="task d-flex justify-content-between">
      <div className={isTaskCompleted ? 'completed-task' : 'task-name'}>{taskName}</div>
      {
        isTaskCompleted === true ?
          <img
            src={checkedImg}
            alt="radio-icon"
            className='checked-img'
            onClick={handleImgClick}
          />
          :
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