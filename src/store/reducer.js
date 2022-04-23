import { LOAD_STATUSES } from "../constants";
import { WEATHER_ACTIONS } from "./constants";

const INITIAL_STATE = {
  data: {},
  loadStatus: LOAD_STATUSES.UNKNOWN,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WEATHER_ACTIONS.FETCH_START: {
      return {
        ...state,
        loadStatus: LOAD_STATUSES.LOADING,
      };
    }

    case WEATHER_ACTIONS.FETCH_SUCCESS: {
      return {
        data: action.payload,
        loadStatus: LOAD_STATUSES.LOADED,
      };
    }

    case WEATHER_ACTIONS.FETCH_ERROR: {
      return {
        data: {},
        loadStatus: LOAD_STATUSES.ERROR,
      };
    }

    default:
      return state;
  }
};
