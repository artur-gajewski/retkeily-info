import { fetchNews } from "../services/news";

export const getNews = () => dispatch => {
  fetchNews().then(news => {
    dispatch({
      type: "SET_NEWS",
      payload: news
    });
  });
};
