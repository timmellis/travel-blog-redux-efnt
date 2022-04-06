const { ADD_LIKE } = require('../types')

const iState = {
  likes: 0
}

const LikeReducer = (state = iState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return state + 1
    default:
      return { ...state }
  }
}

export default LikeReducer
