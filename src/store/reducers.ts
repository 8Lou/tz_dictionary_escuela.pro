import { combineReducers } from 'redux';
   import wordReducer from './reducers/wordReducer'; 
   
   const rootReducer = combineReducers({
     words: wordReducer
     
   });

   export default rootReducer;