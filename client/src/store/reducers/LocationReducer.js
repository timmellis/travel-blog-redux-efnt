const {
  GET_LOCATIONS,
  ADD_LOCATION,
  CREATE_NEW_LOCATION_NAME,
  CREATE_NEW_LOCATION_STATE,
  CREATE_NEW_LOCATION_DETAILS,
  CREATE_NEW_LOCATION_IMAGE
} = require('../types')

const iState = {
  locations: []
}

const LocationReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return { ...state, locations: action.payload }
    case CREATE_NEW_LOCATION_NAME:
      return { ...state, newLocationName: action.payload }
    case CREATE_NEW_LOCATION_STATE:
      return { ...state, newLocationState: action.payload }
    case CREATE_NEW_LOCATION_DETAILS:
      return { ...state, newLocationDetails: action.payload }
    case CREATE_NEW_LOCATION_IMAGE:
      return { ...state, newLocationImage: action.payload }
    case ADD_LOCATION:
      return { ...state, locations: [...state.locations, action.payload] }
    default:
      return { ...state }
  }
}

export default LocationReducer
