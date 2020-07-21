import {AppState} from '../reducer/';
import {Category, Action, DrinkType} from '../types';

export const moduleName = 'categories';
export const BOOTSTRAP_REQUEST = `${moduleName}/BOOTSTRAP_REQUEST`;
export const BOOTSTRAP_REQUEST_SUCCESS = `${moduleName}/BOOTSTRAP_REQUEST_SUCCESS`;
export const BOOTSTRAP_REQUEST_FAIL = `${moduleName}/BOOTSTRAP_REQUEST_FAIL`;
export const SET_SELECTED = `${moduleName}/SET_SELECTED`;
export const SET_NEXT_PAGE = `${moduleName}/SET_NEXT_PAGE`;
export const GET_NEXT_PAGE = `${moduleName}/GET_NEXT_PAGE`;

export type CategoriesInitStateType = {
  categories: Category[][];
  selected: Category[][];
  page: number;
  drinkSections: {strCategory: string; drinks: DrinkType[]}[];
};

const initState: CategoriesInitStateType = {
  categories: [],
  selected: [],
  page: -1,
  drinkSections: [],
};

export default (state = initState, action: Action) => {
  const {type, payload} = action;

  switch (type) {
    case BOOTSTRAP_REQUEST:
      return state;

    case BOOTSTRAP_REQUEST_SUCCESS:
      return {...state, categories: payload, selected: payload};

    case BOOTSTRAP_REQUEST_FAIL:
      return state;

    case GET_NEXT_PAGE:
      return {...state, page: state.page + 1};

    case SET_NEXT_PAGE:
      return {
        ...state,
        drinkSections: state.drinkSections.concat(payload),
      };

    default:
      return state;
  }
};

//selectors
export const getState = (state: AppState): CategoriesInitStateType =>
  state[moduleName];

export const getSelectedCategories = (state: AppState): Category[][] =>
  getState(state).selected;

export const getPage = (state: AppState): number => getState(state).page;

export const getDrinkSectionsLength = (state: AppState): number =>
  getState(state).drinkSections.length;

export const isIncrementAllowed = (state: AppState): boolean => {
  return getPage(state) < getSelectedCategories(state).length - 1;
};

export const getDrinkSections = (state: AppState): any =>
  getState(state).drinkSections;
