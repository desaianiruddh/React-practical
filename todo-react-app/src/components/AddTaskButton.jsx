import React, { useState, useEffect } from 'react'

const AddTaskButton = (props) => {
  //destructing props
  const { taskList, setTaskList } = props;
  //handle task add btn and input text
  const [tastAdder, setTaskAdder] = useState(false);
  const taskAddClicked = () => {
    setTaskAdder(true);
  }
  //state for task add text
  const [taskText, setTaskText] = useState('');
  const taskTextAdder = (e) => {
    setTaskText(e.target.value);
  }
  //add task to tasklist
  const handleKeyPress = (key) => {
    //on pressing Enter
    if (key.keyCode === 13) {
      if (taskText === '') {
        alert('Empty Task');
      }
      else {
        setTaskList((task) => {
          return [...task, taskText]
        })
        setTaskText('');
      }
      setTaskAdder(false);
      console.log('taskList', taskList);
    }
    //on pressing Escape
    else if (key.keyCode === 27) {
      setTaskAdder(false);
      setTaskText('');
    }
  }
  //local storage
  useEffect(() => {
    localStorage.setItem('localTaskList', JSON.stringify(taskList));
  }, [taskList])
  return (
    <div>
      {
        tastAdder === false ?
          <div className="d-flex justify-content-center mt-4">
            <button
              type='button'
              className='btn btn-xl add-button'
              onClick={taskAddClicked}
            ><h3>+</h3></button>
          </div>
          :
          <div className="form-group d-flex justify-content-center ms-4 me-4 mt-1">
            <input
              type="text"
              className="task-input-element"
              placeholder='Enter Your Task Here'
              value={taskText}
              onChange={taskTextAdder}
              onKeyDown={handleKeyPress}
              autoFocus
            />
          </div>
      }
    </div>
  )
}

export default AddTaskButton;