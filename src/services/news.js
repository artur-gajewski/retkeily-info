import axios from "axios";

//const { REACT_APP_API_URL } = process.env;
const REACT_APP_API_URL = "http://api.retkeily.info";

export default {
  getNews: async () => {
    return axios
      .get(`${REACT_APP_API_URL}/news`)
      .then(r => r.data)
      .catch(function(error) {
        return null;
      });
  },
  addNews: async data => {
    return axios.post(`${REACT_APP_API_URL}/news`, data).catch(function(error) {
      return null;
    });
  }
};
