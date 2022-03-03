import React from 'react';
import './css/App.css';
import CurrentDate from './components/CurrentDate';
import TaskList from './components/TaskList';
import defaultTask from './components/DefaultTask';

const App = () => {
  //date object
  const dateObj = new Date();
  return (
    <div className="App">
      <div className="current-date pt-3 d-flex justify-content-evenly">
        <CurrentDate dateObj={dateObj}/>
      </div>
      <div className="task-list ms-4 me-3 pe-1">
        {
          defaultTask.map((val) => {
            return (
              <TaskList 
                key={val.id}
                taskName={val.taskName}
              />
            )
          })
        }
      </div>
      <div className="add-button d-flex justify-content-center mt-4">
        <button className='btn btn-xl'><h3>+</h3></button>
        
      </div>
    </div>
  );
}

export default App;
