import foodItems from '../SeedData/foodItemSeed';
import { GET_CATEGORIES, SET_CATEGORY_ITEMS } from './types';

export const getCategories = () => {
  const dataArray = foodItems.data
  const uniqueCategoriesArray = [...new Set(dataArray.map(dataArray => dataArray.category))]
  const newCategoriesList = [...new Set(uniqueCategoriesArray.map(uniqueCategoriesArray => ({'category':uniqueCategoriesArray,}) ))]
  return  {
    type: GET_CATEGORIES,
    payload: newCategoriesList,
  }
};

export const setCategoryItems = (categoryItems) => {
  return {
    type: SET_CATEGORY_ITEMS,
    payload: categoryItems,
  };
};