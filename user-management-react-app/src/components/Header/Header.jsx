import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from '../../actions';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="header bg-white">
      <div className="d-flex justify-content-between px-5">
        <div className="nav-text my-1 fw-bold">Welcome to Home Page</div>
        <button
          type="button"
          className="btn btn-danger my-1 fw-bold nav-btn"
          onClick={() => {
            dispatch(logOut());
            navigate('/signup');
          }}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Header;
