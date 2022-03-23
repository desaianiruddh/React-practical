import profile from '../components/profiles.json';

export const fetchData = () => {
  return {
    type: 'FETCH_DATA',
    payload: profile
  };
}

export const removeEmployee = (id) => {
  return {
    type: 'REMOVE_EMPLOYEE',
    payload: id
  };
}

export const mouseEnter = (empProfileImg, empName, empEmail, isEmpActive) => {
  return {
    type: 'MOUSE_ENTER',
    payload: {
      empName: empName,
      empEmail: empEmail,
      empProfileImg: empProfileImg,
      empStatus: isEmpActive
    }
  };
}

export const mouseLeave = () => {
  return {
    type: 'MOUSE_LEAVE',
  };
}