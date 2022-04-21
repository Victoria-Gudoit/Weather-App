import css from "./styles.module.css";
import {v4 as uuidv4} from "uuid"

export const WeatherList = ({values}) => {
    return (
      <ul className={css.list}>
{values.map(({ label, value }) => <li key={uuidv4()} className={css.item}>{label}: {value}</li>)}
      </ul>
    );
}
