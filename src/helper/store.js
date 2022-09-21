import {  configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import { rootReducer } from "../reducers"

 const reducer = {
    rootReducer: rootReducer
 }

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
  })