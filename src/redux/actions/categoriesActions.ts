import {
  BOOTSTRAP_REQUEST,
  BOOTSTRAP_REQUEST_SUCCESS,
  GET_NEXT_PAGE,
  SET_SELECTED,
} from '../reducer/categoryReducer';

export const bootstrapRequest = () => {
  return {
    type: BOOTSTRAP_REQUEST,
  };
};

export const bootstrapSuccess = (data: any) => {
  return {
    type: BOOTSTRAP_REQUEST_SUCCESS,
    payload: data,
  };
};

export const getNextPage = () => {
  return {
    type: GET_NEXT_PAGE,
  };
};

export const setSelected = (payload: any) => {
  return {
    type: SET_SELECTED,
    payload,
  };
};
