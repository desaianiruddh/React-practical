import React from 'react';

import './css/App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskButton from './components/AddTaskButton';

const App = () => {
  return (
    <div className="App">
      <div className="pt-3 d-flex justify-content-evenly">
        <Header />
      </div>
      <div className="task-list ms-4 me-3 pe-1">
        <TaskList />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <AddTaskButton />
      </div>
    </div>
  );
}

export default App;
