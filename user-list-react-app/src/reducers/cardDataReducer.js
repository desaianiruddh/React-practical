const intialData = {
  data: false
}

const cardDataReducer = (state = intialData, action) => {
  const { type, payload } = action
  switch (type) {
    case 'MOUSE_ENTER': {
      return {
        ...state,
        data: payload
      }
    }
    case 'MOUSE_LEAVE': {
      return {
        ...state,
        data: false
      }
    }
    default: return state
  }
}

export default cardDataReducer