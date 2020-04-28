import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import itemsReducer from './itemsReducer'
export default combineReducers({
  itemsReducer,
  cartReducer
})