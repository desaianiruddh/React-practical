/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react'
import checkedImg from '../icon/checked.jpg'

const TaskList = (props) => {
  const [taskDisable, setTaskDisable] = useState(false);
  return (
    <>
      {
        taskDisable &&
				<div className="task d-flex justify-content-between">
				  <div className="completed-task">{props.taskName}</div>
				  <img 
						src={checkedImg} 
						alt="radio-icon" 
						className='checked-img' 
						onClick={()=>setTaskDisable(false)}
					/>
				</div>
      }
      {
        !taskDisable &&
				<div className="task d-flex justify-content-between">
				  <div className="task-name">{props.taskName}</div>
				  <input
				    type="radio"
				    defaultChecked={false}
				    className="disable-radio-btn"
				    onChange={() => setTaskDisable(true)}
				  />
				</div>
      }

    </>
  )
}

export default TaskList