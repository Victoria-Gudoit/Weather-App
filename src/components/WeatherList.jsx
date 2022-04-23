import css from "./styles.module.css";
import { connect } from "react-redux";
import { WeatherSelectors } from "../store";
import React from "react";

class WeatherListOriginal extends React.Component {
  render() {
    const { data } = this.props;
    const values = [
      { label: "Current temperature", value: `${data.temp} °C` },
      { label: "Current Humidity", value: `${data.humidity} %` },
      { label: "Min temperature", value: `${data.temp_min} °C` },
      { label: "Max temperature", value: `${data.temp_max} °C` },
    ];
    return (
      <ul className={css.list}>
        {values.map(({ label, value }) => (
          <li key={label} className={css.item}>
            {label}: {value}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: WeatherSelectors.getWeather(state),
  };
};

export const WeatherList = connect(mapStateToProps)(WeatherListOriginal);
