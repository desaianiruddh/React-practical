import axios from 'axios';

export const fetchUserFromAPI = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const userPage1 = await axios.get('https://reqres.in/api/users?page=1');  
      const userPage2 = await axios.get('https://reqres.in/api/users?page=2');
      dispatch(setDataToState(userPage1.data, userPage2.data));
      dispatch(changePage(1));
    } catch (error) {
      const errMsg = error.message;
      console.log(errMsg);
      dispatch(fetchUserFailed(errMsg));
    }
  };
}

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  };
}

export const fetchUserFailed = (errMsg) => {
  return {
    type: 'FETCH_USER_FAILED',
    payload: errMsg
  };
}

export const setDataToState = (userDataPage1, userDataPage2) => {
  return {
    type: 'SET_DATA_TO_STATE',
    payload: {
      userDataPage1,
      userDataPage2
    }
  };
}

export const changePage = (page) => {
  return {
    type: 'CHANGE_PAGE',
    payload: page
  };
}

export const removeEmployee = (id) => {
  return {
    type: 'REMOVE_EMPLOYEE',
    payload: id
  };
}

export const mouseEnter = (profileImg, empName, empEmail, isEmpActive) => {
  return {
    type: 'MOUSE_ENTER',
    payload: {
      empName: empName,
      empEmail: empEmail,
      profileImg: profileImg,
      empStatus: isEmpActive
    }
  };
}

export const mouseLeave = () => {
  return {
    type: 'MOUSE_LEAVE',
  };
}





