import {combineReducers} from 'redux';

import categoriesReducer, {
  moduleName as categoriesModule,
  CategoriesInitStateType,
} from './categoryReducer';

export interface AppState {
  [categoriesModule]: CategoriesInitStateType;
}

const AppReducer = combineReducers<AppState>({
  [categoriesModule]: categoriesReducer,
});

export default AppReducer;
