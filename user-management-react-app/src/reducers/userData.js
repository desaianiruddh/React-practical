const intialData = {
  isUserLoggedIn: false,
  userLoginData: {},
};

const userData = (state = intialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SUBMIT_FORM': {
      return {
        ...state,
        isUserLoggedIn: true,
        userLoginData: { ...payload },
      };
    }
    case 'LOG_OUT': {
      return {
        ...state,
        isUserLoggedIn: false,
        userLoginData: {},
      };
    }
    default:
      return state;
  }
};

export default userData;
