import { put, takeLatest, call } from 'redux-saga/effects';
import { addWordSuccess, addWordFailure, ADD_WORD_REQUEST } from '../actions';

// Функция, которая выполняет добавление слова
function* addWordSaga(action: { type: string, payload: { word: string } }) {
  try {
    // Ваша логика добавления слова
    yield put(addWordSuccess(action.payload.word as string)); // Успешное добавление слова
  } catch (error: any) {
    yield put(addWordFailure(error as string)); // Обработка ошибки
  }
}

function* watchAddWord() {
  yield takeLatest(ADD_WORD_REQUEST, addWordSaga);
}

export default function* wordSaga() {
  yield call(watchAddWord);
  // Другие саги
}