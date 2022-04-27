import { WEATHER_ACTIONS } from "./constants";
import { getCurrentWeather } from "../api";

export const fetchStart = () => ({
  type: WEATHER_ACTIONS.FETCH_START,
});

export const fetchSuccess = (weather) => ({
  payload: weather,
  type: WEATHER_ACTIONS.FETCH_SUCCESS,
});

export const fetchError = () => ({
  type: WEATHER_ACTIONS.FETCH_ERROR,
});

export const fetchWeather = (city) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const weather = await getCurrentWeather(city);
      dispatch(fetchSuccess(weather.main));
    } catch {
      dispatch(fetchError());
    }
  };
};
