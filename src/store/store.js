import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as weatherReducer } from "./slice";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
