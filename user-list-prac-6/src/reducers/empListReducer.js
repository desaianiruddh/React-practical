const initialData = {
  userDataPage1: [],
  userDataPage2: [],
  empListData: [],
};

const empListReducer = (state = initialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_DATA_TO_STATE': {
      return {
        ...state,
        userDataPage1: [...state.userDataPage1, ...payload.userDataPage1.data],
        userDataPage2: [...state.userDataPage2, ...payload.userDataPage2.data],
      };
    }
    case 'CHANGE_PAGE': {
      return payload === 1
        ? {
            ...state,
            empListData: state.userDataPage1,
          }
        : {
            ...state,
            empListData: state.userDataPage2,
          };
    }
    case 'REMOVE_EMPLOYEE':
      return {
        ...state,
        empListData: state.empListData.filter(
          (empInfo) => payload !== empInfo.id
        ),
      };
    default:
      return state;
  }
};

export default empListReducer;
