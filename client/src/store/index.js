import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import LocationReducer from './reducers/LocationReducer'
import CommentReducer from './reducers/CommentReducer'
import LocationDetailReducer from './reducers/LocationDetailReducer'
import LikeReducer from './reducers/LikeReducer'


const store = createStore(
  combineReducers({
    locationState: LocationReducer,
    commentState: CommentReducer,
    locationDetailsState: LocationDetailReducer,
    likeState: LikeReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
