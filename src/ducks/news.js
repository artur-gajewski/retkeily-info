import { createAction } from "redux-actions";
import newsService from "../services/news";

export const fetchNews = createAction("GET_NEWS", newsService.getNews);

const defaultState = {
  news: null
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_NEWS_FULFILLED":
      return {
        news: payload
      };
    default:
      return state;
  }
};
