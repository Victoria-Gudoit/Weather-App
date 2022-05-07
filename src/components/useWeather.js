import { WeatherSelectors } from "../store";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../store/slice";

export const useWeather = () => {
  const [city, setCity] = useState("");

  const isLoading = useSelector(WeatherSelectors.isLoading);
  const isLoaded = useSelector(WeatherSelectors.isLoaded);
  const isError = useSelector(WeatherSelectors.isError);

  const dispatch = useDispatch();

  const getWeather = (city) => dispatch(fetchWeather(city));

  const fetchWeatherDebounced = useCallback(
    debounce((city) => getWeather(city), 1000),
    []
  );

  useEffect(() => {
    if (city) {
      fetchWeatherDebounced({ city });
    }
  }, [city, fetchWeatherDebounced]);

  return { city, setCity, isLoading, isLoaded, isError };
};
