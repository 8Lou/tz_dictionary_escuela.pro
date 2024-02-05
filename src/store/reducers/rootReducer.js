import { combineReducers } from 'redux';
import wordReducer from './wordReducer';
import другойРедюсер from './другойРедюсер'; // Поменяйте на реальное имя вашего файла другого редюсера

const rootReducer = combineReducers({
  слова: wordReducer,
  другое: другойРедюсер
});

export default rootReducer;
