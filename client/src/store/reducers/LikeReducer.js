const { ADD_LIKE, GET_LIKES, SAVE_LIKES, GET_LOCATION_DETAILS } = require('../types')

const iState = {
  locationDetails: []
}

const LikeReducer = (state = iState, action) => {

  switch (action.type) {
    case GET_LOCATION_DETAILS:
      return { ...state, locationDetails: action.payload }
    case ADD_LIKE:
      console.log("reducer", action.payload)
      return {...state, locationDetails: {...state.locationDetails, likes: (parseInt(action.payload) + 1)}}
      case SAVE_LIKES:
        return {...state, locationDetails: action.payload}
    default:
      return { ...state }
  }
}

export default LikeReducer
