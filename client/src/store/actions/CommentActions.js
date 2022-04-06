import { AddComment, GetComments } from '../../services/CommentService'
import {
  CREATE_COMMENT,
  CREATE_COMMENT_NAME,
  ADD_COMMENT,
  GET_COMMENTS
} from '../types'

export const CreateNewCommentName = (formValue) => ({
  type: CREATE_COMMENT_NAME,
  payload: formValue
})

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

export const GetAllComments = () => {
  return async (dispatch) => {
    try {
      const comments = await GetComments()
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}
