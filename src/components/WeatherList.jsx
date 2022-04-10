import React from "react";
import css from "./styles.module.css";

export class WeatherList extends React.Component {
  render() {
    return (
      <ul className={css.list}>
        <li className={css.item}>
          Temperature: {Math.floor(this.props.temp)}°C
          <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png`} />
        </li>
        <li className={css.item}>Humidity: {this.props.humidity}%</li>
        <li className={css.item}>Min temperature: {Math.floor(this.props.temp_min)}°C</li>
        <li className={css.item}>Max temperature: {Math.floor(this.props.temp_max)}°C</li>
      </ul>
    );
  }
}
