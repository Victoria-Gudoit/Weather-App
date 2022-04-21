import React from "react";
import css from "./styles.module.css";
import { debounce } from "lodash";
import { Loader } from "./common";
import { WeatherList } from "./WeatherList";
import { connect } from "react-redux";
import { WeatherSelectors, WeatherAC } from "../store";

export class AppOriginal extends React.Component {
  state = {
    city: "",
  };

  fetchWeatherDebounced = debounce(this.props.getWeather, 1000);

  componentDidUpdate(_, prevState) {
    if (prevState.city !== this.state.city) {
      this.fetchWeatherDebounced({ city: this.state.city });
    }
  }

  render() {
    const { city } = this.state;
    const values = [
      { label: "Current temperature", value: `${this.props.data.temp} °C` },
      { label: "Current Humidity", value: `${this.props.data.humidity} %` },
      { label: "Min temperature", value: `${this.props.data.temp_min} °C` },
      { label: "Max temperature", value: `${this.props.data.temp_max} °C` },
    ];
    const { isLoading, isLoaded, isError } = this.props;

    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>What's the weather like today?</h1>
        <input
          className={css.input}
          value={city}
          placeholder="your city"
          onChange={(e) => this.setState({ city: e.target.value })}
          type="text"
        />
        {isLoading && <Loader />}
        {isError && <span className={css.error}>Oops, try again :( (</span>}
        {isLoaded && <WeatherList values={values} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: WeatherSelectors.getWeather(state),
    isLoading: WeatherSelectors.isLoading(state),
    isLoaded: WeatherSelectors.isLoaded(state),
    isError: WeatherSelectors.isError(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWeather: (city) => dispatch(WeatherAC.fetchWeather(city)),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppOriginal);
