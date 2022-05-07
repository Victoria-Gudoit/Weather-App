import css from "./styles.module.css";
import { WeatherSelectors } from "../store";
import React from "react";
import { useSelector } from "react-redux";

export const WeatherList = () => {
  const data = useSelector(WeatherSelectors.getWeather);

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
};
