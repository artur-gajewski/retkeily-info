import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export default {
  getNews: async () => {
    return axios
      .get(`http://api.retkeily.info/news`)
      .then(r => r.data)
      .catch(function(error) {
        return null;
      });
  },
  addNews: async data => {
    return axios
      .post(`http://api.retkeily.info/news`, data)
      .catch(function(error) {
        return null;
      });
  }
};
