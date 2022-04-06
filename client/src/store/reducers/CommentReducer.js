const { GET_COMMENTS, ADD_COMMENT, CREATE_COMMENT } = require('../types')

const iState = {
  comments: []
}

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload }
    case CREATE_COMMENT:
      return { ...state, newComment: action.payload }
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] }
    default:
      return { ...state }
  }
}

export default CommentReducer
