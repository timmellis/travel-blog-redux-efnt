import {
  GetLocations,
  GetLocationDetails,
  GetLocationComments,
  GetAllComments,
  AddLocation
} from '../../services/LocationService'
import {
  GET_LOCATIONS,
  GET_LOCATION_DETAILS,
  GET_COMMENTS,
  CREATE_NEW_LOCATION_NAME,
  CREATE_NEW_LOCATION_STATE,
  CREATE_NEW_LOCATION_DETAILS,
  CREATE_NEW_LOCATION_IMAGE,
  ADD_LOCATION
} from '../types'

export const LoadLocations = () => {
  return async (dispatch) => {
    try {
      console.log('loadLocations')
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

export const LoadComments = (id) => {
  return async (dispatch) => {
    try {
      const locationComments = await GetAllComments(id)
      dispatch({
        type: GET_COMMENTS,
        payload: locationComments
      })
    } catch (error) {
      throw error
    }
  }
}

export const CreateNewLocationName = (formValue) => ({
  type: CREATE_NEW_LOCATION_NAME,
  payload: formValue
})

export const CreateNewLocationState = (formValue) => ({
  type: CREATE_NEW_LOCATION_STATE,
  payload: formValue
})

export const CreateNewLocationDetails = (formValue) => ({
  type: CREATE_NEW_LOCATION_DETAILS,
  payload: formValue
})

export const CreateNewLocationImage = (formValue) => ({
  type: CREATE_NEW_LOCATION_IMAGE,
  payload: formValue
})

export const AddNewLocation = (newLocation) => {
  return async (dispatch) => {
    try {
      const newLocationToAdd = await AddLocation(newLocation)
      dispatch({
        type: ADD_LOCATION,
        payload: newLocationToAdd
      })
    } catch (error) {
      throw error
    }
  }
}
