import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changePage } from '../../actions';

const ChangePage = () => {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);
  //set active page and dispatch action
  const setPage = (page) => {
    dispatch(changePage(page));
    setActivePage(page);
  }
  return (
    <nav className='mt-1'>
      <ul className="pagination position-absolute start-50">
        <li
          className={
            activePage === 1
              ? 'page-item active'
              : 'page-item'
          }
          onClick={() => setPage(1)}
        >
          <span className="page-link">1</span>
        </li>
        <li
          className={
            activePage === 2
              ? 'page-item active'
              : 'page-item'
          }
          onClick={() => setPage(2)}
        >
          <span className="page-link">2</span>
        </li>
      </ul>
    </nav>
  );
}

export default ChangePage;