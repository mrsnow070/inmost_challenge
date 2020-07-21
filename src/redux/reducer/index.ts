import {combineReducers} from 'redux';
import testReducer, {
  moduleName as testModule,
  TestInitState,
} from './testReducer';

export interface AppState {
  [testModule]: TestInitState;
}

const AppReducer = combineReducers<AppState>({
  [testModule]: testReducer,
});

export default AppReducer;
