import test from './testSaga';
import categories from './categoriesSaga';
import {all, fork} from 'redux-saga/effects';

export default function* () {
  yield all([fork(test), fork(categories)]);
}
