import { request } from "./request";

const host = "https://api.openweathermap.org/data/2.5";
const TOKEN = process.env.REACT_APP_TOKEN;

export const getCurrentWeather = ({ city, units = "metric" }) => {
  const url = `${host}/weather`;

  const params = {
    q: city,
    units,
    appid: "2931d2be32df91993b13f915018ac4e8",
  };

  return request(url, { params });
};
