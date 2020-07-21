import {AppState} from '../reducer/';

export const moduleName = 'test';
export const COUNT_ADD = `${moduleName}/COUNT_ADD`;
export const COUNT_SUB = `${moduleName}/COUNT_SUB`;

export interface TestInitState {
  count: number;
}

type Action = {
  type: string;
  payload?: any;
};

const initState: TestInitState = {
  count: 0,
};

export default (state = initState, action: Action) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {type, payload} = action;
  switch (type) {
    case COUNT_ADD:
      return {...state, count: state.count + 1};

    case COUNT_SUB:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

//selectors
export const getState = (state: AppState): TestInitState => state[moduleName];
export const getCount = (state: AppState): number => getState(state).count;
