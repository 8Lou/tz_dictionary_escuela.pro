import { all } from 'redux-saga/effects';
import wordSagas from './addWordSaga'; // Замените на имя файла с вашими сагами для слов

export default function* rootSaga() {
  yield all([
    wordSagas()
    // Другие саги
  ]);
}