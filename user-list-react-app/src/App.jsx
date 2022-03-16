import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import './components/App.css';
import ProfileList from './components/ProfileList/ProfileList';
import { fetchData } from './actions/index.js';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])
  return (
    <div className="App container">
      <ProfileList />
    </div>
  );
}

export default App;
