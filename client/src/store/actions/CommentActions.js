import { AddComment } from '../../services/CommentService'
import { CREATE_COMMENT, ADD_COMMENT } from '../types'

// export const CreateNewComment = () => {
//   return async (dispatch) => {
//     try {
//       const comment = await CreateComment(formValue)
//       dispatch({
//         type: CREATE_COMMENT,
//         payload: formValue
//       })
//     } catch (error) {
//       throw error
//     }
//   }
// }

export const CreateNewComment = (formValue) => ({
  type: CREATE_COMMENT,
  payload: formValue
})

export const AddNewComment = (newComment) => {
  return async (dispatch) => {
    try {
      const newCommentToAdd = await AddComment(newComment)
      dispatch({
        type: ADD_COMMENT,
        payload: newCommentToAdd
      })
    } catch (error) {
      throw error
    }
  }
}
