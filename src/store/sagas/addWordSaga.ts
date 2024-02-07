import { put, takeLatest, call } from 'redux-saga/effects';
import { addWordSuccess, addWordFailure, ADD_WORD_REQUEST } from '../actions';

function* addWordSaga(action: { type: string, payload: { word: string } }) {
  try {
    yield put(addWordSuccess(action.payload.word as string)); 
  } catch (error: any) {
    yield put(addWordFailure(error as string));
  }
}

function* watchAddWord() {
  yield takeLatest(ADD_WORD_REQUEST, addWordSaga);
}

export default function* wordSaga() {
  yield call(watchAddWord);
}