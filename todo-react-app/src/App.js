import React, { useState } from 'react';

import './css/App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskButton from './components/AddTaskButton';
import EmptyTask from './components/EmptyTask';

//get taskList from local Storage
const getLocalTask = () => {
  let localTaskList = localStorage.getItem('localTaskList');
  if (localTaskList) {
    return JSON.parse(localTaskList);
  }
  else {
    return [];
  }
}
const App = () => {
  let currentDate = new Date().getDate().toString();
  let localDate = localStorage.getItem('todayDate');
  //task clean on localstorage when date changed
  if (localDate !== currentDate) {
    localStorage.clear();
  }
  const [taskList, setTaskList] = useState(getLocalTask());
  return (
    <div className="App">
      <div className="pt-3 d-flex justify-content-evenly">
        <Header />
      </div>
      <div className="task-list ms-4 me-3 pe-1">
        {taskList.length > 0 ?
          <TaskList taskList={taskList} /> : <EmptyTask />
        }
      </div>
      <div>
        <AddTaskButton taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}
export default App;