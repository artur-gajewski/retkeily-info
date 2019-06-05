import { createAction } from "redux-actions";
import parksService from "../services/parks";

export const fetchParks = createAction("GET_PARKS", parksService.getParks);

const defaultState = {
  parks: null
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_PARKS_FULFILLED":
      return {
        parks: payload
      };
    default:
      return state;
  }
};
