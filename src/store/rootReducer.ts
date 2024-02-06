import { combineReducers } from 'redux';
import wordListsSlice from './wordListsSlice'; 

const rootReducer = combineReducers({
  wordLists: wordListsSlice 
  
});

export default rootReducer;