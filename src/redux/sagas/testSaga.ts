import {takeLatest, fork, all, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

function* fetchData() {
  const {data} = yield axios.get(
    'https://jsonplaceholder.typicode.com/posts/1',
  );

  console.log(data, 'responce');
}

function* logCount() {
  yield takeEvery('test/COUNT_ADD', (action) =>
    console.log('logCount', action.type),
  );
}

function* fetch() {
  yield takeLatest('START_FETCH', fetchData);
}

export default function* () {
  yield all([fork(fetch)]);
}
