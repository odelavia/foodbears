import { combineReducers } from 'redux';
import foodItemReducer from './foodItemReducer';

const RootReducer = combineReducers({
  foodItems: foodItemReducer,
});

export default RootReducer;