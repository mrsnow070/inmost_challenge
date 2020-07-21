import {combineReducers} from 'redux';
import testReducer, {
  moduleName as testModule,
  TestInitState,
} from './testReducer';
import categoriesReducer, {
  moduleName as categoriesModule,
  CategoriesInitStateType,
} from './categoryReducer';

export interface AppState {
  [testModule]: TestInitState;
  [categoriesModule]: CategoriesInitStateType;
}

const AppReducer = combineReducers<AppState>({
  [testModule]: testReducer,
  [categoriesModule]: categoriesReducer,
});

export default AppReducer;
