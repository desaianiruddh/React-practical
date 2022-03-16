const initialData = {
  empListData: []
}

const empListReducer = (state = initialData, action) => {
  const { type, payload } = action
  switch (type) {
    case 'FETCH_DATA': {
      return {
        ...state,
        empListData: [...state.empListData, ...payload]
      }
    }
    case 'REMOVE_EMPLOYEE':
      return {
        ...state,
        empListData: state.empListData.filter((empInfo) => payload !== empInfo.empId)
      }

    default: return state;
  }
}

export default empListReducer;