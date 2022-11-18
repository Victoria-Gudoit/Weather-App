import css from "./styles.module.css";
import { Loader } from "./common";
import { WeatherList } from "./WeatherList";
import { useWeather } from "./useWeather";

export const App = () => {
  const weatherController = useWeather();

  return (
    <div className={css.wrapper}>
      <div className={css.search}>
        <input
          className={css.input}
          value={weatherController.city}
          placeholder="Enter Location"
          onChange={({ target }) => weatherController.setCity(target.value)}
          type="text"
        />
      </div>
      <div className={css.container}>
        {weatherController.isLoading && <Loader />}

        {weatherController.isLoaded && (
          <WeatherList city={weatherController.city} />
        )}
        {weatherController.isError && (
          <span className={css.error}>Oops, try again :( (</span>
        )}
      </div>
    </div>
  );
};
