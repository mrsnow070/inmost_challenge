import test from './testSaga';
import {all, fork} from 'redux-saga/effects';

export default function* () {
  yield all([fork(test)]);
}
