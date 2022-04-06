import { AddLike } from '../../services/LikeService'
import { ADD_LIKE } from '../types'

export const AddNewLike = (like) => {
  return async (dispatch) => {
    try {
      const newLike = await AddLike(like)
      dispatch({
        type: ADD_LIKE,
        payload: newLike
      })
    } catch (error) {
      throw error
    }
  }
}
