import { combineReducers } from 'redux';
import wordReducer from './wordReducer';

const rootReducer = combineReducers({
  слова: wordReducer,
});

export default rootReducer;
