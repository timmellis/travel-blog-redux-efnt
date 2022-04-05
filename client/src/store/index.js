import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import LocationReducer from './reducers/LocationReducer'
import CommentReducer from './reducers/CommentReducer'

const store = createStore(
  combineReducers({
    locationState: LocationReducer,
    commentState: CommentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
