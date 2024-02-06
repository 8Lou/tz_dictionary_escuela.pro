import { call, put, takeEvery } from 'redux-saga/effects';
import { 
//   ADD_WORDLIST, 
//   WordListActionTypes, 
  addWordList
} from '../store/wordListsSlice'; 

// Имитация данных, получаемых из API
const exampleWordLists = [
  { id: 3, title: 'Example', words: ['example1', 'example2'] }
];

// Функция-заглушка, имитирующая асинхронный запрос к API
function apiCallToGetWordLists() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(exampleWordLists);
    }, 1000);
  });
}

function* fetchWordLists(): Generator<any, void, any> {
  try {
    const wordLists = yield call(apiCallToGetWordLists); 
    yield put(addWordList(wordLists)); 
  } catch (error: any) { 
    console.log(error);
  }
}

function* watchFetchWordLists() {
  yield takeEvery('wordLists/fetchWordLists', fetchWordLists); 
}

export default function* wordListsSaga() {
  yield watchFetchWordLists(); 
}