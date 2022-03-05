import React, { useState } from 'react';

import './css/App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskButton from './components/AddTaskButton';
import EmptyTask from './components/EmptyTask';

const App = () => {
  let currentDate = new Date().getDate().toString();
  let localDate = localStorage.getItem('todayDate');
  //task clean on localstorage when date changed
  if (localDate !== currentDate) {
    localStorage.clear();
  }
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="App">
      <div className="pt-3 d-flex justify-content-evenly">
        <Header />
      </div>
      <div className="task-list ms-4 me-3 pe-1">
        {taskList[0] != null ?
          <TaskList taskList={taskList} /> : <EmptyTask />
        }
      </div>
      <div>
        <AddTaskButton setTaskList={setTaskList} />
      </div>
    </div>
  );
}
export default App;