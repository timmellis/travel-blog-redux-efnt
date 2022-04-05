import {
  GetLocations,
  GetLocationComments
} from '../../services/LocationService'
import { GET_LOCATIONS, GET_COMMENTS } from '../types'

export const LoadLocations = () => {
  return async (dispatch) => {
    try {
      const locations = await GetLocations()
      dispatch({
        type: GET_LOCATIONS,
        payload: locations
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadLocationComments = (id) => {
  return async (dispatch) => {
    try {
      const locationComments = await GetLocationComments(id)
      dispatch({
        type: GET_COMMENTS,
        payload: locationComments
      })
    } catch (error) {
      throw error
    }
  }
}
