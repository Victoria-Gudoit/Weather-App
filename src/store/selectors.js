import { LOAD_STATUSES } from "../constants";

export const getWeather = (state) => state.weatherReducer.data;

export const getLoadStatus = (state) => state.weatherReducer.loadStatus;

export const isLoading = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADING;

export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;

export const isLoaded = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADED;
