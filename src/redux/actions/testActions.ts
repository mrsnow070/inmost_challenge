import {COUNT_ADD, COUNT_SUB} from '../reducer/testReducer';

export const addToCount = () => {
  return {
    type: COUNT_ADD,
  };
};

export const subFromCount = () => {
  return {
    type: COUNT_SUB,
  };
};

export const startFetch = () => {
  return {
    type: 'START_FETCH',
  };
};
