import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export default {
  getParks: async () => {
    return axios
      .get(`${REACT_APP_API_URL}/parks`)
      .then(r => r.data)
      .catch(function(error) {
        return null;
      });
  }
};
