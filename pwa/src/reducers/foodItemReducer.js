import { GET_CATEGORIES, SET_CATEGORY_ITEMS } from '../actions/types';

const initialState = {
  categories: [],
  categoryItems: [],
}

export default (state = initialState, action) => {

  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_CATEGORY_ITEMS:
      return {
        ...state,
        categoryItems: action.payload,
      };
    default:
      return state;
  }
};
