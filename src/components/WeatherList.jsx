import css from "./styles.module.css";
import { WeatherSelectors } from "../store";
import React from "react";
import { useSelector } from "react-redux";

export const WeatherList = ({ city }) => {
  const data = useSelector(WeatherSelectors.getWeather);
  console.log(data);

  const values = [
    { label: "Humidity", value: `${data.humidity} %` },
    { label: "Feels Like", value: `${data.feels_like} °C` },
    { label: "Pressure", value: `${data.pressure} Pa` },
  ];
  return (
    <>
      <div className={css.top}>
        <div className={css.location}>
          <p>{city.charAt(0).toUpperCase() + city.slice(1)}</p>
        </div>
        <h1 className={css.temp}>{data.temp} °C</h1>
      </div>

      {values.map(({ label, value }) => (
        <div className={css.bottom}>
          <p className={css.bold}>{value}</p>
          <p>{label}</p>
        </div>
      ))}
    </>
  );
};
