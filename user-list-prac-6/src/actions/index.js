import axios from 'axios';

export const fetchUserFromAPI = (pageNumber) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const userListData = await axios.get(
        `https://reqres.in/api/users?page=${pageNumber}`
      );
      dispatch(fetchUserSuccess(userListData.data));
    } catch (error) {
      const errMsg = error.message;
      dispatch(fetchUserFailed(errMsg));
    }
  };
};

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST',
  };
};

export const fetchUserFailed = (errMsg) => {
  return {
    type: 'FETCH_USER_FAILED',
    payload: errMsg,
  };
};

export const fetchUserSuccess = (userListData) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: {
      userListData,
    },
  };
};
export const removeEmployee = (id) => {
  return {
    type: 'REMOVE_EMPLOYEE',
    payload: id,
  };
};

export const mouseEnter = (profileImg, empName, empEmail, isEmpActive) => {
  return {
    type: 'MOUSE_ENTER',
    payload: {
      empName: empName,
      empEmail: empEmail,
      profileImg: profileImg,
      empStatus: isEmpActive,
    },
  };
};

export const mouseLeave = () => {
  return {
    type: 'MOUSE_LEAVE',
  };
};
