import React from "react";
import css from "./styles.module.css";
import {debounce} from 'lodash'
import { getCurrentWeather } from "../api";
import { LOAD_STATUSES } from "../constants";
import { Loader } from "./common";
import { WeatherList } from "./WeatherList";

export class App extends React.Component {
  state = {
    city: '',
    data: {},
    loadStatus: LOAD_STATUSES.UNKNOWN
  }

  fetchWeather = (params) => {
    this.setState({loadStatus: LOAD_STATUSES.LOADING})

    getCurrentWeather(params).then(({main, weather}) => {
      this.setState({loadStatus: LOAD_STATUSES.LOADED, data:{...main, icon: weather[0].icon} })
    }).catch(() => {
      this.setState({loadStatus: LOAD_STATUSES.ERROR, data: {}})
    })
  }

  fetchWeatherDebounced = debounce(this.fetchWeather, 1000)

  componentDidUpdate(_, prevState) {
    if(prevState.city !== this.state.city) {
         this.fetchWeatherDebounced({city: this.state.city})
    }
  }

  render() {
    const {city} = this.state
    const values = [{ label: 'Current temperature', value: this.state.data.temp }, { label: 'Current Humidity', value: this.state.data.humidity }, { label: 'Min temperature', value: this.state.data.temp_min }, { label: 'Max temperature', value: this.state.data.temp_max },];

    return <div className={css.wrapper}>
      <h1 className={css.title}>What's the weather today?</h1>
      <input className={css.input} value={city} placeholder='your city' onChange = {(e) => this.setState({city: e.target.value})} type="text" />
       {this.state.loadStatus === LOAD_STATUSES.LOADING && <Loader/>}
       {this.state.loadStatus === LOAD_STATUSES.ERROR && <span className={css.error}>Oops, try again :( (</span>}
       {this.state.loadStatus === LOAD_STATUSES.LOADED && 
        <WeatherList values={values}/>
       }
    </div>
  }
}
