import { AddLike } from '../../services/LikeService'
import { GetLocationDetails } from '../../services/LocationService'
import { ADD_LIKE, GET_LOCATION_DETAILS, SAVE_LIKES } from '../types'

export const AddNewLike = (id, num) => {
  return async (dispatch) => {
    try {
      const newLike = num
      dispatch({
        type: ADD_LIKE,
        payload: newLike
      })
    } catch (error) {
      throw error
    }
  }
}
export const SaveLikes = (id, obj) => {
  return async (dispatch) => {
    try {
      console.log('SAVE THE THING', id, obj)
      const saveLike = await AddLike(id, obj)
      dispatch({
        type: SAVE_LIKES,
        payload: saveLike
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadLocationDetails = (id) => {
  return async (dispatch) => {
    try {
      const locationDetails = await GetLocationDetails(id)
      dispatch({
        type: GET_LOCATION_DETAILS,
        payload: locationDetails
      })
    } catch (error) {
      throw error
    }
  }
}
