const { GET_LOCATIONS, ADD_LOCATION, CREATE_LOCATION } = require('../types')

const iState = {
  locations: []
}

const LocationReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return { ...state, locations: action.payload }
    case CREATE_LOCATION:
      return { ...state, newLocation: action.payload }
    case ADD_LOCATION:
      return { ...state, locations: [...state.locations, action.payload] }
    default:
      return { ...state }
  }
}

export default LocationReducer
