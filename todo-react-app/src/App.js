import React from 'react';

import './css/App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskbutton from './components/AddTaskbutton';

const App = () => {
  return (
    <div className="App">
      <div className="current-date pt-3 d-flex justify-content-evenly">
        <Header />
      </div>
      <div className="task-list ms-4 me-3 pe-1">
        <TaskList />
      </div>
      <div className="add-button d-flex justify-content-center mt-4">
        <AddTaskbutton />
      </div>
    </div>
  );
}

export default App;
