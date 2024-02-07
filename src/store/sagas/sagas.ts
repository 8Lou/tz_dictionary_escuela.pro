import { all } from 'redux-saga/effects';
import wordSagas from './addWordSaga';

export default function* rootSaga() {
  yield all([
    wordSagas()
  ]);
}