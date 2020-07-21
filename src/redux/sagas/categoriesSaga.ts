import {takeLatest, fork, all, select, put} from 'redux-saga/effects';
import * as categoriesActions from '../actions/categoriesActions';
import {
  BOOTSTRAP_REQUEST,
  BOOTSTRAP_REQUEST_SUCCESS,
  BOOTSTRAP_REQUEST_FAIL,
  GET_NEXT_PAGE,
  SET_NEXT_PAGE,
  getSelectedCategories,
  getPage,
  SET_SELECTED,
  RESET_DRINKS_SECTIONS,
} from '../reducer/categoryReducer';

import axios from 'axios';
import {Category} from '../types';

function* bootstrapRequest() {
  try {
    let {
      data: {drinks: data},
    } = yield axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    );

    yield put(categoriesActions.bootstrapSuccess(data));
  } catch (err) {
    put({type: BOOTSTRAP_REQUEST_FAIL});
  }
}

function* requestNextPage() {
  const selected: Category[] = yield select((state) =>
    getSelectedCategories(state),
  );

  const lastPage: number = yield select((state) => getPage(state));

  if (selected.length > 0) {
    const {strCategory} = selected[lastPage];
    try {
      const {data} = yield axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`,
      );

      yield put({
        type: SET_NEXT_PAGE,
        payload: {strCategory, drinks: data.drinks},
      });
    } catch (err) {
      put({type: BOOTSTRAP_REQUEST_FAIL});
    }
  }
}

function* applySelection() {
  yield put({type: RESET_DRINKS_SECTIONS});
  yield put({type: GET_NEXT_PAGE});
}

function* bootstrapSuccess() {
  yield put({type: GET_NEXT_PAGE});
}

function* bootstrapRequestSaga() {
  yield takeLatest(BOOTSTRAP_REQUEST, bootstrapRequest);
}

function* bootstrapSuccessSaga() {
  yield takeLatest(BOOTSTRAP_REQUEST_SUCCESS, bootstrapSuccess);
}

function* requestSelectedCategoriesSaga() {
  yield takeLatest(GET_NEXT_PAGE, requestNextPage);
}

function* applySelectedCategoriesSage() {
  yield takeLatest(SET_SELECTED, applySelection);
}

export default function* () {
  yield all([
    fork(bootstrapRequestSaga),
    fork(bootstrapSuccessSaga),
    fork(requestSelectedCategoriesSaga),
    fork(applySelectedCategoriesSage),
  ]);
}
