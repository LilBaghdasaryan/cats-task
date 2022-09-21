
import { combineReducers } from 'redux'
import { catsCategoriesReducer } from "./categoriesReducer";

export const rootReducer = combineReducers({ categories: catsCategoriesReducer })