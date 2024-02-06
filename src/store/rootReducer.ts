import { combineReducers } from 'redux';
import wordListsSlice from './wordListsSlice'; 

const rootReducer = combineReducers({
  wordLists: wordListsSlice 
  
});

export type RootState = ReturnType<typeof rootReducer>; // Создание типа RootState на основе корневого редюсера
export default rootReducer;