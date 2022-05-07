import css from "./styles.module.css";
import { Loader } from "./common";
import { WeatherList } from "./WeatherList";
import { useWeather } from "./useWeather";

export const App = () => {
  const weatherController = useWeather();

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>What's the weather like today?</h1>
      <input
        className={css.input}
        value={weatherController.city}
        placeholder="your city"
        onChange={({ target }) => weatherController.setCity(target.value)}
        type="text"
      />
      {weatherController.isLoading && <Loader />}
      {weatherController.isLoaded && <WeatherList />}
      {weatherController.isError && (
        <span className={css.error}>Oops, try again :( (</span>
      )}
    </div>
  );
};
