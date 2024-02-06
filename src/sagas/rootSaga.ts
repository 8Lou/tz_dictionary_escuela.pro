import { all } from 'redux-saga/effects';
import wordListsSaga from './wordListsSaga'; 

export default function* rootSaga() {
  yield all([
    wordListsSaga(),
    // Другие саги приложения
  ]);
}